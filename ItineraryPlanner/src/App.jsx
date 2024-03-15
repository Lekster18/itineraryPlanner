import React from "react";
import CivicDistrict from "./components/CivicDistrict";
import Login from "./pages/Login";
import Search from "./pages/Search";
import Dropdown from "./components/Dropdown";
import FavouriteList from "./pages/FavouriteList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      {/* <Dropdown></Dropdown>
      <FavouriteList />
      <Search></Search>
      <CivicDistrict /> */}
      <NavBar></NavBar>
    </div>
  );
}

export default App;
