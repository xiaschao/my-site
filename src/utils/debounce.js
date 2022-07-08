export default function (fn, duration = 1000) {
  let timerId;
  return (...args) => {
    if (timerId) clearInterval(timerId);
    timerId = setTimeout(() => {
      fn(...args);
    }, duration);
  };
}
