"use client"
import React from "react";
import Image from "next/image";

const Work_1: React.FC = () => {

    return (
        <div className="section-container">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <a href="https://www.reciproque-ecommerce.eu/" target="_blank">
                            <Image
                                width={1500}
                                height={500}
                                src="/images/work002a-01.jpg"
                                className="img-responsive"
                                alt=""
                            />
                        </a>
                        <div className="card-container">
                            <div className="text-center">
                                <h1 className="h2">002 : Custom E-commerce</h1>
                            </div>
                            <p>
                                If your business model involves selling products over the internet, determining how best to build your
                                e-commerce store is one of the most important decisions that you will make.
                            </p>

                            <blockquote>
                                <p>"Of course, no e-commerce platform is perfect; there's only the solution which is best suited for your situation. Although some companies may be well-served by using WooCommerce, others would do better to have a custom e-commerce website that has been specially developed for their business. "</p>
                                <small className="pull-right">Dave Devitt</small>
                            </blockquote>
                        </div>
                        <div className="descr">
                            <p>Mineral Fault is a fully functional <a href="https://www.reciproque-ecommerce.eu/" target="_blank">demo ecommerce site</a>.
                                You can create an account and purchase products. You can do this for free. Payment is simulated.
                                <br />
                                From this high level ecommerce blueprint, we can build any custom web store. It will always meet your specific needs.
                                But it will never look like just another ecommerce site.
                                <br />
                                Reciproque takes care of the search engine optimization (SEO). Our ecommerce sites programmaticaly provide a sitemap and the right metadata for search engines.
                                <br />
                                Try the performative search on the product page. Or try the advanced wishlist and shopping cart system.
                                <br />
                                The custom, easy-to-use CMS gives you full control over the content of your shop. Please contact us to get access to the CMS-dashboard.
                                <br />
                                Invoices are automatically generated and stored in a database. They can be easily imported into any accounting software system.
                                <br />
                                This site is a next.js application deployed on Vercel, and using Supabase's PostgreSQL database for storing data.
                                <br />
                                <br />
                            </p>
                        </div>
                    </div>

                    <div className="col-md-8 col-md-offset-2 section-container-spacer">
                        <div className="row">
                            <div className="col-xs-12 col-md-6">
                                <a href="https://www.reciproque-ecommerce.eu/" target="_blank">
                                    <Image
                                        width={750}
                                        height={500}
                                        src="/images/work002a-02.jpg"
                                        className="img-responsive"
                                        alt=""
                                    />
                                </a>
                                <p></p>
                            </div>
                            <div className="col-xs-12">
                                <Image
                                    width={750}
                                    height={500}
                                    src="/images/work002a-03.jpg"
                                    className="img-responsive"
                                    alt=""
                                />
                            </div>
                            <div className="col-xs-12">
                                <Image
                                    width={750}
                                    height={500}
                                    src="/images/work002a-04.jpg"
                                    className="img-responsive"
                                    alt=""
                                />
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

                </div>
            </div>
        </div>
    )
}

export default Work_1;