"use client"
import React from "react";
import Image from "next/image";

const Work_3: React.FC = () => {

    return (
        <div className="section-container">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">

                        <a href="https://algorithms-energy-3.onrender.com/" target="_blank">
                            <Image
                                width={1500}
                                height={500}
                                src="/images/work001-01.jpg"
                                className="img-responsive"
                                alt=""
                            />
                        </a>
                        <div className="card-container">
                            <div className="text-center">
                                <h1 className="h2">003 : Algorithms & Energy</h1>
                            </div>
                            <p>Programmers and scientists have invented many different algorithms for achieving the same goal.
                                Sorting algorithms do all exactly the same thing: they sort. But they do it in a different way.

                            </p>

                            <blockquote>
                                <p>&quot;Accounting for about two percent of total greenhouse gas emissions, data centres have the same carbon
                                    footprint as the aviation industry.
                                    By 2040, storing digital data is set to create 14 percent of the world&apos;s emissions&quot;</p>
                                <small className="pull-right">Charlotte Trueman</small>
                            </blockquote>
                        </div>
                        <div className="descr">
                            <p>Many of the sustainability initiatives of data centers are based on using renewable energy for cooling
                                systems to
                                reduce power consumption. However, besides the energy required to maintain environmental controls for data
                                analytics, the software itself
                                also has a significant effect on the amount of electricity being consumed.
                                Experiments show that standard sorting algorithms, which are not only used in various devices directly,
                                but als very often implicitly by
                                other algorithms, have different energy consumptions. The use of energy efficient sorting algorithms will
                                contribute to green computing.
                                Try the different algorithms on <a href="https://algorithms-energy-3.onrender.com/" target="_blank">this site</a>, compare their time efficiency
                                and learn more about their energy efficiency.
                                <br />
                                <br />
                                This site is a dockerized node.js application running in a virtual computing environment (Render).
                                <br />

                                <br />
                            </p>
                        </div>
                    </div>

                    <div className="col-md-8 col-md-offset-2 section-container-spacer">
                        <div className="row">
                            <div className="col-xs-12 col-md-6">
                                <a href="https://algorithms-energy-3.onrender.com/" target="_blank">
                                    <Image
                                        width={500}
                                        height={500}
                                        src="/images/work001-02.jpg"
                                        className="img-responsive"
                                        alt=""
                                    />
                                </a>
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
                        <Image
                            width={1500}
                            height={500}
                            src="/images/work001-04.jpg"
                            className="img-responsive"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work_3;