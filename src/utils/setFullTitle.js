let routerTitle = '';
let storeTitle = '';

function setTitle() {
  if (!routerTitle && !storeTitle) {
    document.title = 'loading...';
  } else if (routerTitle && !storeTitle) {
    document.title = 'loading...';
  } else if (!routerTitle && storeTitle) {
    document.title = storeTitle;
  } else {
    document.title = `${routerTitle}-${storeTitle}`;
  }
}
export default {
  setRouterTitle(h) {
    routerTitle = h;
    setTitle();
  },
  setStoreTitle(h) {
    storeTitle = h;
    setTitle();
  },
};
