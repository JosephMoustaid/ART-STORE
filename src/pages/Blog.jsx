import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import '../css/style.css';
import me from "../assets/blog/me2.jpg";
import journey from "../assets/blog/journey.jpg";
import whyARt from "../assets/blog/whyArt.webp";

import Button from "../components/Button";
function Blog() {
    const defaultImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVNer1ZryNxWVXojlY9Hoyy1-4DVNAmn7lrg&s" ;
    const blogPosts = [
        {
            title: "My Thoughts on Art",
            author: "Yomo",
            date: "November 25, 2024",
            excerpt: 'From humble beginnings to shaping my unique style, follow theevolution of my artistry ...',
            imageUrl: me,
            link : '/blog/who-am-i',
            body: [
              {
                "type": "text",
                "content": "Art is more than an expression—it's a dialogue, a mirror, and at times, a revolution. As an artist, I've often found myself drawn to its multifaceted nature, pondering its influence, my role in it, and the ever-evolving relationship between creator and observer."
              },
              {
                "type": "heading",
                "content": "Art as a Mirror of Society"
              },
              {
                "type": "text",
                "content": "In every era, art has reflected the collective consciousness of society. From the vibrant murals of Diego Rivera that told the struggles of the working class to the digital art revolution of today, art captures both the mundane and the profound. My journey into art began with a similar intent: to capture the emotions, stories, and fleeting moments of life that words could never encapsulate."
              },
              {
                "type": "heading",
                "content": "The Personal Canvas"
              },
              {
                "type": "text",
                "content": "For me, creating art is deeply personal. It starts with a blank canvas and a whirl of ideas—sometimes a memory, other times a feeling. My art is an extension of myself, and each piece I create carries fragments of my experiences and emotions."
              }
            ],
            "cta": {
              "text": "What do you think? Leave a comment below!",
              "linkText": "Leave a Comment",
              "linkHref": "#comments"
            },
            "comments": [
              {
                "content": "Beautifully written. I resonate with your perspective on art."
              },
              {
                "content": "Art is indeed a mirror of society. Thanks for sharing this!"
              }
            ],
            "categories": ["Art", "Creativity", "Personal"],
            "relatedPosts": [
              {
                "title": "The Evolution of Digital Art",
                "link": "/blog/digital-art"
              },
              {
                "title": "My Artistic Inspirations",
                "link": "/blog/art-inspirations"
              }
            ],
            "footer": {
              "categories": ["Art", "Creativity", "Personal"],
              "relatedPosts": [
                {
                  "title": "The Evolution of Digital Art",
                  "link": "/blog/digital-art"
                },
                {
                  "title": "My Artistic Inspirations",
                  "link": "/blog/art-inspirations"
                }
              ]
            }
        },          
        {
            title: 'My Journey',
            imageUrl: journey,
            excerpt: 'From humble beginnings to shaping my unique style, follow the evolution of my artistry...',
            date: 'November 18, 2024',
            link: '/blog/my-journey'
        } , 
        {
            title: 'Why Art ?',
            imageUrl: whyARt,
            excerpt: 'From humble beginnings to shaping my unique style, follow the evolution of my artistry...',
            date: 'November 11, 2024',
            link: '/blog/art-and-emotion'
        }
    ];

    return (
        <div>
            <div style={{ position: 'relative', zIndex: '1' }}>
                <Nav />
                <main className='mb-5'>
                    <section className="blog-hero">
                        <div className="container text-center py-1">
                            <h1>Blog</h1>
                            <p className="lead">Read the latest articles and insights about art.</p>
                        </div>
                    </section>
                    <section className="blog-content container my-1">
                        <div className="row">
                            {blogPosts.map((post, index) => (
                                <div className="col-12 col-md-6 mb-4 border-bottom pb-3" key={index}>
                                    <div className="blog-post">
                                        <img src={post.imageUrl} alt={post.title} className="img-fluid" />
                                        <div className="blog-post-content pt-3">
                                            <h3>{post.title}</h3>
                                            <p className="blog-post-date">{post.date}</p>
                                            <p>{post.excerpt}</p>
                                            <Button content="Read" href={post.link} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        </div>
    );
}

export default Blog;