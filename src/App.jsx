import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Common/Footer";
function App() {
  return (
    <Router>
    <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;