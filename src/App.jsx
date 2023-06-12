import { useState } from "react";
import Home from "./page/Home";
import Prectice from "./page/Practice";
import MaintenanceA from "./page/MaintenanceA";
import MaintenanceB from "./page/MaintenanceB";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="practice" element={<Prectice />} />
        <Route path="MaintenanceA" element={<MaintenanceA />} />
        <Route path="MaintenanceB" element={<MaintenanceB />} />
      </Routes>
    </div>
  );
}

export default App;
