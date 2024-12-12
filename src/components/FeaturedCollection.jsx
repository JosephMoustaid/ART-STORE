import React from 'react';
import Card from "./Card";
import painting1 from "../assets/paintings/aspire.jpg";
import painting2 from "../assets/paintings/an evening by the lake.jpg";

function FeaturedCollection() {
    const collection = [
        {
            image: painting1,
            title: "Aspire",
            subtitle: "A portrait of an aspiring woman - Oil on canvas - 80 * 100",
            location: "Casa Blanca",
            dateRange: "2024"
        },
        {
            image: painting2,
            title: "An evening by the lake",
            subtitle: "A painting of a lake at sunset - Oil on canvas - 60 * 80",
            location: "Casa Blanca",
            dateRange: "2024"
        }
    ];

    return (
        <section className="featured-collection px-2 px-md-5">
            <h4 className="text-start mb-4 w-100 pb-2 border-bottom-1">Featured Collection</h4>
            <div className="container">
                <div className="row">
                    {collection.map((art, index) => (
                        <div className="col-12 col-md-6 mb-4" key={index}>
                            <Card
                                image={art.image}
                                title={art.title}
                                subtitle={art.subtitle}
                                location={art.location}
                                dateRange={art.dateRange}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FeaturedCollection;