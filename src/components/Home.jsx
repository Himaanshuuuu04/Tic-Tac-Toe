import Footer from "./Footer";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import clickSoundAsset from "./Normal_Mode/sounds/click.mp3";
const clickSound = new Audio(clickSoundAsset);
clickSound.volume = 1;
export default function Home() {
  return (
    <div className="home-container">
      <h1 className="Heading">Tic Tac Toe</h1>
      <div className="sub-container">
        <Link to="/normal">
          <div className="normal btn" onClick={()=>{
            clickSound.play()
          }}>Start</div>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
