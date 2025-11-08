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
       <div className="relative w-full min-h-screen flex flex-col md:flex-row justify-center items-center overflow-hidden px-6 sm:px-10 md:px-16 lg:px-20 xl:px-32 2xl:px-48 py-12">

  <img
    src={Footervector}
    alt="Footer Vector"
    className="absolute bottom-0 left-0 w-[40%] sm:w-[35%] md:w-[30%] lg:w-[25%] xl:w-[22%] 2xl:w-[20%] opacity-80 pointer-events-none"
  />
  <img
    src={Footervector1}
    alt="Footer Vector 1"
    className="absolute top-0 right-0  w-[45%] sm:w-[40%] md:w-[35%] lg:w-[34%] xl:w-[32%] 2xl:w-[30%] opacity-80 pointer-events-none"
  />

  <div className="relative w-full md:w-1/2 flex items-center justify-center text-center md:text-left mt-10 md:mt-0 px-2 sm:px-4 md:px-8">
    <p className="font-instrument text-gray-800 w-[90%] sm:w-[80%] md:w-[70%] font-normal not-italic text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-[150%] tracking-[0]">
      Whether you have an idea, a question, or simply want to explore how V can
      work together, V’re just a message away.
      <br />
      <br />
      Let’s catch up over coffee.
      <br />
      <br />
      Great stories always begin with a good conversation.
    </p>
  </div>

  <div className="relative w-full md:w-1/2 flex flex-col items-center justify-center z-10 mt-10 md:mt-0 space-y-4 sm:space-y-6 text-center">
    <h1 className="font-halant text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-normal">
      Join the Story
    </h1>
    <h2 className="font-instrument text-[16px] sm:text-[18px] md:text-[20px] font-normal max-w-[80%] sm:max-w-[70%] mx-auto">
      Ready to bring your vision to life? Let’s talk.
    </h2>

    <input
      type="text"
      value={formData.name}
      onChange={handleChange}
      name="name"
      placeholder="Your name*"
      className="w-[90%] sm:w-[80%] md:w-[75%] px-4 py-3 bg-white border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#F15D2B]"
    />
    <input
      type="email"
      value={formData.email}
      onChange={handleChange}
      name="email"
      placeholder="Your email*"
      className="w-[90%] sm:w-[80%] md:w-[75%] px-4 py-3 bg-white border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#F15D2B]"
    />
    <input
      type="tel"
      value={formData.phone}
      onChange={handleChange}
      name="phone"
      placeholder="Phone number"
      className="w-[90%] sm:w-[80%] md:w-[75%] px-4 py-3 bg-white border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#F15D2B]"
    />
    <textarea
      name="message"
      value={formData.message}
      onChange={handleChange}
      placeholder="Your message*"
      className="w-[90%] sm:w-[80%] md:w-[75%] px-4 py-3 bg-white border border-gray-200 rounded-md h-32 sm:h-36 md:h-40 resize-none focus:outline-none focus:ring-2 focus:ring-[#F15D2B]"
    />


    <button
      onClick={handleSubmit}
      className="mt-4 sm:mt-6 px-6 sm:px-8 py-3 bg-[#F15D2B] rounded-3xl text-white font-instrument font-normal text-[16px] sm:text-[18px] hover:bg-[#d44f1f] transition-all"
    >
      Submit
    </button>
  </div>
</div>

    )
}

export default Contact
