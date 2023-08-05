import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BeerListPage from "./pages/BeerListPage";
import RandomBeerPage from "./pages/RandomBeerPage";
import NewBeerPage from "./pages/NewBeerPage";
import SingleBeerPage from "./pages/SingleBeerPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<BeerListPage />} />
        <Route path="/random-beer" element={<RandomBeerPage />} />
        <Route path="/new-beer" element={<NewBeerPage />} />
        <Route path="/beers/:id" element={<SingleBeerPage />} />
      </Routes>
    </div>
  );
}

export default App;
