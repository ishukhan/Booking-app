import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/HOME/Home";
import List from "./pages/LIST/List";
import Hotel from "./pages/HOTEL/Hotel";

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
