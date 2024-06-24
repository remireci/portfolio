"use client"
import React from "react";
import { usePathname } from "next/navigation";


const Footer: React.FC = () => {

    const path = usePathname();
    const isNotHomePage = path != "/";

    return (
        <footer className="footer-container text-center">
            <div className="container">
                <div className="row">
                    {isNotHomePage && (
                        <div className="col-xs-12">
                            <p>© RECIPROQUE | Website created with &nbsp;
                                {/* <a href="http://www.mashup-template.com/" title="Create website with free html template"> */}
                                     Mashup Template
                                    {/* </a> */}
                                    /</p>
                        </div>
                    )}
                </div>
            </div>
        </footer>
    )
}

export default Footer;