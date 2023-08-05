import { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import { Card } from "react-bootstrap";
import SingleBeerPage from "./SingleBeerPage";
import { Link } from "react-router-dom";

const BeerListPage = () => {
  const [allBeers, SetAllBeers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        SetAllBeers(response.data);
        setIsLoading(true);
      })
      .catch((err) => console.log(err));
  },[]);

  return (
    <div>
      <Header />
      <h1>All beers</h1>
      {!isLoading && <p>Loading beers</p>}
      {allBeers.map((beer) => {
        return (
          <Card key={beer._id}>
            <Card.Img
              src={beer.image_url}
              style={{ width: "80px", objectFit: "cover" }}
            />
            <Card.Title> <Link to={`/beers/${beer._id}`}> {beer.name}</Link></Card.Title>
            <Card.Text>
              {beer.tagline} by {beer.contributed_by}
            </Card.Text>
          </Card>
        );
      })}
    </div>
  );
};

export default BeerListPage;