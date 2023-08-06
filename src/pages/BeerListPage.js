import { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import { Card, Row } from "react-bootstrap";
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
      <h1>All beers</h1>
      <label htmlFor="searchQuery">Type to search beers </label>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => searchBeer(e.target.value)}
      />
      {!isLoaded && <p>Loading beers</p>}
      <Row>
        {isLoaded && allBeers.length === 0 && <h3>No beer found</h3>}
        {allBeers.map((beer) => {
          return (
            <Card key={beer._id}>
              <Card.Img
                src={beer.image_url}
                style={{ width: "80px", objectFit: "cover" }}
              />
              <Card.Title>
                <Link to={`/beers/${beer._id}`}> {beer.name}</Link>
              </Card.Title>
              <Card.Text>
                {beer.tagline} by {beer.contributed_by}
              </Card.Text>
            </Card>
          );
        })}
      </Row>
    </div>
  );
};

export default BeerListPage;
