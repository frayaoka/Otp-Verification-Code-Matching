import { useCallback, useRef } from 'react';
const creteUseTimer = ({ clear, runTimer }) => (callback, delay, deps) => {
  const timerRef = useRef();
  const stop = useCallback(() => clear(timerRef.current), []);
  const start = useCallback(
    (...args) => {
      stop();
      timerRef.current = runTimer(callback, delay, ...args);
    },
    [delay, ...deps],
  );
  return [start, stop];
};
export const useInterval = creteUseTimer({
  clear: clearInterval,
  runTimer: setInterval,
});
export const useTimeout = creteUseTimer({
  clear: clearTimeout,
  runTimer: setTimeout,
});
