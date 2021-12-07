import React, { useEffect, useState } from 'react';
import "../App.css"

const Contact = () =>{

    const [useData, setUserData] = useState({});

    const userContact = async () =>{
        try{
            const res = await fetch('/getdata', {
                method: 'GET',
                headers: {
                    Accept: "application/json",                    
                    "Content-Type": "application/json" },
            });

            const data = await res.json();
            console.log(data);
            setUserData(data);

            if(!res.status === 200){
                const error = new Error(res.error);
                throw error
            }

        }catch(err){
            console.log(err)   
        }
    }

    useEffect(() =>{
        userContact();
    }, []);

    return(
        <>
        <div className="contact_info">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1 d-flex justify-content-lg-between">
                        <div className="contact_info_item d-flex justify-content-start align-items-center">
                            <img  id="conticon" src="https://img.icons8.com/ios/20/000000/phone.png"/>
                            <div className="contact_info_content">
                            <div className="contact_info_title">
                                phone
                            </div>
                            <div className="contact_info_text">
                                {useData.phone}
                            </div>
                            </div>
                        </div>

                        <div className="contact_info_item d-flex justify-content-start align-items-center">
                        <img id="conticon" src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/20/000000/external-email-cyber-security-kiranshastry-lineal-kiranshastry-1.png"/>
                            <div className="contact_info_content">
                            <div className="contact_info_title">
                                email
                            </div>
                            <div className="contact_info_text">
                                {useData.email}
                            </div>
                            </div>
                        </div>

                        <div className="contact_info_item d-flex justify-content-start align-items-center">
                        <img id="conticon" src="https://img.icons8.com/ios/20/000000/employee-card.png"/>
                            <div className="contact_info_content">
                            <div className="contact_info_title">
                                Username
                            </div>
                            <div className="contact_info_text">
                                {useData.username}
                            </div>
                            </div>
                        </div>
                    </div>

            </div>

            </div>

        </div>

        {/* Contact us form */}

        <div className="contact-form">
            <div className='container'>
                <div className="row">
                    <div className="cont col-lg-10 offset-lg-1">
                        <div className="contact_form_container py-1">
                            <div className="contact_form_title">
                                Get in Touch
                            </div>
                            <form id="contact_form" method="GET">
                                <div className="contact_form_name d-flex justify-content-between align-items-between">
                                    <input type="text" id="contact_form_name" className="contact_form_name input_field"  value={useData.username} placeholder="Your name" required={true} />
                                    <input type="email" id="contact_form_email" className="contact_form_email input_field" value={useData.email} placeholder="Your email" required={true} />
                                    <input type="number" id="contact_form_phone" className="contact_form_phone input_field" value={useData.phone} placeholder="Your phone no" required={true} />
                                </div>

                                <div className="contact_form_text mt-5">
                                    <textarea className="text_field contact_form_message" placeholder="Message" cols="95" rows="8"></textarea>
                                </div>

                                <div className="contact_form_button">
                                    <button type="submit" className="button contact_submit_button">Send Message</button>
                                </div>
                            </form>
                             
                        </div>

                    </div>

            </div>

            </div>
        </div>
        </>
    )
}

export default Contact;