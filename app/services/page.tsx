"use client"

import React from "react";
import Image from "next/image";

const Services: React.FC = () => {

    return (

        <div className="section-container">
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 col-sm-offset-2 section-container-spacer">
                        <div className="text-center">
                            <h1 className="h2">02 : Services</h1>
                            <p className="h3"><b>under construction</b>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-12">
                    <div className="descr">
                        <p>
                            Reciproque provides services to developers, organizations and businesses.
                        </p>
                        <p>
                            In the future you will find here online services, like:
                        </p>
                        <ul>
                            <li>developers conversions page:
                                <h1 className="h4">MongoDB Exports in JSON</h1>
                                <p>
                                    MongoDB exports in JSON contain elements that cannot be read right away.
                                    With this online application you can convert your MongoDB export to a strict JSON file,
                                    that can be read by most software.
                                </p>

                            </li>
                            <li>online software:
                                <h1 className="h4">Accounting Software</h1>
                                <p>
                                Online accounting software makes bookkeeping easy.
                                For many self-employed individuals and organizations, accountant fees have become a heavy burden. 
                                With this software, you can easily and quickly do your own bookkeeping. 
                                </p>
                            </li>


                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;