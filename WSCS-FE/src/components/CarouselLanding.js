import { Carousel, Image } from "react-bootstrap"
import img1 from "../images/landing1.jpg"
import img2 from "../images/landing2.jpg"
import img3 from "../images/landing3.jpg"


export default function CarouselLanding() {
  return (
    <Carousel>
      <Carousel.Item>
        <Image src={img1} className="carousel-img"/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={img2} className="carousel-img"/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={img3} className="carousel-img"/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}
