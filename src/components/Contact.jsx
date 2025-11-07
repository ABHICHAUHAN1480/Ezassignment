import React from 'react'
import { useState } from 'react'
import Footervector from '../assets/Footer vector.png'
import Footervector1 from '../assets/Footer vector (1).png'
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, phone, message } = formData;

        if (!name.trim() || !email.trim() || !message.trim()) {
            alert("Please fill in all required fields.");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return
        }

        const phoneRegex = /^[0-9]{10,15}$/
        if (phone.trim() &&!phoneRegex.test(phone)) {
            alert("Please enter a valid phone number (10–15 digits).")
            return
        }

        if (message.trim().length < 10) {
            alert("Message should be at least 10 characters long.");
            return
        }

        try {
            const response = await fetch("https://vernanbackend.ezlab.in/api/contact-us/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    phone,
                    message,
                }),
            })

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`)
            }

            const data = await response.json()
            console.log("Form submitted successfully:", data)
            alert("Thank you! Your message has been sent successfully.")

            setFormData({
                name: "",
                email: "",
                phone: "",
                message: "",
            })
        } catch (error) {
            console.error("Error submitting form:", error)
            alert("Something went wrong while submitting. Please try again.")
        }
    };




    return (
        <div className='min-w-screen min-h-[calc(100vh-192px)] relative flex justify-center items-center '>
            <img src={Footervector} alt="Footer Vector" className=' absolute bottom-0 left-0 w-1/4' />
            <img src={Footervector1} alt="Footer Vector 1" className='absolute top-0 right-0 -mt-24 w-1/3' />
            <div className='min-w-1/2 h-screen flex  items-center justify-center ' >
                <p className="font-instrument w-2/3 font-normal not-italic text-xl leading-[100%] tracking-[0]">
                    Whether you have an idea, a question, or simply want to explore how V can work together, V’re just a message away.
                    <br /><br />
                    Let’s catch up over coffee.
                    <br /><br />
                    Great stories always begin with a good conversation
                </p>

            </div>
            <div className='min-w-1/2 h-screen flex flex-col  items-center justify-center z-10' >
                <h1 className='font-halant text-4xl font-normal'>Join the Story</h1>
                <h2 className='font-instrument text-xl font-normal'>Ready to bring your vision to life? Let’s talk.</h2>
                <input type="text" value={formData.name} onChange={handleChange} name="name" placeholder='Your name*' className='w-2/3 mt-12 px-[11.5px] py-[10.5px] bg-white' />
                <input type="email" value={formData.email} onChange={handleChange} name="email" placeholder='Your email*' className='w-2/3 mt-6 px-[11.5px] py-[10.5px] bg-white' />
                <input type="tel" value={formData.phone} onChange={handleChange} name="phone" placeholder='phone number' className='w-2/3 mt-6 px-[11.5px] py-[10.5px] bg-white' />
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your message*" className="w-2/3 mt-6 px-[11.5px] py-[10.5px] bg-white h-32  align-top" />

                <button onClick={handleSubmit} className=' mt-6 px-4 py-3 bg-[#F15D2B] rounded-3xl text-white font-instrument font-normal'>Submit</button>
            </div>
        </div>
    )
}

export default Contact
