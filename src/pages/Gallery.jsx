import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import '../css/style.css';

import statue from "../assets/drawings/statue.jpg";
import img2 from "../assets/paintings/ev2.jpg"

function Gallery() {
    const artworks = [
        { id: 1, title: 'Artwork 1', imageUrl: statue },
        { id: 2, title: 'Artwork 2', imageUrl: img2 },
        { id: 3, title: 'Artwork 3', imageUrl: statue },
        { id: 4, title: 'Artwork 4', imageUrl: statue },
        { id: 5, title: 'Artwork 5', imageUrl: img2 },
        { id: 6, title: 'Artwork 6', imageUrl: statue },
        { id: 7, title: 'Artwork 7', imageUrl: img2 },
        { id: 8, title: 'Artwork 8', imageUrl: statue },
        { id: 9, title: 'Artwork 9', imageUrl: statue },
        { id: 4, title: 'Artwork 4', imageUrl: statue },
        { id: 5, title: 'Artwork 5', imageUrl: img2 },
        { id: 6, title: 'Artwork 6', imageUrl: statue },
        { id: 7, title: 'Artwork 7', imageUrl: img2 },
        { id: 8, title: 'Artwork 8', imageUrl: statue },
        { id: 9, title: 'Artwork 9', imageUrl: statue },
        // Add more artworks as needed
    ];

    return (
        <div class="gallery-page">
            <div style={{ position: 'relative', zIndex: '1' }}>
                <Nav />
                <main className="mb-5">
                    <section className="gallery-hero">
                        <div className="container text-center py-3">
                            <h1>Art Gallery</h1>
                            <p className="lead">Explore my collection of artworks.</p>
                        </div>
                    </section>
                    <section className="gallery-content container mt-1 mb-4">
                        <ul className="masonry">
                            {artworks.map((art, index) => (
                                <li key={index} classname="shadow">
                                    <Link to={`/item/${art.id}`} className="gallery-item-link">
                                        <div className="gallery-item shadow">
                                            <img
                                                src={art.imageUrl}
                                                alt={art.title}
                                                className="img-fluid"
                                            />
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </section>
                </main>
                <Footer />
            </div>
        </div>
    );

}

export default Gallery;
