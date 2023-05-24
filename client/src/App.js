import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/HOME/Home";
import List from "./pages/LIST/List";
import Hotel from "./pages/HOTEL/Hotel";
import Flight from "./pages/FLIGHT/Flight";
import Cab from "./pages/CAB/Cab";

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/flight" element={<Flight />} />
        <Route path="/car" element={<Cab />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
