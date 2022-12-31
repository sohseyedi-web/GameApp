import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/layouts/home/Home";
import Spinner from './components/layouts/wheelSpinner/Spinner';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/spinner" element={<Spinner />} />
    </Routes>
  );
}

export default App;
