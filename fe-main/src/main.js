import { createApp } from 'vue'
import App from './App.vue';
import router from './helper/router';
import i18n from "./helper/i18n";
import PrimeVue from 'primevue/config';
import './index.css'
import { usePrimeVue } from './theme.js'
import Lara from './presets/lara'
import { __federation_method_setRemote, __federation_method_getRemote } from "virtual:__federation__";

window.app = createApp(App).use(router).use(i18n).use(PrimeVue, {
    unstyled: true,
    pt: Lara
});
usePrimeVue(window.app)
const remoteApp = [
    {
        name: "fe_ordervehicle",
        url: "http://localhost:3001/assets/remoteEntry.js"
    },
    {
        name: "fe_profile",
        url: "http://localhost:3002/assets/remoteEntry.js"
    },
    {
        name: "fe_history",
        url: "http://localhost:3003/assets/remoteEntry.js"
    },
    {
        name: "fe_faq",
        url: "http://localhost:3004/assets/remoteEntry.js"
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

