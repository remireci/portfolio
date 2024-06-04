"use client"
import React from "react";
import Image from "next/image";

const Work_5: React.FC = () => {

    return (
        <div className="section-container">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <a href="https://nasa-project-2.onrender.com" target="_blank">
                            <Image
                                width={1500}
                                height={500}
                                src="/images/work003-01.jpg"
                                className="img-responsive"
                                alt=""
                            />
                        </a>
                        <div className="card-container">
                            <div className="text-center">
                                <h1 className="h2">005 : Demo Space Project</h1>
                            </div>
                            <p>
                                This site is a dockerized node.js application running in a virtual computing environment
                                (Render). It retrieves data from the SpaceX-API. MongoDB is used to store these and newly
                                added data on a separate server.
                            </p>

                            <blockquote>
                                <p>&quot;Making APIs publicly available isn&apos;t
                                    a purely benevolent gesture on the part of providers. Most organisations recognize
                                    that APIs represent a new and, in some cases, astoundingly profitable revenue stream...&quot;
                                </p>
                                <small className="pull-right">Debbie Walkowski</small>
                            </blockquote>


                        </div>
                        <div className="descr mx-auto sm:w-full md:w-1/2">
                            <p>An API is an application programming interface that enables data extraction to be utilized in
                                another application.
                                An open or public API is publicly available for developers and other users.
                                The SpaceX-API is an open source REST API for rocket, core, capsule, pad, and launch data,
                                created and
                                maintained by the developers of the r/SpaceX organization.
                                <br />
                                <br />
                                <br />

                                This demo <b><a href="https://nasa-project-2.onrender.com" target="_blank">site</a></b> was built for educational purposes.
                                <br />
                                <br />
                            </p>

                        </div>

                    </div>
                    <div className="col-md-8 col-md-offset-2 section-container-spacer">
                        <div className="row">
                            <div className="col-xs-12 col-md-6">
                                <a href="https://nasa-project-2.onrender.com" target="_blank">
                                    <Image
                                        width={1500}
                                        height={500}
                                        src="/images/work003-02.jpg"
                                        className="img-responsive"
                                        alt=""
                                    />
                                </a>
                                <p></p>
                            </div>
                            <div className="col-xs-12 col-md-6">
                                <Image
                                    width={1500}
                                    height={500}
                                    src="/images/work003-03.jpg"
                                    className="img-responsive"
                                    alt=""
                                />
                                <p></p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xs-12">
                        <Image
                            width={1500}
                            height={500}
                            src="/images/work003-04.jpg"
                            className="img-responsive"
                            alt=""
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Work_5;