import { useUserStore } from "../stores/user";

const setupStores = () => {
  if (window.$stores) {
    window.location.reload();
  }
  window.$stores = {
    user: useUserStore(),
  };
};

setTimeout(setupStores);

export default {
  install: (app, options) => {
    app.config.globalProperties.$stores = window.$stores;
  },
};
