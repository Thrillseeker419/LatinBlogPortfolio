import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap"; 
import latin1 from '../assets/images/latinWriting.png'; 
import latin3 from '../assets/images/latinWriting3.png'; 
import latin4 from '../assets/images/latinWriting4.png'; 
import bookVideo from '../assets/videos/book.mp4'; // Import the MP4 video

const Home = () => {
  const [paused, setPaused] = useState(false); // Add state to track whether the slideshow is paused
  const [index, setIndex] = useState<number>(0); // Track the current slide index

  useEffect(() => {
    document.title = 'The Communal Latin Practice Blog';
  }, []);

  // Handle carousel index change
  const handleSelect = (selectedIndex: number | null) => {
    if (selectedIndex !== null) {
      setIndex(selectedIndex);
    }
  };

  return (
    <section className="home-section">
      <div className="text-carousel-wrapper">
        <h1 id="home-title" className="ui center aligned icon header">
          {/* Video replacing the circular book icon */}
          <div className="home-video-wrapper">
            <video 
              className="circular-video" 
              src={bookVideo} 
              autoPlay 
              muted 
              loop 
              playsInline 
              aria-label="Book flipping animation video"
              role="img"
            ></video>
          </div>
          The Communal Latin Practice Blog
        </h1>

        {/* Text Section */}
        <div className="single-post-container">
          <article className="single-post ui piled segment">
            <p className="single-post-body">
              <strong>Welcome to The Communal Latin Practice Blog!</strong> The purpose of this portfolio website is to
              showcase modern web technologies 
              and design aesthetics. It is just a small taste test of what I can offer. Each page offers different design concepts,
              but they all are part of this imaginary community's website of people practicing their Latin.
              Built with React, Redux, Bootstrap, and Fomantic UI, this blog demonstrates my ability to craft responsive, accessible, 
              and visually engaging web experiences.
              In this demo website, 
              you are already signed in as the character Ervin Howell, one of our fictional authors. You can 
              view posts written in Latin and try to create your own. You can see the authors and see
              an imaginary timeline of things that have happened in this community's past. Since this website relies on cookies, you can 
              click the <strong>Reset Data</strong> button at the top right to restore everything on this website to its original state thus removing all of the posts you created.
              Read on to
              immerse yourself in the experience.
            </p>
            <p className="single-post-body">
              <strong>What can you do here?</strong> Whether you're a beginner or fluent in Latin, 
              this is a space for everyone to contribute and grow together. Post your own writings, 
              read others’ works, and exchange ideas in an open and supportive 
              environment. Expect to connect with fellow enthusiasts through a variety of posts, 
              and discussions on culture, history, and language.
            </p>
            <p className="single-post-body">
              <strong>How to use the site:</strong> At the top, you’ll find links to allow you to browse 
              posts, create your own, view authors, and view the timeline of past events and achievements this community has made. 
              Expect the majority of posts to be entirely in Latin, 
              but you can post in any language you want if you are still practicing!
              Below you can view a slideshow of some of the art our members have contributed. 
              You can click on the arrows on the left or right of each slide to go to the next or previous slide in the loop. 
                You can click one of the dots underneath the slide to go to a specific slide. If you want to take a break 
              from the slideshow, you can pause it by using 
              the <strong>Pause Slideshow</strong> button underneath the slide. You can press <strong>Play 
                Slideshow</strong> to resume. 
              
            </p>
          </article>
        </div>

        {/* Carousel Section */}
        <article className="carousel-article" role="region" aria-label="Latin Writing Slideshow" aria-roledescription="slideshow">
          <Carousel
            className="custom-carousel"
            fade
            interval={paused ? null : 5000} 
            controls={true}
            indicators={true}
            activeIndex={index}
            onSelect={handleSelect}
            data-testid="carousel-home"
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
              aria-label={paused ? "Play the slideshow" : "Pause the slideshow"}>
              {paused ? "Play Slideshow" : "Pause Slideshow"}
            </button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Home;
