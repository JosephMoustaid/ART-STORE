import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import GalleryImg from "../assets/images/gallery.jpeg";
import EthernalPassion from "../assets/paintings/b8a367a0-145f-11ef-b50a-d55090cf5fdc2.jpg";
import '../css/style.css';
import Links from "../components/Links";
function About() {
  return (
    <div>
      <div style={{ position: 'relative', zIndex: '1' }}>
        <Nav />
        <main className='mb-5'>
          <section className="about-hero">
            <div className="container text-center py-5">
              <h1>About Me</h1>
              <p className="lead">Discover the journey and passion of an artist devoted to creative expression.</p>
            </div>
          </section>
          <section className="about-content container my-4">
            <div className="row">
              <div className="col-12 col-md-6">
                <h2>My Story</h2>
                <p>
                  Born and raised in the vibrant city of Nottingham, UK, I have been immersed in the art world for over a decade. My artistic journey is deeply personal and largely self-taught, blending traditional techniques with modern digital tools to craft works that evoke emotion and spark curiosity.
                </p>
                <p>
                  My career as an artist has been a tapestry of collaborations with esteemed clients and projects. Highlights include creating evocative pieces for immersive platforms and exploring innovative methods to blend technology and traditional art. My dedication extends to portraying human stories through portraiture and abstract expressions, each with a unique narrative.
                </p>
                <h2>My Vision</h2>
                <p>
                  Art is more than an expression—it's a dialogue with the world. My vision is to bridge the gap between classical art forms and the dynamic capabilities of modern technologies. Whether it's through painting, illustrating, or creating immersive environments, I aim to inspire, connect, and innovate.
                </p>

                <h2>Creative Collaborations</h2>
                <p>
                  Over the years, I've had the privilege of working with renowned names and institutions, crafting pieces that have been featured in galleries, books, and interactive projects. Highlights include collaborations with leaders in the tech and art industries, pushing boundaries and exploring new artistic frontiers.
                </p>
                <p>
                  My first solo show in collaboration with esteemed designers showcased a unique collection of cyclist portraits, embodying movement and energy—a theme close to my heart. Each piece reflects the intricate dance of colors and forms that define my work.
                </p>

                <h2 className='mb-5 mt-3'>Featured Work</h2>
                <p>
                  Among my most cherished projects is the ongoing exploration of landscapes and human connection. My painting "Eternal Passion" delves into the interplay of light and emotion, symbolizing the timeless bond between individuals and their aspirations.
                </p>
                <a href="blog" className='btn btn-primary mt-4 mb-3'>Discover More</a>
              </div>
              <div className="col-12 col-md-6">
                <img src={EthernalPassion} className='w-100' alt="Eternal Passion" />
              </div>
            </div>

          </section>
          <Links />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default About;
