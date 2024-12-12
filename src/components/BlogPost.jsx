import React from 'react';
import PropTypes from 'prop-types';

const BlogPost = ({
  title,
  author,
  date,
  imageUrl,
  bodyContent,
  comments,
  categories,
  relatedPosts,
}) => {
  return (
    <div className="container blog-post mt-0 pt-0">
      {/* Main Row */}
      <div className="row">
        {/* Main Content */}
        <div className="col-lg-8">
          <article>
            {/* Header Section */}
            <header className="post-header mb-4">
              <h1 className="post-title display-4 font-weight-bold">{title}</h1>
              <p className="post-meta text-muted">
                <span className="author">By {author}</span> | <span className="date">{date}</span>
              </p>
            </header>

            {/* Featured Image */}
            <div className="post-image mb-4">
              <img src={imageUrl} alt="Featured" className="img-fluid rounded" />
            </div>

            {/* Body Content */}
            <div className="post-body">
              {bodyContent.map((section, index) => (
                <div key={index} className="mb-4">
                  {section.type === 'text' && <p>{section.content}</p>}
                  {section.type === 'heading' && <h2 className="post-heading">{section.content}</h2>}
                  {section.type === 'blockquote' && (
                    <blockquote className="blockquote p-3 bg-light border-left border-primary">
                      <p>{section.content}</p>
                    </blockquote>
                  )}
                </div>
              ))}
            </div>

            {/* Comments Section */}
            <section id="comments" className="comments mt-5">
              <h3 className="mb-4">Comments</h3>
              {comments.length > 0 ? (
                comments.map((comment, index) => (
                  <div className="comment mb-3 p-3 border rounded bg-light" key={index}>
                    <p>{comment.content}</p>
                  </div>
                ))
              ) : (
                <p>No comments yet. Be the first to share your thoughts!</p>
              )}
            </section>
          </article>
        </div>

        {/* Sidebar */}
        <aside className="col-lg-4">
          {/* Subscribe Section */}
          <div className="subscribe mb-4 p-3 bg-light rounded">
            <h4>Subscribe</h4>
            <form>
              <input
                type="email"
                className="form-control mb-2"
                placeholder="Enter your email"
              />
              <button className="btn btn-primary w-100">Subscribe</button>
            </form>
          </div>

          {/* Social Sharing */}
          <div className="social-sharing mb-4 p-3 bg-light rounded">
            <h4>Follow Us</h4>
            <button className="btn btn-primary w-100 mb-2">Share on Facebook</button>
            <button className="btn btn-info w-100">Share on Twitter</button>
          </div>

          {/* Related Posts */}
          <div className="related-posts p-3 bg-light rounded">
            <h4>Related Posts</h4>
            {relatedPosts.map((post, index) => (
              <div key={index} className="mb-2">
                <a href={post.link} className="related-post-link text-decoration-none">
                  {post.title}
                </a>
              </div>
            ))}
          </div>
        </aside>
      </div>

      {/* Footer */}
      <footer className="post-footer mt-5">
        <div className="categories mb-3">
          <strong>Categories:</strong> {categories.join(', ')}
        </div>
      </footer>
    </div>
  );
};

BlogPost.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  bodyContent: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(['text', 'heading', 'blockquote']).isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  relatedPosts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default BlogPost;
