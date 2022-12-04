import {Container, Row, Col, Button} from "react-bootstrap"
const Intro = () => {
    return (
        <div className="intro">
            <Container className="text-white text-center d-flex justify-content-center align-items-center">
                <Row>
                    <Col>
                        <div className="title">ON TARGET</div>
                        <div className="title">MISSION COMPLETE</div>
                        <div className="introButton mt-4 text-center">
                            <Button variant="dark">See All List</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Intro;