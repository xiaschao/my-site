import getComponentRootDom from './getComponentRootDom';
import Icon from '@/components/Icon';
import styles from './showMessage.module.less';
/**
 * 弹出消息
 * @param {String} content 弹出消息提示内容
 * @param {HTMLElement} container 弹出消息处于该容器中间，默认为整个页面中间
 * @param {String} type 提示类型，info,warn,error,success
 * @param {Number} duration 弹出消息多久消失
 */
export default function (option = {}) {
  const content = option.content || '提示消息';
  const container = option.container || document.body;
  const type = option.type || 'info';
  const duration = option.duration || 2000;

  const div = document.createElement('div');
  div.classList.add(styles.message);
  div.classList.add(styles[`message-${type}`]);
  const i = getComponentRootDom(Icon, { type });
  i.classList.add(styles.messageIcon);
  div.innerHTML = `${i.outerHTML}<span class="${styles.messageText}">${content}</span>`;
  if (option.container && getComputedStyle(container).position === 'static') {
    container.style.position = 'relative';
  }
  container.appendChild(div);

  div.clientHeight;
  div.style.transform = 'translate(-50%, -50%)';
  div.style.opacity = '1';

  setTimeout(() => {
    div.style.transform = 'translate(-50%, -50%) translateY(-25px)';
    div.style.opacity = '0';
    div.addEventListener(
      'transitionend',
      () => {
        div.remove();
        option.callback && option.callback();
      },
      { once: true }
    );
  }, duration);
}
