import { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import { Card } from "react-bootstrap";
import SingleBeerPage from "./SingleBeerPage";
import { Link } from "react-router-dom";

const RandomBeerPage = () => {
  const [randomBeer, setRandomBeer] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => {
        console.log(response.data);
        setRandomBeer(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Link to={"/"}>Back to Home</Link>
      {!isLoading && <p>Loading beers</p>}
      <h1>Random beer</h1>
      {randomBeer && (
        <Card>
          <Card.Img src={randomBeer.image_url} alt="beer image" />
          <Card.Title>{randomBeer.name}</Card.Title>
          <Card.Body>
            <h3>{randomBeer.tagline}</h3>
            <p>{randomBeer.description}</p>
            <h3>{randomBeer.first_brewed}</h3>
            <h4>{randomBeer.attenuation_level}</h4>
            <h5>{randomBeer.contributed_by}</h5>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default RandomBeerPage;
