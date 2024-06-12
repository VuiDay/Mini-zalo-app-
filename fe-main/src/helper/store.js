import { useTestStore } from '../stores/test'

const setupStores = () => {
    if (window.$stores) {
        window.location.reload();
    }
    console.log(useTestStore(), "useTestStore()")
    window.$stores = {
        test: useTestStore(),
    };
};

setTimeout(setupStores);

export default {
    install: (app, options) => {
        app.config.globalProperties.$stores = window.$stores;
    }
};
