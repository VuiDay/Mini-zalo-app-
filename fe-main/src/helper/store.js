import { userStore } from '../stores/test'

const setupStores = () => {
    if (window.$stores) {
        window.location.reload();
    }
    window.$stores = {
        user: userStore(),
    };
};

setTimeout(setupStores);

export default {
    install: (app, options) => {
        app.config.globalProperties.$stores = window.$stores;
    }
};
