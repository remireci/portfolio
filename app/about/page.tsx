"use client"
import React from "react";
import Image from "next/image";

const About: React.FC = () => {

    return (
        <div className="section-container">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="section-container-spacer text-center">
                            <h1 className="h2">04 : About</h1>
                        </div>

                        <div className="row">
                            <div className="col-md-10 col-md-offset-1">
                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <h1 className="h3">web development & SEO</h1>
                                        <p>Réciproque develops custom web and mobile applications, from web sites and web shops to large and complex
                                            business and scientific web platforms.
                                            Our secure, scalable and high-performance applications are built using the latest technologies.
                                        </p>
                                        <p>
                                            Whether we work for an individual, an organisation or a company, all our web applications are
                                            designed to rank high in search engines. Search Engine Optimisation (SEO) is an inherent part
                                            of web development at réciproque. It is not an additional service that the client has to pay extra for.
                                        </p>
                                        <h1 className="h3">custom software development </h1>
                                        <p>Réciproque develops custom software for educational, commercial and communication purposes.
                                            Small businesses and organizations do a lot of work with limited resources, which makes technology solutions
                                            particularly valuable to them.
                                        </p>
                                        <p>Our software for automating of daily processes includes:</p>
                                        <ul>
                                            <li>reading and entering data</li>
                                            <li>data extraction and processing</li>
                                            <li>data analysis</li>
                                            <li>machine learning</li>
                                            <li>AI applications, local AI chatbot</li>
                                            <li>...</li>
                                        </ul>
                                        <p>
                                            Many small business owners may dismiss certain technologies out of
                                            hand, thinking they&apos;re unaffordable or inapplicable to their business. In many cases, they couldn&apos;t
                                            be more wrong.
                                        </p>
                                        <h1 className="h3">debugging and refactoring</h1>
                                        <p>
                                            Existing software can be debugged and refactored by réciproque to improve performance.
                                            Réciproque helps people and organizations with their projects by writing good code.
                                            Good code is easy to read and understand, and has a well-designed architecture.
                                            Good code is easy for an organization to maintain and lives  longer than the sprint in
                                            which it was written.
                                        </p>
                                        <h1 className="h3">technologies</h1>
                                        <p>
                                            Full stack web development is done by réciproque in Typescript / Javascript, using Node.js,
                                            React.js, Next.js. Applications can be dockerized and if needed deployed on a cloud service.

                                            Existing software can be debugged and refactored by réciproque to improve performance.
                                            Réciproque helps people and organizations with their projects by writing good code.
                                            Good code is easy to read and understand, and has a well-designed architecture.
                                            Good code is easy for an organization to maintain and lives  longer than the sprint in
                                            which it was written.
                                        </p>
                                        {/* I take into account the needs and the preferences of the customer. */}

                                        <h1 className="h3">region</h1>
                                        <p>
                                            At réciproque we speak English, French and Dutch.
                                        </p>
                                        <p>
                                            We code in Javascript, Typescript and Python - and sometimes in C#.
                                            Of course we use SQL for databases.
                                        </p>
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                        <Image
                                            width={2500}
                                            height={3500}
                                            src="/images/profil.jpg"
                                            className="img-responsive"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default About;