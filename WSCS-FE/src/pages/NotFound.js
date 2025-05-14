import { Container, Button, Image, Col } from "react-bootstrap"
import NotFoundImg from "../images/404.png"
import { Link } from "react-router-dom"

export default function NotFound(){
    return(
        <Container fluid className="p-5 d-flex justify-content-center align-items-center vh-100 flex-column text-center">

            <Col sm={12} lg={4}>
                <Image src={NotFoundImg} className="img-fluid"/>
            </Col>
        
            <h1 className="display-3 text-primary fw-bold">OOPS!</h1>
            <p className="display-6">The page cannot be found.</p>

            <Button className="btn btn-primary rounded-pill px-5 py-2 mt-3" size="lg" as={Link} to="/">Home</Button>
        </Container>
    )
}