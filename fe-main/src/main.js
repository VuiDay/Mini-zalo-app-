import { createApp } from 'vue'
import App from './App.vue';
import router from './helper/router';
import i18n from "./helper/i18n";
import store from './helper/store.js';
import PrimeVue from 'primevue/config';
import './style.css'
import { usePrimeVue } from './theme.js'
import Lara from './presets/lara'
import { __federation_method_setRemote, __federation_method_getRemote } from "virtual:__federation__";
import { createPinia } from "pinia";

const pinia = createPinia();
window.app = createApp(App).use(router).use(pinia).use(store).use(i18n).use(PrimeVue, {
    unstyled: true,
    pt: Lara
});
usePrimeVue(window.app)
const remoteApp = [
    {
        name: "fe_ordervehicle",
        url: "https://ordervehicle-mini-app.pages.dev/assets/remoteEntry.js"
    },
    {
        name: "fe_profile",
        url: "https://profile-mini-app.pages.dev/assets/remoteEntry.js"
    },
    {
        name: "fe_history",
        url: "https://history-mini-app.pages.dev/assets/remoteEntry.js"
    }
]

window.remoteApp = remoteApp.reduce((prev, cur) => ((prev[cur.name] = cur), prev), {});
console.log(window.remoteApp)
for (const remote of remoteApp) __federation_method_setRemote(remote.name, { url: () => Promise.resolve(remote.url), format: "esm", from: "vite" });
const preloads = remoteApp.map((remote) => __federation_method_getRemote(remote.name, `./setup`));
console.log(preloads, "preloads");
Promise.all(preloads).then(() => {
    setTimeout(() => {
        window.app.mount('#app')
    }, 10)
});

