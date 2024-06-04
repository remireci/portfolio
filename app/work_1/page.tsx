"use client"
import React from "react";
import Image from "next/image";

const Work_1: React.FC = () => {

    return (
        <div className="section-container">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <a href="https://www.triangel-loopbaantest.be/" target="_blank">
                            <Image
                                width={1500}
                                height={500}
                                src="/images/work001a-01.jpg"
                                className="img-responsive"
                                alt=""
                            />
                        </a>
                        <div className="card-container">
                            <div className="text-center">
                                <h1 className="h2">001 : React - Next.js web application</h1>
                            </div>
                            <p>For many developers, the front end is where the magic happens. It’s the space where code comes to life,
                                transforming static HTML, CSS, and JavaScript into rich, interactive experiences.
                            </p>
                            <blockquote>
                                <p>"React stands out in the crowded
                                    field of front-end libraries due to its unique set of features, designed to optimize performance, improve code
                                    maintainability, and enhance the overall development experience."</p>
                                <small className="pull-right">April Bohnert</small>
                            </blockquote>
                        </div>
                        <div className="descr">
                            <p>Triangel vzw wanted a <a href="https://www.triangel-loopbaantest.be/" target="_blank">test</a> with 18 questions in random order, where the user can scroll back through the submitted
                                questions and adjust the answer at any time. The scores are converted into a personal text result that is displayed immediately.
                                A form allows the user to contact the organization, which will then automatically receive the test result by e-mail.
                                The user can only take the test once. IP addresses are encrypted and stored in a database.
                                The application is developed in Next.js, uses the Vercel Postgres database, and Rest APIs to retrieve json data, to store data and to automatically send mails.
                                In short, a small modern application with a lot of functionality!
                            </p>
                        </div>
                    </div>
                    <div className="col-md-8 col-md-offset-2 section-container-spacer">
                        <div className="row">
                            <div className="col-xs-12 col-md-6">

                                <p></p>
                            </div>
                            {/* <div className="col-xs-12 col-md-6">
                                <Image
                                    width={500}
                                    height={500}
                                    src="/images/work001-03.jpg"
                                    className="img-responsive"
                                    alt=""
                                />
                                <p></p>
                            </div> */}
                        </div>
                    </div>

                    <div className="col-xs-12">
                        <a href="https://www.triangel-loopbaantest.be/" target="_blank">
                            <Image
                                width={1500}
                                height={500}
                                src="/images/work001a-02.jpg"
                                className="img-responsive"
                                alt=""
                            />
                        </a>
                        <Image
                            width={1500}
                            height={500}
                            src="/images/work001a-03.jpg"
                            className="img-responsive"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Work_1;