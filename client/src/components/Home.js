import React ,{useState, useEffect} from 'react';

const Home = () =>{

    const [userName, setUserName] = useState('');
    const [show , setShow] = useState(false)
    // const show = true;

    const userNamew = async () =>{
        try{
            const res = await fetch('/getdata', {
                method: 'GET',
                headers: {
                    Accept: "application/json",                    
                    "Content-Type": "application/json" },
            });

            const data = await res.json();
            console.log(data);
            setUserName(data.fname);
            setShow(true)

            if(!res.status === 200){
                const error = new Error(res.error);
                throw error
            }

        }catch(err){
            console.log(err)   
        }
    }

    useEffect(() =>{
        userNamew();
    }, []);


    return(
        <>
        <div className="home-page">
            <div className="home-div">
                <p className=" wel pt-5">Welcome <span className="user">{userName}</span></p>
                    <h1>{ show ? 'Happy, to see you back!' : 'Welcome to Company'}</h1>

            </div>

        </div>
        </>
    )
}

export default Home;