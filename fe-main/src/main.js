import { createApp } from 'vue'
// import './style.css'
import App from './App.vue';
import router from './helper/router';
import i18n from "./helper/i18n";
import { __federation_method_setRemote, __federation_method_getRemote } from "virtual:__federation__";

window.app = createApp(App).use(router).use(i18n);
const remoteApp = [
    {
        name: "fe_admin",
        url: "http://localhost:3001/assets/remoteEntry.js"
    },
    {
        name: "fe_driver",
        url: "http://localhost:3002/assets/remoteEntry.js"
    },
    {
        name: "fe_restaurant",
        url: "http://localhost:3003/assets/remoteEntry.js"
    },
    {
        name: "fe_user",
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

