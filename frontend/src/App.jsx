/* eslint-disable import/no-extraneous-dependencies */
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */

import "./App.css";
import Dishes from "./components/dishList/Dishes";
import RandomDish from "./components/randomDish/RandomDish";
import Map from "./components/map/Map";
import LanguageProvider from "./contexts/LanguageContext";

function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<Map />} />
          <Route path="/randomDish" element={<RandomDish />} />
          <Route path="/dishes" element={<Dishes />} />
        </Routes>
      </LanguageProvider>
    </div>
  );
}

export default App;
