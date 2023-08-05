import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import beerImage from "../assets/beers.png";
import randomBeerImage from "../assets/random-beer.png";
import newBeerImage from "../assets/new-beer.png";

const HomePage = () => {
  return (
    <div>
      <h1>Home page!</h1>
      <Card>
        <Card.Img src={beerImage} />
        <Card.Body>
          <Card.Title>
            <Link to={"/beers"}>
              <h1>All Beers</h1>
            </Link>
          </Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            consequat consectetur odio, sit amet tincidunt justo pharetra vitae.
            Proin mattis interdum elit eget euismod.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img src={randomBeerImage} />
        <Card.Title>
          <Link to={"/random-beer"}>
            <h1>Random beer</h1>
          </Link>
        </Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          consequat consectetur odio, sit amet tincidunt justo pharetra vitae.
          Proin mattis interdum elit eget euismod.
        </Card.Text>
      </Card>
      <Card>
        <Card.Img src={newBeerImage} />
        <Card.Title>
          <Link to={"/new-beer"}>
            <h1>New beer</h1>
          </Link>
        </Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          consequat consectetur odio, sit amet tincidunt justo pharetra vitae.
          Proin mattis interdum elit eget euismod.
        </Card.Text>
      </Card>
    </div>
  );
};

export default HomePage;
