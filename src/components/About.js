import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import about from "../assets/about.png";
import styles from "../styles/About.module.css";

function About() {
  return (
    <Container className="mt-2">
      <Row className="align-items-center mb-5 gx-4">
        <Col xs={12} lg={2} className="mb-3 ml-4 mb-md-0 d-none d-lg-block">
          <div className={styles.imageSquareWrapper}>
            <Image
              src={about}
              alt="About ART SHOWCASE"
              className={styles.AboutImage}
            />
          </div>
        </Col>
        <Col xs={12} lg={9}>
          <h1 className={`mt-lg-4 ${styles.AboutHeader}`}>
            <strong>Welcome to ART SHOWCASE!</strong>
          </h1>
        </Col>
      </Row>

      <Row>
        <Col>
          <p className="mb-3">
            The premier online destination for emerging artists of modern
            paintings and the vibrant community that cherishes them. At ART
            SHOWCASE, we understand that art is not just about observation; it's
            about connection, discussion, and appreciation. Our platform is
            meticulously designed to serve as a canvas for artists to exhibit
            their creations and engage with an enthusiastic audience keen on
            exploring the realms of contemporary art.
          </p>
          <hr className={styles.AboutDivider} />
          <h3 className={`mt-4 ${styles.AboutSubheader}`}>
            Discover Modern Art Like Never Before
          </h3>
          <p className="mb-3">
            ART SHOWCASE is more than just a gallery; it's a dynamic ecosystem
            where artists can freely share their masterpieces, discuss probable
            prices, and receive feedback from art lovers worldwide. With a focus
            on modern paintings, our platform celebrates the diversity and
            creativity of artists at various stages of their careers. Whether
            you're an artist looking to gain visibility or an art enthusiast
            eager to discover new talents and trends, ART SHOWCASE offers a
            unique and enriching experience.
          </p>
        </Col>
      </Row>
      <hr className={styles.AboutDivider} />
      <Row className="mb-4">
        <Col>
          <h3 className={`mt-4 ${styles.AboutSubheader}`}>
            Features Tailored for Artists and Art Lovers
          </h3>
          <p>
            Our platform is equipped with a range of functionalities designed to
            enhance the user experience for both artists and art enthusiasts:
          </p>
          <ul>
            <li>
              Create and Share: Artists can create profiles to showcase their
              paintings, sharing their vision and stories behind each piece.
            </li>
            <li>
              Explore and Discover: Users can browse a vast collection of
              paintings, searchable by title or artist's name, ensuring that
              every visit brings a new discovery.
            </li>
            <li>
              Engage and Connect: The ability to comment on artworks fosters a
              sense of community, allowing users to engage in meaningful
              discussions and share insights.
            </li>
            <li>
              Personalize Your Experience: Users are encouraged to complete
              their profiles to unlock additional features such as adding
              paintings to a personal watchlist, connecting with favorite
              artists, and participating in community discussions.
            </li>
          </ul>
        </Col>
      </Row>
      <hr className={styles.AboutDivider} />
      <Row className="mb-4">
        <Col>
          <h3 className={`mt-4 ${styles.AboutSubheader}`}>
            Advanced Search and Categorization
          </h3>
          <p>
            Understanding the diverse interests of our community, ART SHOWCASE
            offers advanced search capabilities and categorization to tailor the
            discovery process to each user's preferences. Paintings can be
            explored based on:
          </p>
          <ul>
            <li>
              Image Orientation: Choose from Portrait, Landscape, or Square to
              match your spatial and aesthetic needs.
            </li>
            <li>
              Technique: Whether you're drawn to the classic appeal of Oil Paint
              and Watercolor or the modern touch of Acrylic Paint and Mixed
              Media, find artworks that resonate with your taste.
            </li>
            <li>
              Theme: From the introspective beauty of Portraits and Still Lifes
              to the boundless imagination of Abstract and Figurative art, dive
              into a variety of themes.
            </li>
            <li>
              Price: Whether you're on the lookout for emerging talents or ready
              to invest in more established artists, our platform allows you to
              filter search results by price, both Ascending and Descending.
            </li>
          </ul>
        </Col>
      </Row>
      <hr className={styles.AboutDivider} />
      <Row className="mb-4">
        <Col>
          <h3 className={`mt-4 ${styles.AboutSubheader}`}>
            Join Our Community
          </h3>
          <p>
            At ART SHOWCASE, we believe that art is a journey best shared. Upon
            registration, users are advised to complete their profiles,
            unlocking the full potential of our platform:
          </p>
          <ul>
            <li>
              Add Your Paintings: Make your mark on the art world by showcasing
              your artwork in our gallery.
            </li>
            <li>
              Curate Your Watchlist: Never lose sight of your favorite pieces
              and stay updated on artworks that captivate you.
            </li>
            <li>
              Connect with Artists: Expand your art network by adding artists to
              your Faves list, keeping you informed about their latest creations
              and achievements.
            </li>
            <li>
              Participate in Discussions: Contribute to the vibrant dialogue
              happening around each painting, enriching your understanding and
              appreciation of modern art.
            </li>
          </ul>
        </Col>
      </Row>
      <hr className={styles.AboutDivider} />
      <Row className="mb-4">
        <Col>
          <h3 className={`mt-4 ${styles.AboutSubheader}`}>
            Your Art, Your Showcase
          </h3>
          <p>
            Whether you're an artist eager to share your vision with the world
            or an art enthusiast in search of inspiration and beauty, ART
            SHOWCASE welcomes you. Join us in celebrating the power of modern
            paintings to connect, provoke, and enchant. Together, let's embark
            on an artistic voyage that transcends boundaries and ignites
            imaginations. Welcome to ART SHOWCASE – where art lives, breathes,
            and thrives.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
