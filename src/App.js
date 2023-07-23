import "./styles.css";
import { Route, Routes } from "react-router";
import Home from "./routes/Home";
import About from "./routes/About";
import Software from "./routes/Software";

import Contact from "./routes/Contact";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Software />} />
      
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
