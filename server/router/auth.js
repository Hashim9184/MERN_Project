const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Authenticate  = require('../middleware/Authenticate');

require('../db/conn');
const User = require("../model/userSchema");


router.get('/', (req, res)=>{
    res.send(`Hello world from the server router js`);
});

// Using Async and Await

router.post('/register', async (req, res) =>{

    
    const {fname, lname, username, email, phone, password, cpassword} =req.body;
    
    if(!fname || !lname || !username || !email || !phone || !password || !cpassword){
        return res.status(422).json({error: `Fill all the field in the form properly!!`});
    }

    try{
        // Finding user has already registered with same Email or Username

        const emailExist = await User.findOne({email:email});
        const userExist = await User.findOne({username:username});
        
        if(emailExist){
            return res.status(422).json({error: "Email already exists"});
 }
 if(userExist){
     return res.status(422).json({error: "Username already exists"});
    }
    
    const user = new User({fname, lname, username, email, phone, password, cpassword});
    

    await user.save();
    
    res.status(201).json({message: `User registered succusfull`});

}catch(err){
    console.log(err);
}

});

// login route

router.post('/signin', async (req, res) =>{
    try{
        const {username, email, password} = req.body;
        
        if((!!email && !!username) || (!email && !username)) {
            return res.status(400).json({error: "Enter Username or Password correctly"})
        }
        if (!password) {
            return res.status(400).json({error: "Fill all the details properly"})
        }

        const userLogin = await User.findOne(email ? { email } : { username })
        // console.log(userLogin);
        
        if(userLogin){
            const isMatch = await bcrypt.compare(password, userLogin.password)
            
            // Generating tokens
            let token;
            
            token = await userLogin.generateAuthToken();
            // console.log(token);
            
            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            });
    
// Generated Token

            if(!isMatch){
                res.status(400).json({error: "Invalid Credientials"})
            }else{
                res.json({message: "User Signin Successfully"})
            }
        }else{
            res.status(400).json({error: "Invalid Credientials"})
        }

      
    }catch(err){
        console.log(err)
    }

})

// router.delete('/:userID', Authenticate, async(req, res) =>{
//     try{
//         let emp = await User.findById(req.userID);
//         if(!emp){
//             return res.status(401).json({msg: 'User not found'});
//         }
//         User.findByIdAndRemove(req.userID)
//         res.json({msg: 'User deleted'})
//     }catch(emp){
//         console.log(err.messages)
//         res.status(500).send('Server Error');
//     }
//user });

router.get('/delete/(:id)', Authenticate, function(req, res, next) {
    User.findByIdAndRemove(req.userID, (err, doc) => {
        if (!err) {
            res.redirect('/user');
        } else {
            console.log('Failed to Delete user Details: ' + err);
        }
    });
});

router.get('/getdata', Authenticate ,(req, res) =>{
   res.send(req.rootUser);
})

router.get('/api', (req, res)=>{
    User.find({})
    .then((data) => {
        res.json(data);
    })
    .catch((err) =>{
        console.log('error: ', dearrortal)
    })
    });


    router.get('/logout', Authenticate ,(req, res) =>{
        res.clearCookie('jwtoken', {path:'/'});
        res.status(200).send('User logout');
     })

module.exports = router;