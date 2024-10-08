import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

function EmailForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [number, setNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceId = import.meta.env.VITE_SERVICE_ID;
        const templateId = import.meta.env.VITE_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_PUBLIC_KEY;

        const templateParams = {
            from_name: name,
            ph_number: number,
            email: email,
            to_name: 'Design Factory Group',
            message: message,
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log("Email sent successfully", response);
                setName('');
                setEmail('');
                setMessage('');
                setNumber('');
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
                <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
                
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Enter Your Name</label>
                    <input
                        type="text"
                        placeholder="Enter Your Name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required={true}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Enter Your Email</label>
                    <input
                        type="email"
                        placeholder="Enter Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required={true}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="number" className="block text-sm font-medium text-gray-700">Enter Your Number</label>
                    <input
                        type="number"
                        placeholder="Enter Your Number"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required={true}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Enter Your Message</label>
                    <textarea
                        name="message"
                        rows={5}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Enter Your Message here"
                        className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-md transition duration-300"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default EmailForm;
