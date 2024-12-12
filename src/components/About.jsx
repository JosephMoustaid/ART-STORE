import React from 'react';

import Links from "../components/Links";

import Instagram from "../assets/images/insta-white.png";
import Facebook from "../assets/images/fb-logo.png";
import AboutBgImage from "../assets/drawings/linksBg.png";
function About (){
    return (
<div className="About" style={{ backgroundImage: `url(${AboutBgImage})` , backgroundRepeat:"no-repeat" , backgroundSize:"cover" , minHeight: "90vh" }}>            <section id="TheArtOfYoussef">
            <div className="mx-2 mx-md-0 mb-2 w-75  d-flex align-content-start justify-content-end flex-wrap">
                <h1 className='mt-10'>THE ART OF YOUSSEF</h1>
                <p >
                    Welcome to my long overdue updated website!
                    here you will find an extensive gallery 
                    section which I’ll be regularly updating 
                    as well as a shop section with limited 
                    edition prints, 
                    artists proofs and original artwork for sale.
                    I hope you enjoy! Youssef.
                </p>
                <div className="rectangle-block-follow ">
                    <div>
                    <div className="row ms-0 me-0 ms-md-2 me-md-2" >
                        <div className="col-8 col-sm-10">
                            <div >
                                <span className="text-start follow">Follow Me</span>
                            </div>
                        </div>
                        <div className="col-2 col-sm-1">
                            <div className="d-flex justify-content-between ">
                                <a href="myInstagram" target="_blank" title="my instagram">
                                    <img src={Instagram} className="sm-logo" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="col-2 col-sm-1">
                            <div className="d-flex justify-content-between ">
                                <a href="myFacebook" target="_blank" title="my facebook">
                                    <img src={Facebook} className="sm-logo" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>


        </section>

        <Links />

        </div>
    );
};

export default About;