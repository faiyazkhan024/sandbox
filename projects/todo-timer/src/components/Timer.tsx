import { FC, useRef, useState, useEffect } from "react";

const Timer: FC<{
  time: number;
  onTimeOut: () => void;
}> = ({ time, onTimeOut }) => {
  const intervalRef = useRef(0);
  const useEffectRef = useRef(false);
  const timeOutRef = useRef(onTimeOut);
  const [timer, setTimer] = useState(time);

  useEffect(() => {
    if (useEffectRef.current) return;
    intervalRef.current = setInterval(() => {
      setTimer((pre) => (pre > 1 ? --pre : 0));
    }, 1000);
    useEffectRef.current = true;
  }, []);

  useEffect(() => {
    if (timer === 0 || time === 0) {
      timeOutRef.current();
      setTimer(time);
      clearInterval(intervalRef.current);
    }
  }, [time, timer]);

  return <>{timer}s </>;
};
export default Timer;
