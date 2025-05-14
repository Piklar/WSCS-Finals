import { Carousel, Container } from "react-bootstrap"
import CarouselLanding from "../components/CarouselLanding"
import HomeCard from "../components/HomeCard"
import card1 from "../images/card1.jpg"
import card2 from "../images/card2.jpg"
import card3 from "../images/card3.jpg"





export default function Home(){
    return(
        <Container fluid className="p-0">
            <Container fluid className="landing bg-dark p-0">
                <CarouselLanding className="shadow"/>

                <Container fluid className="bg-warning d-flex justify-content-center align-items-center p-3">
                    <h1 className="Display-1 fw-bold text-light landing-typings">Summer Outing 2025</h1>
                </Container>

                <Container fluid className="p-0 landing d-flex justify-content-center align-items-center gap-4">
                    <HomeCard imgProps={{url: card1, title: "Top Class Pools", description: "Dive into elegance and sophistication with our top-class swimming pools, designed for those who seek the ultimate aquatic experience. From stunning infinity pools that blend seamlessly with breathtaking landscapes to resort-style retreats with crystal-clear waters, each pool is a masterpiece of design and innovation."}}/>
                    <HomeCard imgProps={{url: card2, title: "Fun Activities!", description: "Dive into excitement with top-class swimming pools designed for relaxation and adventure. Whether you're floating under the stars, challenging friends to water games, or simply soaking up luxury, our pools create unforgettable experiences. Elevate your leisure with crystal-clear waters, stylish designs, and endless fun! Let me know if you’d like any refinements!"}}/>
                    <HomeCard imgProps={{url: card3, title: "A Feast By The Water", description: "Enjoy the perfect blend of relaxation and indulgence with delicious poolside food. Whether it's refreshing fruit platters, sizzling grilled skewers, or cool cocktails, every bite enhances your swimming experience. Dive into flavor and make every pool day a celebration of great taste!"}}/>
                </Container>

                <Container fluid className="landing bg-warning">

                </Container>
            </Container>
        </Container>
    )
}