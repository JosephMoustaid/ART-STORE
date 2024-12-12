import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import About from "../components/About";
import Links from "../components/Links";
import Navigate from "../components/Navigate.jsx";
import Shop from "../components/Shop.jsx";
import FeaturedCollection from "../components/FeaturedCollection";
import Carousel from '../components/Carousel.jsx';
import HeroCarousel from '../components/HeroCarousel.jsx';

import Features from '../components/Features.jsx';

import bannerImg from "../assets/drawings/banner.png";
import Button  from '../components/Button.jsx';
import gallery2 from "../assets/images/gallery2.jpg";


import '../css/style.css'; 
function Home() {


  return (
    <div>  
      <div style={{ position: 'relative' , zIndex:"1"}}>
        <Nav />
        <main className='mb-5'>
          <HeroCarousel />
        
          <Shop />
          <FeaturedCollection />
          <Navigate />
          {/* 
          <div className="hero">
            <img src={bannerImg} alt="banner image" />
          </div>
          < br />
          */}
          <section className="container mt-5 mb-5">
            <h4 className="text-start  border-bottom-1 mb-2">Gallery</h4>
            <div className="row">
              <div className="col-12 col-md-6">
                <img src={gallery2} className='img-fluid' style={{"maxHeight" : "400px"}} alt="Gallery photo" />
              </div>
              <div className="col-12 col-md-6">
                <h2 className="text-start">Gallery</h2>
                <p className="text-start">View some of my latest works and get inspired.</p>
                <br />
                <p>
                "Art enables us to find ourselves and lose ourselves at the same time. It is the expression of the profoundest thoughts in the simplest way. Through art, we can convey emotions, tell stories, and connect with others on a deeper level. Each piece of art is a journey, a moment captured in time, and a reflection of the artist's soul. Let these works inspire you, evoke emotions, and take you on a journey of self-discovery and appreciation for the beauty that surrounds us."
                </p>
                <p>
                  <strong>Location:</strong> 1234 Art Street, Art City, 12345
                  <i>Yomo</i>
                </p>
                <Button content="Visit the gallery online" href="/gallery" />
              </div>
            </div>
          </section>
          <section className="container mt-5 mb-5">
            <h4 className="text-start  border-bottom-1 mb-2">Gallery</h4>
            <div className="row">
              <div className="col-12 col-md-6 text-end">
                <h2 className="text-end">Gallery</h2>
                <p className="text-end">View some of my latest works and get inspired.</p>
                <br />
                <p>
                "Art enables us to find ourselves and lose ourselves at the same time. It is the expression of the profoundest thoughts in the simplest way. Through art, we can convey emotions, tell stories, and connect with others on a deeper level. Each piece of art is a journey, a moment captured in time, and a reflection of the artist's soul. Let these works inspire you, evoke emotions, and take you on a journey of self-discovery and appreciation for the beauty that surrounds us."
                </p>
                <p>
                  <strong>Location:</strong> 1234 Art Street, Art City, 12345
                  <i>Yomo</i>
                </p>
                <Button content="Visit the gallery online" href="/gallery" />
              </div>
              <div className="col-12 col-md-6">
                <img src={gallery2} className='img-fluid' style={{"maxHeight" : "400px"}} alt="Gallery photo" />
              </div>
            </div>
          </section>

          {/*
          <Carousel />
          */}
          <About />
            
          < Features />
        </main> 
        < Footer />
      </div>
    </div>
  );
}

export default Home;