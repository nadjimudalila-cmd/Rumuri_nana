
import React from "react";

function Community() {
  return (
    <div className="community-page">
      <section className="community-hero">
        <h1>Welcome to My Community</h1>

        <p>
          Welcome to Nadjimu's community!
          A place to connect, share ideas and grow together.
        </p>

        <button onClick={() => alert("Welcome to Nadjimu's Community!")}>
          Join Our Community
        </button>
      </section>

      <section className="community-content">
        <h2>Connect With Us</h2>
        <p>
          Discover new ideas, share your experiences
          and be part of our growing community.
        </p>
      </section>
    </div>
  );
}

export default Community;
