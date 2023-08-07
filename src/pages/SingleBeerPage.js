import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Col, Row, Container, Button } from "react-bootstrap";
import Header from "../components/Header";

const SingleBeerPage = () => {
  const { id } = useParams();
  const [singleBeer, setSingleBeer] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then((response) => {
        setSingleBeer(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [id]);

  return (
    <div>
      <Header />
      {isLoading && <p>Loading beers</p>}
      {singleBeer && (
        <Container>
          <Row>
            <Col xs={12} md={6} xl={4} className="text-center">
              <img
                src={singleBeer.image_url}
                alt="beerimage"
                className="w-50"
              />
            </Col>
            <Col xs={12} md={6} xl={8}>
              <Row>
                <Col xs={8}>
                  <h1>{singleBeer.name}</h1>
                </Col>
                <Col xs={4}>
                  <h1 className="text-color-grey">
                    {singleBeer.attenuation_level}
                  </h1>
                </Col>
                <Col xs={8}>
                  <p>{singleBeer.tagline}</p>
                </Col>
                <Col xs={4}>
                  <p>{singleBeer.first_brewed}</p>
                </Col>
                <Col xs={12}>
                  <p>{singleBeer.description}</p>
                  <h5>{singleBeer.contributed_by}</h5>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default SingleBeerPage;
