import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap"; 
import latin1 from '../assets/images/latinWriting.png'; 
import latin3 from '../assets/images/latinWriting3.png'; 
import latin4 from '../assets/images/latinWriting4.png'; 

const HomePage = () => {
  const [paused, setPaused] = useState(false); // Add state to track whether the carousel is paused
  const [index, setIndex] = useState<number>(0); // Track the current slide index

  useEffect(() => {
    document.title = 'The Communal Latin Blog';
  }, []);

  // Handle carousel index change
  const handleSelect = (selectedIndex: number | null) => {
    if (selectedIndex !== null) {
      setIndex(selectedIndex);
    }
  };

  return (
    <section className="home-section">
      <h1 className="ui center aligned icon header">
        <i className="circular book open icon"></i>
        The Communal Latin Blog
      </h1>
      <div className="single-post-container">
        <article className="single-post ui piled segment">
          <p className="single-post-body">
            Ervin! We welcome you to The Communal Latin Blog! The community gathers here to
            practice their latin. Share your latin thoughts with the world.
            Connect with others. Enjoy learning another language by sharing
            stories with one another.
          </p>
        </article>

        <article className="carousel-article" role="region" aria-label="Latin Writing Carousel" aria-roledescription="carousel">
          <Carousel
            className="custom-carousel"
            fade
            interval={paused ? null : 5000} 
            controls={true}
            indicators={true}
            activeIndex={index}
            onSelect={handleSelect}
          >
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={latin1}
                alt="First picture of Latin writing"
              />
              <Carousel.Caption aria-live="polite">
                <h3>Write to your heart's content!</h3>
                <p>People are here for it!</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src={latin3}
                alt="Second picture of Latin writing"
              />
              <Carousel.Caption aria-live="polite">
                <h3>Read someone else's Latin</h3>
                <p>Explore various blogs</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src={latin4}
                alt="Third picture of Latin writing"
              />
              <Carousel.Caption aria-live="polite">
                <h3>Meet the community</h3>
                <p>Connect with others of common interests!</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

          <div className="carousel-controls">
            <button onClick={() => setPaused(!paused)} 
              aria-pressed={paused} 
              aria-label={paused ? "Play the carousel" : "Pause the carousel"}>
              {paused ? "Play" : "Pause"}
            </button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default HomePage;
