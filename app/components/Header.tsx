"use client"
import React from "react";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {

    const path = usePathname();
    const isHomePage = path === '/';
    const isWorkPage = path.startsWith('/work_');

    return (
        <header>
            <nav className={`navbar navbar-fixed-top  ${isHomePage ? "navbar-inverse" : "navbar-default"}`}>
                <div className="container">
                    <button
                        type="button"
                        className="navbar-toggle collapsed"
                        data-toggle="collapse"
                        data-target="#navbar-collapse"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbar-collapse">
                        <ul className="nav navbar-nav ">
                            <li><a href="/" title="">01 : Home</a></li>
                            <li><a href="/services" title="">02 : Services</a></li>
                            <li><a href="/works_demos" title="">03 : Works & Demos</a></li>
                            <li><a href="/about" title="">04 : About</a></li>
                            <li><a href="/contact" title="">05 : Contact</a></li>
                        </ul>
                        {isWorkPage && (
                            <ul className="nav navbar-nav navbar-right navbar-small visible-md visible-lg">
                                <li><a href="/work_1" title="">001</a></li>
                                <li><a href="/work_2" title="">002</a></li>
                                <li><a href="/work_3" title="">003</a></li>
                                <li><a href="/work_4" title="">004</a></li>
                                <li><a href="/work_5" title="">005</a></li>
                                {/* <li><a href="/" title="">006</a></li> */}
                            </ul>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    )
}


export default Header;