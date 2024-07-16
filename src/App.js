import "./styles.css";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import TicTacToe from "./components/Normal_Mode/TicTacToe.jsx";
import Home from "./components/Home";
export default function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/normal" element={<TicTacToe />} />
       
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}
