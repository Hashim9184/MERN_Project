const dotenv = require('dotenv');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

dotenv.config({path: 'config.env'});
require('./db/conn');
// const User = require('./model/userSchema');

app.use(express.json());
app.use(cookieParser())


// linking the router file to make routing easy.
app.use(require('./router/auth'));
app.use(require('./middleware/Authenticate'));

const PORT = process.env.PORT;

// app.get('/about', middleware, (req, res)=>{
//     console.log('HEllo my about')
//     res.send(`Hello about from my first server`);
// });

// app.get('/signin', (req, res)=>{
//     res.send(`Hello Signin from my first server`);
// });


// app.get('/signup', (req, res)=>{
//     res.send(`Hello Signup from my first server`);
// });

app.listen(8080, ()=>{
    console.log(`Server is running on Port no ${PORT}`);
});