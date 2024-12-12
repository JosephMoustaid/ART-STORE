import React, { useState } from 'react';
import painting from "../assets/paintings/desprate.jpg";
import comicArt from "../assets/drawings/mustacheMan.jpg";
import goku from "../assets/drawings/goku.jpg";
const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const categories = [
    {
      title: 'Painting',
      description: 'Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment\'s Warcraft III.',
      imageUrl: painting,
    },
    {
      title: 'Comic Art',
      description: 'The Witcher 3 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment\'s Warcraft III.',
      imageUrl: comicArt,
    },
    {
      title: 'Anime Art',
      description: 'RDR 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment\'s Warcraft III.',
      imageUrl: goku,
    },
  ];

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="carousel m-auto">
      <h4 className="text-start  border-bottom-1">What I do</h4>
      <div className="custom-carousel reveal ">
        {categories.map((categorie, index) => (
          <div
            key={index}
            className={`item ${activeIndex === index ? 'active' : ''}`}
            style={{ backgroundImage: `url(${categorie.imageUrl})` }}
            onClick={() => handleClick(index)}
          >
            <div className="item-desc">
              <h3>{categorie.title}</h3>
              <p>{categorie.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Carousel;
