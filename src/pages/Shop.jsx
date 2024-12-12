import React, { useState } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Card from '../components/Card';
import { drawings } from './data'; 
import '../css/style.css';

function Shop() {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredArtworks = drawings.filter(art =>
        art.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        art.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        art.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const categories = [...new Set(drawings.map(art => art.category))];

    return (
        <div>
            <div style={{ position: 'relative', zIndex: '1' }}>
                <Nav />
                <main className='mb-5'>
                    <section className="shop-hero">
                        <div className="container text-center py-1">
                            <h1>Shop</h1>
                            <p className="lead">Explore and purchase artworks from various categories.</p>
                        </div>
                    </section>
                    <section className="shop-search container">
                        <div className="row">
                            <div className="col-12">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search for artworks..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </div>
                    </section>
                    {categories.map(category => (
                        <section className="shop-category container my-1" key={category}>
                            <h6 className="text-start mb-4 w-100 pb-2 border-bottom-1">{category}</h6>
                            <div className="row">
                                {filteredArtworks.filter(art => art.category === category).map((art, index) => (
                                    <div className="col-6 col-sm-6 col-md-3 mb-2" key={index}>
                                        <Card
                                            image={art.imageUrl}
                                            title={art.title}
                                            subtitle={art.description}
                                            location={art.location}
                                            dateRange={art.dateRange}
                                        />
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}
                </main>
                <Footer />
            </div>
        </div>
    );
}

export default Shop;