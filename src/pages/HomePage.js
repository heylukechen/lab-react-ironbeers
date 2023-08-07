import { Link } from "react-router-dom";
import { Row, Card, Col, Container } from "react-bootstrap";
import beerImage from "../assets/beers.png";
import randomBeerImage from "../assets/random-beer.png";
import newBeerImage from "../assets/new-beer.png";

const HomePage = () => {
  return (
    <div>
      {/* <nav className="bg-info mb-4">
        <h1 className="py-4 text-center text-light">Home</h1>
      </nav> */}
      <h1 className="text-center mt-4 text-primary">Iron beer!</h1>
      <Container>
        <Row>
          <Col xs={12} md={6} lg={4}>
            <Card className="mx-4 mb-4">
              <Card.Img src={beerImage} />
              <Card.Body className="p-2">
                <Card.Title>
                  <Link
                    className="text-secondary-emphasis"
                    style={{ textDecoration: "none" }}
                    to={"/beers"}
                  >
                    <h1>All Beers</h1>
                  </Link>
                </Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  consequat consectetur odio, sit amet tincidunt justo pharetra
                  vitae. Proin mattis interdum elit eget euismod.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Card className="mx-4 mb-4">
              <Card.Img src={randomBeerImage} />
              <Card.Body className="p-2">
                <Card.Title>
                  <Link
                    className="text-secondary-emphasis"
                    style={{ textDecoration: "none" }}
                    to={"/random-beer"}
                  >
                    <h1>Random beer</h1>
                  </Link>
                </Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  consequat consectetur odio, sit amet tincidunt justo pharetra
                  vitae. Proin mattis interdum elit eget euismod.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Card className="mx-4 mb-4">
              <Card.Img src={newBeerImage} />
              <Card.Body className="p-2">
                <Card.Title>
                  <Link
                    className="text-secondary-emphasis"
                    style={{ textDecoration: "none" }}
                    to={"/new-beer"}
                  >
                    <h1>New beer</h1>
                  </Link>
                </Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  consequat consectetur odio, sit amet tincidunt justo pharetra
                  vitae. Proin mattis interdum elit eget euismod.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
