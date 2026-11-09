
function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <div className="eyebrow">
            WELCOME TO NADJMA
          </div>

          <h1>
            Connect with people.
            <span> Grow together.</span>
          </h1>

          <p>
            Nadjma is a place to share ideas, discover
            new opportunities, and build meaningful connections.
          </p>

          <div className="hero-actions">
            <a href="/community" className="btn btn-primary">
              Explore Community →
            </a>

            <a href="/about" className="btn btn-secondary">
              Learn About Us
            </a>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="section-label">WHY NADJMA?</div>

        <h2>One community. Many possibilities.</h2>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">◎</div>
            <h3>Connect</h3>
            <p>Meet people and build meaningful relationships.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">✦</div>
            <h3>Share</h3>
            <p>Share your thoughts, stories, and useful ideas.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">↗</div>
            <h3>Grow</h3>
            <p>Learn from others and discover opportunities.</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to join Nadjma?</h2>

        <a href="/contact" className="btn btn-secondary">
          Become a Member →
        </a>
      </section>
    </>
  );
}

export default HomePage;
