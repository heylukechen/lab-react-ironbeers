import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import Header from "../components/Header";

const NewBeerPage = () => {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(1);
  const [contributedBy, setContributedBy] = useState("");
  const navigate = useNavigate();

  const handleSumit = (e) => {
    e.preventDefault();
    console.log("submit is triggered");

    const body = {
      name: name,
      tagline: tagline,
      description: description,
      first_brewed: firstBrewed,
      attenuation_level: attenuationLevel,
      contributed_by: contributedBy,
    };

    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", body)
      .then((response) => {
        console.log(response.data);

        //reset to default form
        setName("");
        setTagline("");
        setDescription("");
        setFirstBrewed("");
        setAttenuationLevel(1);
        setContributedBy("");

        //auto navigate to main page
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Header />
      <div className="d-flex justify-content-center align-items-center">
        <Form className="w-49" onSubmit={handleSumit}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="name">Name</Form.Label>
            <Form.Control
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="tagline">Tagline</Form.Label>
            <Form.Control
              type="text"
              id="tagline"
              onChange={(e) => setTagline(e.target.value)}
              value={tagline}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="description">Description</Form.Label>
            <Form.Control
              type="text"
              id="description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="first_brewed">First brew date</Form.Label>
            <Form.Control
              type="text"
              id="first_brewed"
              onChange={(e) => setFirstBrewed(e.target.value)}
              value={firstBrewed}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="attenuation_level">
              Attenuation level
            </Form.Label>
            <Form.Control
              type="number"
              id="attenuation_level"
              onChange={(e) => setAttenuationLevel(e.target.value)}
              value={attenuationLevel}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="contributed_by">Contributed by</Form.Label>
            <Form.Control
              type="text"
              id="contributed_by"
              onChange={(e) => setContributedBy(e.target.value)}
              value={contributedBy}
            />
          </Form.Group>
          <Button type="submit">Add a new beer</Button>
        </Form>
      </div>
    </div>
  );
};

export default NewBeerPage;
