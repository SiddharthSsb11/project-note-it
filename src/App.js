import React from "react";
import { Routes, Route } from "react-router-dom";
import Notes from "./pages/Notes";
import Create from "./pages/Create";

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Notes />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
