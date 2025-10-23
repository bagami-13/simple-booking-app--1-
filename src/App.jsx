import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import BookSlot from "./pages/BookSlot";
import Confirmation from "./pages/Confirmation";
import Cover from "./pages/Cover";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Cover page — no header */}
        <Route path="/" element={<Cover />} />

        {/* Main app pages — with header */}
        <Route
          path="/home"
          element={
            <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100">
              <Header />
              <Home />
            </div>
          }
        />
        <Route
          path="/book"
          element={
            <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100">
              <Header />
              <BookSlot />
            </div>
          }
        />
        <Route
          path="/confirm"
          element={
            <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100">
              <Header />
              <Confirmation />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}
