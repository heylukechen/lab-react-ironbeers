import { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import { Card, Col, Row, Container, Button } from "react-bootstrap";

const RandomBeerPage = () => {
  const [randomBeer, setRandomBeer] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => {
        // console.log(response.data);
        setRandomBeer(response.data);
        setIsLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Header />
      {!isLoaded && <p>Loading beers</p>}
      <h1 className="text-center mb-4">A random beer</h1>
      {randomBeer && (
        <Container>
          <Row>
            <Col xs={12} md={6} xl={4} className="text-center">
              <img
                src={randomBeer.image_url}
                alt="beerImage"
                className="w-50"
              />
            </Col>
            <Col xs={12} md={6} xl={8}>
              <Row>
                <Col xs={8}>
                  <h1>{randomBeer.name}</h1>
                </Col>
                <Col xs={4}>
                  <h1 className="text-color-grey">
                    {randomBeer.attenuation_level}
                  </h1>
                </Col>
                <Col xs={8}>
                  <h3>{randomBeer.tagline}</h3>
                </Col>
                <Col xs={4}>
                  <h3>{randomBeer.first_brewed}</h3>
                </Col>
                <Col xs={12}>
                  <p>{randomBeer.description}</p>
                  <h5>{randomBeer.contributed_by}</h5>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default RandomBeerPage;
