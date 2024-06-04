"use client"
import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { toast } from 'react-toastify';
import Image from "next/image";

const About: React.FC = () => {
    const router = useRouter();
    const [email, setEmail] = useState<string>('');
    const [subject, setSubject] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Regular expression for email validation
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/;

        // Check if required fields are provided
        if (!email || !subject || !message) {
            toast.error('Vul alle verplichte velden in!');
            return;
        }

        // Check if the provided email is valid
        if (email && !emailRegex.test(email)) {
            toast.error('Je e-mailadres is niet geldig!');
            return;
        }


        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, subject, message }),
            });

            if (response.ok) {
                toast.success("Message was sent successfully. We'll be in touch soon.")
                router.push("/");
            } else {
                // console.error('Error sending email');
                const errorData = await response.json();
                toast.error(errorData.message || 'Error sending email');
                // Handle error
            }
        } catch (error) {
            console.error('Error:', error);
            // Handle error
        }
    };


    return (
        <div className="section-container">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="section-container-spacer text-center">
                            <h1 className="h2">05 : Contact</h1>
                        </div>

                        <div className="row">
                            <div className="col-md-10 col-md-offset-1">
                                <form
                                    onSubmit={handleSubmit}
                                    className="reveal-content">
                                    <div className="row">
                                        <div className="col-md-7">
                                            <div className="form-group">
                                                <input
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    type="email"
                                                    className="form-control"
                                                    id="email"
                                                    placeholder="Email"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    value={subject}
                                                    onChange={(e) => setSubject(e.target.value)}
                                                    name="subject"
                                                    type="text"
                                                    className="form-control"
                                                    id="subject"
                                                    placeholder="Subject"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <textarea
                                                    value={message}
                                                    onChange={(e) => setMessage(e.target.value)}
                                                    name="message"
                                                    className="form-control"
                                                    rows={8}
                                                    placeholder="Enter your message">
                                                </textarea>
                                            </div>
                                            <button type="submit" className="btn btn-default btn-lg">Send</button>
                                        </div>
                                        <div className="col-md-5 address-container">
                                            <ul className="list-unstyled">
                                                <li>
                                                    <span className="fa-icon">
                                                        <i className="fa fa-phone" aria-hidden="true"></i>
                                                    </span>
                                                    <a className="h4">+ 32 499 167 510</a>
                                                </li>
                                                <li>
                                                    <span className="fa-icon">
                                                        <i className="fa fa-at" aria-hidden="true"></i>
                                                    </span>
                                                    <a className="h4"
                                                        href="mailto:info@reciproque.eu"
                                                    // className='sm:text-sm hover:text-gray-400'
                                                    >
                                                        info@reciproque.eu
                                                    </a>
                                                </li>
                                                <li>
                                                    <span className="fa-icon">
                                                        <i className="fa fa fa-map-marker" aria-hidden="true"></i>
                                                    </span>
                                                    <a className="h4">Bertrix, Belgium</a>
                                                </li>
                                            </ul>
                                            <h3>Check my github and linkedin</h3>
                                            <a href="https://github.com/remireci" target="_blank" title="" className="fa-icon">
                                                <i className="fa fa-github"></i>
                                            </a>
                                            <a href="https://www.linkedin.com/in/dirk-mertens-0b2b98258/" target="_blank" title="" className="fa-icon">
                                                <i className="fa fa-linkedin"></i>
                                            </a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default About;