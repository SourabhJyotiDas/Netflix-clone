import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tvshows" element={<Home />} />
        <Route path="/movies" element={<Home />} />
        <Route path="/recent" element={<Home />} />
        <Route path="/mylist" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

