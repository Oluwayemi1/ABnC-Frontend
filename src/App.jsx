import { useState } from "react";
import { Link, Routes, Route } from "react-router";
import "./App.css";
import PropertiesList from "./components/PropertiesList";
import SingleProperty from "./components/SingleProperty";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />

      <h2>Hello World</h2>
      <Link to="/PropertiesList">PropertiesList</Link>
      <br />
      <Link to="/SingleProperty">SingleProperty</Link>

      <PropertiesList />
      <SingleProperty />
      {/* <Routes>
        <Route path="/PropertiesList" element={<PropertiesList />} />
        <Route path="/singleproperty" element={<SingleProperty />} />
      </Routes> */}
    </>
  );
}

export default App;
