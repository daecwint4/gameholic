import { Container, Row, Col, Card, Image} from "react-bootstrap"
import mineCraftImage from "../Asset/trending/minecraft.jpg"
import farCryImage from "../Asset/trending/farCry6.jpg"
import lolImage from "../Asset/trending/lol.jpg"

const TrendingGame = () => {
    return (
        <div>
            <Container>
                <br/>
                <h1 className="text-white text-center" id="trending">TRENDING GAMES</h1>
                <br/>
                <Row>
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={mineCraftImage} alt="MineCraft Game" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">A</Card.Title>
                                <Card.Text className="text-left">
                                With new games, new updates, and new ways to play, join one of the biggest communities in gaming and start crafting today!
                                </Card.Text>
                                <Card.Text className="text-left">
                                    last updated 7 mins ago
                                </Card.Text>
                                </div>
                            </div>
                        </Card>
                </Col>
                <Col md={4}>
                        <Card className="gameImage">
                            <Image src={farCryImage} alt="MineCraft Game" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">B</Card.Title>
                                <Card.Text className="text-left">
                                Now available on Xbox One, Xbox Series X|S, PlayStation®4, PlayStation®5, Stadia, Epic Games and Ubisoft Connect.
                                </Card.Text>
                                <Card.Text className="text-left">
                                    last updated 3 mins ago
                                </Card.Text>
                                </div>
                            </div>
                        </Card>
                </Col>
                <Col md={4}>
                        <Card className="gameImage">
                            <Image src={lolImage} alt="MineCraft Game" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">C</Card.Title>
                                <Card.Text className="text-left">
                                League of Legends is a team-based game with over 140 champions to make epic plays with. Play now for free.
                                </Card.Text>
                                <Card.Text className="text-left">
                                    last updated 1 mins ago
                                </Card.Text>
                                </div>
                            </div>
                        </Card>
                </Col>
                </Row>
            </Container>
        </div>
    )
}

export default TrendingGame;