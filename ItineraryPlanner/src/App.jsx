import React from "react";
import District from "./components/District";
import Login from "./pages/Login";
import Search from "./pages/Search";
import Dropdown from "./components/Dropdown";
import FavouriteList from "./pages/FavouriteList.jsx";
import { Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Plan from "./pages/Plan";
function App() {
  return (
    <div>
      {/* <Dropdown></Dropdown> */}
      {/* <FavouriteList /> */}
      {/* <Search></Search> */}
      {/* <District /> */}
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Navigate replace to="/Login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Search />} />
        <Route path="/favourites" element={<FavouriteList />} />
        <Route path="/plan" element={<Plan />} />
      </Routes>
    </div>
  );
}

export default App;
