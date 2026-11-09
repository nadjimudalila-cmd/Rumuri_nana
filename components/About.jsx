
import { Link } from "react-router-dom";

function About() {
  return (
    <section className="page-section about-page">
      <div className="section-heading">
        <span className="eyebrow">OUR STORY</span>
        <h1>About Nadjma</h1>
        <p>
          A community built around connection, creativity, and growth.
        </p>
      </div>

      <div className="about-content">
        <div className="about-highlight">
          <span className="about-star">✦</span>
          <h2>Bringing people closer, one connection at a time.</h2>
        </div>

        <div className="about-details">
          <h2>Our Mission</h2>
          <p>
            Our mission is to create a welcoming digital space where
            people can exchange ideas, learn from one another, and
            build positive relationships.
          </p>

          <h2>Our Vision</h2>
          <p>
            We want Nadjma to become a place where everyone feels
            welcome to participate, contribute, and grow.
          </p>

          <Link to="/community" className="btn">
            Explore Our Community →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;
