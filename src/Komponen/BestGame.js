import { Container, Row, Col, Card, Image} from "react-bootstrap"
import back4bloodImage from "../Asset/best/back4blood.jpg"
import crysis3Image from "../Asset/best/crysis3.jpg"
import residentEvil2Image from "../Asset/best/residentEvil2.jpg"


const BestGame = () => {
    return (
        <div>
            <Container>
                <br/>
                <h1 className="text-white text-center" id="best">BEST GAME</h1>
                <br/>
                <Row>
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={back4bloodImage} alt="Thief Game" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">A</Card.Title>
                                <Card.Text className="text-left">
                                    This is a Wider card with natural lead-in to additional content
                                </Card.Text>
                                <Card.text className="text-left">
                                    last updated 3 mins ago
                                </Card.text>
                                </div>
                            </div>
                        </Card>
                </Col>
                <Col md={4}>
                        <Card className="gameImage">
                            <Image src={crysis3Image} alt="Thief Game" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">A</Card.Title>
                                <Card.Text className="text-left">
                                    This is a Wider card with natural lead-in to additional content
                                </Card.Text>
                                <Card.text className="text-left">
                                    last updated 3 mins ago
                                </Card.text>
                                </div>
                            </div>
                        </Card>
                </Col>
                <Col md={4}>
                        <Card className="gameImage">
                            <Image src={residentEvil2Image} alt="Thief Game" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">A</Card.Title>
                                <Card.Text className="text-left">
                                    This is a Wider card with natural lead-in to additional content
                                </Card.Text>
                                <Card.text className="text-left">
                                    last updated 3 mins ago
                                </Card.text>
                                </div>
                            </div>
                        </Card>
                </Col>
                </Row>
            </Container>
        </div>
    )
}

export default BestGame;