import React, {
  useState,
  useEffect,
  useImperativeHandle,
  forwardRef,
  useRef,
} from "react";
import ticking from "./sounds/ticking.mp3";
const tickingSound = new Audio(ticking);
tickingSound.volume = 1;
const Timer = forwardRef(({ onTimeOver }, ref) => {
  const Ref = useRef(null);
  const [timer, setTimer] = useState("00:00:00");

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    return {
      total,
      hours,
      minutes,
      seconds,
    };
  };

  const startTimer = (e) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      setTimer(
        (hours > 9 ? hours : "0" + hours) +
          ":" +
          (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    } else {
      if (Ref.current) clearInterval(Ref.current);
      if (onTimeOver) {
        onTimeOver();
        tickingSound.pause();
      }
    }
  };

  const clearTimer = (e) => {
    setTimer("00:00:60");
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + 60);
    return deadline;
  };

  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);

  const onClickReset = () => {
    clearTimer(getDeadTime());
  };

  const stopTimer = () => {
    if (Ref.current) clearInterval(Ref.current);
  };

  useImperativeHandle(ref, () => ({
    onClickReset,
    stopTimer,
  }));

  return (
    <div>
      <div className="Timer">
        <h2>{timer}</h2>
      </div>
    </div>
  );
});

export default Timer;
