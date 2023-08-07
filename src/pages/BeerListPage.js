import { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import { Card, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const BeerListPage = () => {
  const [allBeers, setAllBeers] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        setAllBeers(response.data);
        setIsLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);

  const searchBeer = (searchValue) => {
    setSearchQuery(searchValue);
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${searchValue}`)
      .then((response) => {
        setAllBeers(response.data);
        setIsLoaded(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Header />
      <Row className="mx-2 g-1">
        <h1>All beers</h1>
        <label htmlFor="searchQuery">Type to search beers </label>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => searchBeer(e.target.value)}
        />
      </Row>
      {!isLoaded && <p className="mx-2 mt-2">Loading beers</p>}
      <Row className="mx-2">
        {isLoaded && allBeers.length === 0 && (
          <h3 className="text-center mt-5">No beer found</h3>
        )}
        {allBeers.map((beer) => {
          return (
            <Col xs={12} md={6} xl={4} key={beer._id}>
            <Card className="my-2 p-3">
              <Row noGutters>
                <Col xs={3}>
                  <Card.Img
                    src={beer.image_url}
                    style={{ width: "100%", objectFit: "cover" }}
                  />
                </Col>
                <Col>
                  <Card.Body className="p-2">
                    <Card.Title>
                      <Link to={`/beers/${beer._id}`}> {beer.name}</Link>
                    </Card.Title>
                    <Card.Text>
                      {beer.tagline} by {beer.contributed_by}
                    </Card.Text>
                    <Link to={`/beers/${beer._id}`}>
                      <Button variant="outline-dark" className="btn-sm">
                        View more
                      </Button>
                    </Link>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default BeerListPage;
