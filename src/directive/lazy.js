import debounce from '../utils/debounce';
import eventBus from '@/eventBus.js';
import defaultImg from '@/assets/lazysucai.webp';

let imgsArr = [];

// 检查是否该元素是否在视口范围内
function checkInViewport(domItem) {
  const { top: rectTop, height } = domItem.getBoundingClientRect();
  const heightDoc = document.documentElement.clientHeight; // 视口高度
  const imgHeight = height || 150;
  return rectTop <= heightDoc && rectTop + imgHeight > 0;
}

function setImage(img) {
  const tempImg = new Image();
  tempImg.onload = function () {
    img.dom.src = img.src;
  };
  tempImg.src = img.src;
}

function handleMainScroll() {
  for (let i = 0; i < imgsArr.length; i++) {
    if (checkInViewport(imgsArr[i].dom)) {
      setImage(imgsArr[i]);
      imgsArr.splice(i, 1);
      i--;
    }
  }
}
eventBus.$on('mainScroll', debounce(handleMainScroll, 300, true));
export default {
  inserted(el, bindings) {
    const img = {
      dom: el,
      src: bindings.value,
    };
    imgsArr.push(img);
    el.src = defaultImg;
    if (checkInViewport(img.dom)) setImage(img);
  },
  unbind(el) {
    imgsArr = imgsArr.filter((item) => item.dom !== el);
  },
};
