import { useState, useEffect } from "react";

function useTimer(duration, callback) {
  const [remainingTime, setRemainingTime] = useState(duration);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    let intervalId;

    if (!paused && remainingTime > 0) {
      intervalId = setInterval(() => {
        setRemainingTime((prevRemainingTime) => {
          const newRemainingTime = prevRemainingTime - 200;

          return newRemainingTime;
        });
      }, 200);
    }

    return () => clearInterval(intervalId);
  }, [paused, remainingTime, duration, callback]);

  useEffect(() => {
    let intervalId;
    if (remainingTime <= 0) {
      intervalId = setInterval(() => {
        callback();
        reset();
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [remainingTime]);

  const pause = () => setPaused(true);
  const resume = () => setPaused(false);
  const reset = () => setRemainingTime(duration);

  return { remainingTime, paused, pause, resume, reset };
}

export default useTimer;
