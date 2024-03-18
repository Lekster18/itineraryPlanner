import React, { useState } from "react";
import Search from "./pages/Search";
import FavouriteList from "./pages/FavouriteList.jsx";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Plan from "./pages/Plan";

function App() {
  const [activities, setActivities] = useState([]);
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path="/search" element={<Search />} />
        <Route
          path="/favourites"
          element={<FavouriteList setActivities={setActivities} />}
        />
        <Route path="/plan" element={<Plan activities={activities} />} />
      </Routes>
    </div>
  );
}

export default App;
