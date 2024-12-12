import React from 'react';
import { useParams } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import me from "../assets/blog/me2.jpg";
import journey from "../assets/blog/journey.jpg";
import whyArt from "../assets/blog/whyArt.webp";
import BlogPost from "../components/BlogPost";

function BlogPostPage() {
    const { slug } = useParams();

      
    const blogPosts = [
      {
        "slug": "who-am-i",
        "title": "The Art of Digital Painting",
        "author": "Alice Johnson",
        "date": "December 1, 2024",
        "imageUrl": me,
        
        "bodyContent": [
          {
            "type": "text",
            "content": "Digital painting has transformed the art world by fusing traditional artistic practices with cutting-edge technology. It empowers artists to explore limitless creativity, enabling everything from hyper-realistic portraits to fantastical landscapes. Whether you're a seasoned artist or just starting, the versatility of digital painting is unparalleled."
          },
          {
            "type": "heading",
            "content": "Choosing the Right Tools"
          },
          {
            "type": "text",
            "content": "Embarking on your digital painting journey requires the right tools. Software like Photoshop, Procreate, Krita, or Corel Painter offer diverse features tailored to different needs. For example, Photoshop excels in versatility and photo manipulation, while Procreate is a favorite for its intuitive interface on the iPad. Drawing tablets are equally crucial, with Wacom and Huion providing reliable options, and newer devices like the iPad Pro offering on-the-go convenience."
          },
          {
            "type": "list",
            "content": [
              "For beginners: Krita (free and beginner-friendly).",
              "For professionals: Adobe Photoshop (industry-standard).",
              "For mobility: Procreate (optimized for iPad users)."
            ]
          },
          {
            "type": "heading",
            "content": "Understanding the Basics"
          },
          {
            "type": "text",
            "content": "Before diving into complex projects, build a strong foundation by mastering core concepts. Start with understanding shading to create depth and volume, explore the magic of layering for better control, and grasp basic color theory to make your art pop. These essentials form the backbone of compelling artwork."
          },
          {
            "type": "heading",
            "content": "Techniques and Styles"
          },
          {
            "type": "text",
            "content": "As your skills grow, you'll begin experimenting with various techniques and styles. Popular approaches include realistic rendering, stylized illustration, and abstract compositions. Refining your brushwork is key—try using custom brushes to mimic traditional textures like oil or watercolor. Over time, your style will evolve, reflecting your artistic identity."
          },
          {
            "type": "list",
            "content": [
              "Realism: Focuses on intricate details and lifelike textures.",
              "Stylized art: Simplified forms with bold colors and creative interpretations.",
              "Impressionism: Emphasizes light, color, and brushstrokes over detail."
            ]
          },
          {
            "type": "heading",
            "content": "Advanced Tips for Digital Artists"
          },
          {
            "type": "text",
            "content": "Once you've mastered the basics, challenge yourself with advanced techniques. Learn how to create custom brushes for unique textures, explore photo-bashing to blend real-world images with digital elements, and practice speed painting to refine your ability to capture ideas quickly. Regularly participate in online challenges like Inktober or DrawThisInYourStyle to push your creative boundaries."
          },
          {
            "type": "heading",
            "content": "Why Digital Painting?"
          },
          {
            "type": "text",
            "content": "Digital painting offers unmatched flexibility and freedom. Mistakes are no longer permanent thanks to undo functionality, and the ability to work on infinite layers allows for experimentation without risk. Additionally, the digital medium is eco-friendly—no need for physical materials like paper, paints, or brushes. It's also accessible to a global audience, enabling artists to share and sell their creations online effortlessly."
          },
          {
            "type": "quote",
            "content": "\"Digital art is not just a tool; it's a new dimension for creativity.\""
          },
          {
            "type": "heading",
            "content": "Community and Growth"
          },
          {
            "type": "text",
            "content": "The digital art community is vibrant and supportive, offering endless opportunities for learning and collaboration. Platforms like ArtStation, DeviantArt, and Behance allow you to showcase your work, receive feedback, and connect with like-minded artists. Consider joining online forums or taking courses on platforms like Skillshare and Udemy to further enhance your skills."
          },
          {
            "type": "list",
            "content": [
              "Join online art challenges to stay inspired.",
              "Participate in forums for peer critiques and tips.",
              "Follow artists on social media to stay updated on trends."
            ]
          },
          {
            "type": "heading",
            "content": "Conclusion"
          },
          {
            "type": "text",
            "content": "Digital painting bridges the gap between imagination and execution, offering artists an expansive toolkit to bring their visions to life. Whether you're creating art for personal satisfaction, professional commissions, or global audiences, the possibilities are boundless. The journey of digital artistry is as rewarding as the masterpieces you’ll create."
          }
        ],
        "comments": [
          { "content": "This is such a helpful guide! I’m excited to try digital painting myself." },
          { "content": "Love the tips on tools, especially the recommendation for Procreate!" }
        ],
        "categories": ["Art", "Digital Painting"],
        "relatedPosts": [
          { "title": "A Beginner’s Guide to Illustration", "link": "/beginners-guide-to-illustration" },
          { "title": "Mastering Color Theory in Art", "link": "/mastering-color-theory" }
        ]
      },
      {
        "slug": "my-journey",
        "title": "How I Overcame Creative Block",
        "author": "Yomo",
        "date": "November 28, 2024",
        "imageUrl": journey ,
        "bodyContent": [
  {
    "type": "text",
    "content": "Creative block is every artist’s nightmare. It’s the feeling of being trapped, unable to bring your ideas to life or produce work that satisfies you. It’s a frustrating and discouraging experience that makes you question your ability. I’ve been there, and through my struggles, I discovered several methods that helped me overcome it."
  },
  {
    "type": "heading",
    "content": "Understanding the Block"
  },
  {
    "type": "text",
    "content": "Creative block can manifest in many ways. It might come from burnout, a lack of inspiration, or the pressure of deadlines. Sometimes it’s the overwhelming expectations we place on ourselves that stifle creativity. It’s important to recognize that creative block is a natural part of the artistic journey—it happens to everyone, from amateurs to seasoned professionals. Identifying the root cause of your block is the first step toward overcoming it."
  },
  {
    "type": "list",
    "content": [
      "Burnout: Feeling exhausted and uninspired, often caused by overworking.",
      "Perfectionism: The fear of not creating something good enough.",
      "Lack of inspiration: Feeling disconnected from your usual sources of creativity."
    ]
  },
  {
    "type": "heading",
    "content": "Strategies to Overcome It"
  },
  {
    "type": "text",
    "content": "Overcoming creative block isn’t about forcing creativity; it’s about allowing yourself to find new sources of inspiration and letting go of self-imposed pressure. Here are some strategies that worked for me:"
  },
  {
    "type": "list",
    "content": [
      "Take a walk or spend time in nature: Nature has a unique way of rejuvenating the mind and sparking creativity. The sights, sounds, and textures of the natural world can often bring new ideas.",
      "Visit art galleries and museums: Seeing other artists' work can inspire new techniques, styles, or themes. You might find the perfect spark to reignite your creative flow.",
      "Try a new medium: If you typically paint with oils, try digital art or sketching with charcoal. Switching mediums can refresh your approach and challenge you to think differently.",
      "Collaborate with other artists: Working alongside others can bring fresh perspectives and ideas. Sharing ideas and techniques with fellow creatives often leads to unexpected breakthroughs.",
      "Keep a sketchbook or journal: Document your thoughts, feelings, and doodles. This practice can help unlock subconscious ideas and reignite your artistic passion."
    ]
  },
  {
    "type": "heading",
    "content": "Lessons Learned"
  },
  {
    "type": "text",
    "content": "Overcoming creative block taught me invaluable lessons about patience and self-compassion. It’s easy to get caught up in the notion that we need to be constantly productive, but sometimes, the most productive thing you can do is take a step back. Taking breaks, practicing mindfulness, and allowing yourself time to recharge can ultimately lead to better creativity."
  },
  {
    "type": "quote",
    "content": "\"Sometimes, letting go of the pressure to create is the first step toward rediscovering your creativity.\""
  },
  {
    "type": "heading",
    "content": "Embracing the Process"
  },
  {
    "type": "text",
    "content": "It’s important to remember that creative block is not permanent. It’s part of the ebb and flow of being an artist. Embrace the downtime as a natural part of your creative process. Sometimes, stepping away from your work allows the subconscious mind to work in the background, and before you know it, inspiration strikes again."
  },
  {
    "type": "list",
    "content": [
      "Be kind to yourself: Don’t beat yourself up for experiencing creative block. It happens to the best of us.",
      "Trust the process: Creativity doesn’t always happen on demand, and that’s okay. Trust that it will come back in time.",
      "Celebrate small victories: Even if you’re not creating at your usual pace, each small step forward is progress."
    ]
  },
  {
    "type": "heading",
    "content": "Moving Forward with Renewed Creativity"
  },
  {
    "type": "text",
    "content": "Creative block is an inevitable part of every artist’s journey, but it doesn’t have to be a roadblock. By recognizing the causes of your block, trying new strategies, and being kind to yourself, you can break free from creative stagnation and return to your work with a fresh perspective. Remember, creativity is a cycle—sometimes, all you need is a little time, space, and a change of perspective to reignite your passion for creating."
  },
  {
    "type": "quote",
    "content": "\"Creativity is not a sprint; it’s a marathon. Embrace the pauses, and you’ll find your rhythm again.\""
  }
]
,
        "comments": [
          { "content": "Great tips! I’ve been struggling with creative block for a while, and I’ll try some of these strategies." },
          { "content": "I love how you mentioned stepping back and reassessing—it’s something I often forget to do." }
        ],
        "categories": ["Creativity", "Personal Development"],
        "relatedPosts": [
          { "title": "The Importance of Daily Art Practice", "link": "/importance-of-daily-art" },
          { "title": "Finding Inspiration in Everyday Life", "link": "/finding-inspiration" }
        ]
      },
      {
        "slug": "art-and-emotion",
        "title": "Exploring New Art Mediums",
        "author": "Emily Davis",
        "date": "November 20, 2024",
        "imageUrl": whyArt ,
        "bodyContent": [
          {
            "type": "text",
            "content": "Experimenting with new art mediums has the power to ignite creativity. From watercolors to mixed media, every medium brings something unique to the table."
          },
          {
            "type": "heading",
            "content": "Watercolor vs. Acrylic"
          },
          {
            "type": "text",
            "content": "Watercolors offer delicate transparency and fluid motion, while acrylics allow for vibrant colors and rich textures. Each brings its challenges and opportunities."
          },
          {
            "type": "heading",
            "content": "Mixed Media Art"
          },
          {
            "type": "text",
            "content": "Combining multiple mediums—like ink with pastels or acrylic with collage—creates depth and texture, pushing the boundaries of conventional art."
          },
          {
            "type": "heading",
            "content": "The Joy of Experimentation"
          },
          {
            "type": "text",
            "content": "Diving into new mediums keeps the creative process exciting. It’s not about perfection but discovering what resonates with your artistic voice."
          }
        ],
        "comments": [
          { "content": "This article is so inspiring! I’ve been wanting to try mixed media for a while." },
          { "content": "I love watercolor, but I’m intrigued by your take on mixing acrylics with it!" }
        ],
        "categories": ["Art", "Techniques"],
        "relatedPosts": [
          { "title": "Mastering the Basics of Acrylic Painting", "link": "/basics-of-acrylic-painting" },
          { "title": "Watercolor Painting for Beginners", "link": "/watercolor-beginners-guide" }
        ]
      }
    ];
    

    // Find the blog post based on the slug
    const post = blogPosts.find(post => post.slug === slug);

    if (!post) {
        return (
            <div className="text-center py-5">
                <h1>Post Not Found</h1>
                <p>The blog post you’re looking for does not exist.</p>
            </div>
        );
    }

    return (
        <div>
            <Nav />
            <main className="mt-0 p-2 p-sm-5 pt-sm-2">
                <BlogPost {...post} />
            </main>
            <Footer />
        </div>
    );
}

export default BlogPostPage;




