import React from "react";
import CivicDistrict from "./components/CivicDistrict";
import Login from "./pages/Login";
import Search from "./pages/Search";
import Dropdown from "./components/Dropdown";
import FavouriteList from "./pages/FavouriteList";
import { Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Plan from "./pages/Plan";
function App() {
  return (
    <div>
      {/* <Dropdown></Dropdown>
      <FavouriteList />
      <Search></Search>
      <CivicDistrict /> */}
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
