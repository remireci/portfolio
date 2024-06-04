"use client"
import React from "react";
import Image from "next/image";

const Work_4: React.FC = () => {

    return (
        <div className="section-container">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <a href="https://neural-network-self-driving-car.vercel.app" target="_blank">
                            <Image
                                width={1500}
                                height={500}
                                src="/images/work002-01.jpg"
                                className="img-responsive"
                                alt=""
                            />
                        </a>
                        <div className="card-container">
                            <div className="text-center">
                                <h1 className="h2">004 : Self-Driving Car</h1>
                            </div>
                            <p> Watch how your machine will compute, by trial and error, a neural network that acts as a
                                trustworthy driver. Learn the code in a course by computer scientist Radu Mariescu-Istodor.
                            </p>

                            <blockquote>
                                <p>"Artificial Neural Network (ANN) is an information-processing paradigm that is inspired
                                    by the way biological nervous systems,
                                    such as the brain, processes information."</p>
                                <small className="pull-right">Amit R. Wasukar</small>
                            </blockquote>
                        </div>
                        <div className="descr">
                            <p>This dynamic <b><a href="https://neural-network-self-driving-car.vercel.app"
                                target="_blank">site </a></b>
                                is built using node.js and express.js.
                            </p>
                            <p>
                                However, the calculations are done on the frontend. Therefore, the processing power of
                                a small device is not sufficient to run this site. Please click on the link only if you're on your
                                laptop or desktop.
                            </p>
                            <p>
                                This application is not only demanding in terms of computing power, but also consumes a lot of energy. Don't let it run unnecessarily.
                            </p>
                            <br />
                            <br />
                            <br />
                        </div>
                    </div>

                    <div className="col-md-8 col-md-offset-2 section-container-spacer">
                        <div className="row">
                            <div className="col-xs-12 col-md-6">
                                <a href="https://neural-network-self-driving-car.vercel.app" target="_blank">
                                    <Image
                                        width={1500}
                                        height={500}
                                        src="/images/work002-02.jpg"
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
                                    src="/images/work002-04.jpg"
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
                            src="/images/work002-03.jpg"
                            className="img-responsive"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work_4;