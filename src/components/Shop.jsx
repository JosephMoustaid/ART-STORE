import React from 'react';
import Card from "../components/Card";
import { drawings } from "../pages/data.js";
import {useState} from 'react';
function Shop() {


    /*
    const cardsData = [
        { title: 'Artwork 1', image: 'https://artlogic-res.cloudinary.com/w_1400,h_980,c_fill,f_auto,fl_lossy/ws-artlogicaspect2/usr/images/website_projects/alt_image/68/www.mapplethorpe.org_exhibitions.png', subtitle: 'Subtitle 1', location: 'Location 1', dateRange: 'Date Range 1' },
        { title: 'Artwork 2', image: 'https://artlogic-res.cloudinary.com/w_1400,h_980,c_fill,f_auto,fl_lossy/ws-artlogicaspect2/usr/images/website_projects/alt_image/68/www.mapplethorpe.org_exhibitions.png', subtitle: 'Subtitle 2', location: 'Location 2', dateRange: 'Date Range 2' },
        { title: 'Artwork 1', image: 'https://artlogic-res.cloudinary.com/w_1400,h_980,c_fill,f_auto,fl_lossy/ws-artlogicaspect2/usr/images/website_projects/alt_image/68/www.mapplethorpe.org_exhibitions.png', subtitle: 'Subtitle 1', location: 'Location 1', dateRange: 'Date Range 1' },
        { title: 'Artwork 2', image: 'https://artlogic-res.cloudinary.com/w_1400,h_980,c_fill,f_auto,fl_lossy/ws-artlogicaspect2/usr/images/website_projects/alt_image/68/www.mapplethorpe.org_exhibitions.png', subtitle: 'Subtitle 2', location: 'Location 2', dateRange: 'Date Range 2' },
        { title: 'Artwork 1', image: 'https://artlogic-res.cloudinary.com/w_1400,h_980,c_fill,f_auto,fl_lossy/ws-artlogicaspect2/usr/images/website_projects/alt_image/68/www.mapplethorpe.org_exhibitions.png', subtitle: 'Subtitle 1', location: 'Location 1', dateRange: 'Date Range 1' },
        { title: 'Artwork 2', image: 'https://artlogic-res.cloudinary.com/w_1400,h_980,c_fill,f_auto,fl_lossy/ws-artlogicaspect2/usr/images/website_projects/alt_image/68/www.mapplethorpe.org_exhibitions.png', subtitle: 'Subtitle 2', location: 'Location 2', dateRange: 'Date Range 2' },
        
        // Add more card data as needed
    ];
    */

    return (
        <div className="shop-container container my-5">
            <h6 className="text-start mb-5 w-100 border-bottom-1">Art Gallery</h6>
            <div className="row">
            {drawings.map(drawing => (
                    <div className="col-6 col-md-3 ">
                        <Card
                            id = {drawing.id}
                            image={drawing.imageUrl}
                            title={drawing.title}
                            subtitle={drawing.description}
                            location={"Casa blanca"}
                            dateRange={"2024-2025"}
                        />
                    </div>
                ))}

                {/* data.map((card, index) => (
                    <div className="col-12 col-xs-6 col-sm-6 col-md-3 mb-4" key={index}>
                        <Card
                            title={card.title}
                            imageUrl={card.image}
                            subtitle={card.subtitle}
                            location={card.location}
                            dateRange={card.dateRange}
                        />
                    </div>
                )) */}
            </div>
        </div>
    );
}

export default Shop;