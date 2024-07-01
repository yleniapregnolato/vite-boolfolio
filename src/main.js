import { createApp } from 'vue'
import './sass/general.scss'
import App from './App.vue'
import { router } from "./router";


createApp(App).use(router).mount("#app");
