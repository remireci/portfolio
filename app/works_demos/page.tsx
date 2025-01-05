"use client"

import React from "react";
import Image from "next/image";

const Worksanddemos: React.FC = () => {

    return (

        <div className="section-container">

            <div className="container">
                <div className="row">
                    <div className="col-sm-8 col-sm-offset-2 section-container-spacer">
                        <div className="text-center">
                            <h1 className="h2">02 : Works & Demos</h1>
                            <p className="works-des"><b>This is a selection of works and (unfinished) demo projects. It gives an overview of the technologies that are used by
                                <i> reciproque</i>. <br /><br /> =&gt; There&apos;s no code without bugs, no application without crashes. Reliable web and software development is characterised by the correct handling of accidents. &lt;=  </b>
                            </p>
                        </div>
                    </div>

                    <div className="col-md-12">

                        <div id="myCarousel" className="carousel slide projects-carousel">
                            {/* <!-- Carousel items --> */}
                            <div className="carousel-inner">
                                <div className="item active">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <a href="./work_1" title="" className="black-image-project-hover">
                                                <Image
                                                    width={500}
                                                    height={750}
                                                    src="/images/work01a-hover.jpg"
                                                    alt="react next.js application front end back end development"
                                                    className="img-responsive"
                                                />
                                            </a>
                                            <div className="card-container card-container-lg">
                                                <h4>001</h4>
                                                <h1 className="h3">Career Test</h1>
                                                <p>A test with 18 questions in random order, where the user can scroll back through the submitted
                                                    answers and adjust the answer at any time. The scores are converted into a personal text result
                                                    that is displayed immediately.
                                                </p>
                                                <a href="./work_1" title="" className="btn btn-default">Discover</a>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <a href="./work_2" title="" className="black-image-project-hover">
                                                <Image
                                                    width={500}
                                                    height={500}
                                                    src="/images/work02a-hover.jpg"
                                                    alt="algorithms and energy saving"
                                                    className="img-responsive"
                                                />
                                            </a>
                                            <div className="card-container card-container-lg">
                                                <h4>002</h4>
                                                <h1 className="h3">Custom Webshop</h1>
                                                <p>
                                                    If your business model involves selling products over the internet, determining how best to build your
                                                    e-commerce store is one of the most important decisions that you will make.
                                                    From this high level ecommerce blueprint, we can build any custom web store.
                                                    It will always meet your specific needs.
                                                    But it will never look like just another ecommerce site.
                                                </p>
                                                <a href="./work_1" title="" className="btn btn-default">Discover</a>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <a href="./work_3" title="" className="black-image-project-hover">
                                                <Image
                                                    width={500}
                                                    height={500}
                                                    src="/images/work01-hover.jpg"
                                                    alt="algorithms and energy saving"
                                                    className="img-responsive"
                                                />
                                            </a>
                                            <div className="card-container card-container-lg">
                                                <h4>003</h4>
                                                <h1 className="h3">Algorithms & Energy</h1>
                                                <p>Under the surface of society algorithms are determining our lives. They might be helpful,
                                                    but also intrusive. In any case, they are energy consuming. Data centers account for around 2% of all
                                                    global carbon emissions. Because data isn&apos;t physical, people are often unaware of its stark environmental impact.
                                                    On this site the user can try several algorithms and compare their time efficiency.
                                                </p>
                                                <a href="./work_3" title="" className="btn btn-default">Discover</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="row">

                                        <div className="col-sm-4">
                                            <a href="./work_4" title="" className="black-image-project-hover">
                                                <Image
                                                    width={500}
                                                    height={500}
                                                    src="/images/work02-hover.jpg"
                                                    alt="neural network coded in plain javascript"
                                                    className="img-responsive"
                                                />
                                            </a>
                                            <div className="card-container card-container-lg">
                                                <h4>004</h4>
                                                <h1 className="h3">Self-Driving Car</h1>
                                                <p>This application shows how a neural network teaches itself to be a better driver. Help your machine
                                                    to compute a car that doesn&apos;t crash anymore.</p>
                                                <a href="./work_4" title="" className="btn btn-default">Discover</a>
                                            </div>
                                        </div>
                                        {/* <div className="col-sm-4">
                                            <a href="./work_4" title="" className="black-image-project-hover">
                                                <Image
                                                    width={500}
                                                    height={500}
                                                    src="/images/work03-hover.jpg"
                                                    alt="SpaceX data API"
                                                    className="img-responsive"
                                                />
                                            </a>
                                            <div className="card-container card-container-lg">
                                                <h4>004</h4>
                                                <h1 className="h3">Demo Space Project</h1>
                                                <p>A demo site for educational purposes that uses data from SpaceX and
                                                    lets the user schedule a launch to a potential habitable exoplanet.</p>
                                                <a href="./work_3" title="" className="btn btn-default">Discover</a>
                                            </div>
                                        </div> */}
                                        <div className="col-sm-4">
                                            <a href="./work_5" title="" className="black-image-project-hover">
                                                <Image
                                                    width={500}
                                                    height={500}
                                                    src="/images/work03-hover.jpg"
                                                    alt="SpaceX data API"
                                                    className="img-responsive"
                                                />
                                            </a>
                                            <div className="card-container card-container-lg">
                                                <h4>005</h4>
                                                <h1 className="h3">Demo Space Project</h1>
                                                <p>A demo site for educational purposes that uses data from SpaceX and
                                                    lets the user schedule a launch to a potential habitable exoplanet.

                                                </p>
                                                <a href="./work_5" title="" className="btn btn-default">Discover</a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            {/* <!--/row--> */}
                            {/* </div> */}
                            {/* <!--/item-->
              <!-- <div className="item">
                  <div className="row">
                    <div className="col-sm-4">
                      <a href="./work.html" className="black-image-project-hover">
                        <img src="static/assets/images/work02-hover.jpg" alt="Image" className="img-responsive">
                      </a>
                      <div className="card-container">
                        <h4>004/006</h4>
                        <h3>Nulla scelerisque</h3>
                        <p>Proin pharetra metus id iaculis dignissim. In aliquet lorem ut ex ullamcorper.</p>
                        <a href="./work.html" className="btn btn-default">Discover</a>
                      </div>
                    </div>
                     <div className="col-sm-4">
                        <a href="./work.html" className="black-image-project-hover">
                          <img src="static/assets/images/work01-hover.jpg" alt="Image" className="img-responsive">
                        </a>
                        <div className="card-container">
                          <h4>005/006</h4>
                          <h3>Fringilla sit amet</h3>
                          <p>Nulla facilisi. Vivamus vestibulum, elit in scelerisque ultricies.</p>
                          <a href="./work.html" className="btn btn-default">Discover</a>
                        </div>
                      </div>
                      
                      <div className="col-sm-4">
                        <a href="./work.html" className="black-image-project-hover">
                          <img src="static/assets/images/work03-hover.jpg" alt="Image" className="img-responsive">
                        </a>
                        <div className="card-container">
                          <h4>006/006</h4>
                          <h3>Vivamus vestibulum</h3>
                          <p>Fusce sed hendrerit augue, a rhoncus velit. In non lorem mattis, tempor sem sit amet.</p>
                          <a href="./work.html" className="btn btn-default">Discover</a>
                        </div>
                      </div> -->
                      
                  <!-- </div> -->
                  <!--/row-->
              <!-- </div> -->
              
              <!--/item-->
          <!-- </div> -->
          <!--/carousel-inner--> 
          <!-- <a className="left carousel-control" href="#myCarousel" data-slide="prev">‹</a>
    
          <a className="right carousel-control" href="#myCarousel" data-slide="next">›</a> --> */}

                            {/* <!--/carousel-inner--> */}
                            <a className="left carousel-control" href="#myCarousel" data-slide="prev">‹</a>

                            <a className="right carousel-control" href="#myCarousel" data-slide="next">›</a>
                        </div>



                        {/* <!--/myCarousel--> */}
                    </div>



                </div>
            </div>
        </div >
        // </div >
    )
}

export default Worksanddemos;