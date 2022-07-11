import url from '@/assets/loading.svg';
import styles from './loading.module.less';
function createImg() {
  const img = document.createElement('img');
  img.dataset.role = 'loading';
  img.src = url;
  img.classList.add(styles.loading);
  return img;
}

// 查找是否已经创建img[loading]元素
function findLoading(el) {
  return el.querySelector('img[data-role=loading]');
}
// 导出loading自定义指令配置
export default function (el, binding) {
  const currentLoading = findLoading(el);
  if (binding.value && !currentLoading) {
    el.append(createImg());
  } else if (!binding.value && currentLoading) {
    currentLoading.remove();
  }
}
