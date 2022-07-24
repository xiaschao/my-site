/**
 *
 * @param {String or Function} fnName // 当第三个参数为true时,传入一个函数,否则传入函数名
 * @param {*} duration
 * @param {*} forJs // 是否在JS中使用
 * @returns
 */
export default function (fnName, duration = 1000, forJs = false) {
  let timerId;
  return function (...args) {
    if (timerId) clearInterval(timerId);
    timerId = setTimeout(() => {
      // fn.call(this, ...args);
      // fn(...args);
      if (forJs) {
        fnName(...args);
      } else {
        this[fnName](...args);
      }
    }, duration);
  };
}
