import GameState from "./GameState";
import clickSoundAsset from "./sounds/click.mp3";
const clickSound = new Audio(clickSoundAsset);
clickSound.volume = 1;


function Reset({ gameState, onReset }) {
  if (gameState === GameState.inProgress) {
    return;
  }
  return (
    
    <button onClick={onReset} className="reset-button">
      <h2>Play Again</h2>
    </button>
  );
}

export default Reset;
