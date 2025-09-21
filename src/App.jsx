import { useState } from "react";
import { Link, Routes, Route } from "react-router";
import "./App.css";
import PropertiesList from "./components/PropertiesList";
import SingleProperty from "./components/SingleProperty";
import Header from "./components/Header";

import HomePage from "./components/Homepage";

function App() {
  return (
    <>
      <Header />
      <br />
      <Link to="/">Go To HomePage</Link>
      <br />
      <Link to="/properties">Properties List</Link>
      <br />

      <button>This is Some Hot App!!!</button>
      <br />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/properties" element={<PropertiesList />} />
        <Route path="/properties/:id" element={<SingleProperty />} />
      </Routes>
      <br />
    </>
  );
}

export default App;
