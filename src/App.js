import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import CoursePage from "./Pages/CoursePage";

function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/me" element={<Profile />} />
          <Route path="/course" element={<CoursePage />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
