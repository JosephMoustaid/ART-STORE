import React from 'react';
import { useParams, useNavigate  } from 'react-router-dom';
import { useState } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import '../css/style.css';
import Button from '../components/Button';
import drawing from "../assets/drawings/sasuke.jpg";
import { BsCart, BsArrowLeft } from 'react-icons/bs'; // Import Bootstrap icons

import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JS (includes Popper.js)

import GoBack from '../components/GoBack';

function SingleItem() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);


    const { id } = useParams();
    const navigate = useNavigate();
    const artworks = [
        { id: 1, title: 'Artwork 1', imageUrl: drawing, subtitle: 'Subtitle 1', location: 'Location 1', dateRange: 'Date Range 1', description: 'Detailed description of Artwork 1.' },
        { id: 2, title: 'Artwork 2', imageUrl: 'path/to/image2.jpg', subtitle: 'Subtitle 2', location: 'Location 2', dateRange: 'Date Range 2', description: 'Detailed description of Artwork 2.' },
        // Add more artworks as needed
    ];

    const artwork = artworks.find(art => art.id === parseInt(id));

    if (!artwork) {
        return <div>Artwork not found</div>;
    }

    const defaultImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVNer1ZryNxWVXojlY9Hoyy1-4DVNAmn7lrg&s";

    return (
        <div>
            <div style={{ position: 'relative', zIndex: '1' }}>
                <Nav />
                <main className='mb-5'>
                    <section className="single-item-hero">
                    </section>
                    <section className="single-item-content container my-2 mb-5">
                    
                        <GoBack />
                        <div className="row pb-5 pt-3 mt-4 m-auto">
                            <div className="col-12 col-md-5 col-lg-6 d-flex flex-column justify-content-end">
                                <img src={artwork.imageUrl || defaultImg} alt={artwork.title} className="img-fluid" />
                            </div>
                            <div className="col-12 col-md-7 col-lg-6 pt-3 text-start ps-3">
                                <h1>{artwork.title}</h1>
                                <p className="lead">{artwork.subtitle}</p>
                                <hr />
                                <h4 className='mb-3'><strong>Price : </strong> 1099.00 Dhs <del>1500.00 Dhs</del> </h4>
                                
                                <span className="border py-2 px-4 fs-4 mb-4">
                                    60 * 80
                                </span>
                                <p className='fs-6 mb-3 mt-2'><strong>Location:</strong> {artwork.location}</p>
                                <p className='fs-6 mb-3'><strong>Date Range:</strong> {artwork.dateRange}</p>
                                <p className='fs-6 mb-3'>{artwork.description}</p>

                                <a href="/basket mb-3" className='btn btn-primary w-100 fs-5'> Add to basket </a>
                                <a href="/basket" className='btn btn-second mt-2 w-100 fs-5'> Buy it Now </a>

                                <hr />
                                <button
                                    className="btn details-btn fs-4 w-100 text-start d-flex justify-content-between align-items-center"
                                    onClick={toggleDropdown}
                                >
                                    <span className='text-dark fs-5'>Details</span>
                                    <span className="ms-auto text-dark pt-1 fs-2">&#129171;</span>
                                </button>
                                <div
                                    className={`px-5 dropdown-content ${isOpen ? 'open' : ''}`}
                                    style={{
                                        maxHeight: isOpen ? '300px' : '0',
                                        overflow: 'hidden',
                                        transition: 'max-height 0.4s ease-in-out',
                                    }}
                                >
                                    <p className="fs-5 mt-2"><strong>Location:</strong> {artwork.location}</p>
                                    <p className="fs-5"><strong>Date Range:</strong> {artwork.dateRange}</p>
                                    <p className="fs-5">{artwork.description}</p>
                                </div>
                                <hr />
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        </div>
    );
}

export default SingleItem;