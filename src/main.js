import { createApp } from "vue";
import router from "./router";
import store from "./store";
import app from "./app.vue";

createApp(app).use(store).use(router).mount("#app");
