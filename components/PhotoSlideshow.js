import Carousel from 'react-bootstrap/Carousel';
import PhotoSlideshowStyles from './styles/PhotoSlideshowStyles';

export default function PhotoSlideshow() {
  return (
    <PhotoSlideshowStyles>
      <h1>Ataire</h1>
      <Carousel controls={false} fade> {/* Hide the controlls and set the effect to fade. */}
        <Carousel.Item interval={3000}> {/* Set delay between slides to 3 seconds */}
          <img
            className="d-block w-100"
            src="/slideshowImage1.jpg" // Get Image from Public
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="/slideshowImage2.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="/slideshowImage3.jpg"
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>
    </PhotoSlideshowStyles>
  );
}
