import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
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
        <Card>
          <Card.Img src={singleBeer.image_url} alt="beer image" />
          <Card.Title>{singleBeer.name}</Card.Title>
          <Card.Body>
            <h3>{singleBeer.tagline}</h3>
            <p>{singleBeer.description}</p>
            <h3>{singleBeer.first_brewed}</h3>
            <h4>{singleBeer.attenuation_level}</h4>
            <h5>{singleBeer.contributed_by}</h5>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default SingleBeerPage;
