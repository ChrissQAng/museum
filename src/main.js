import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// createApp(App).use(router).mount("#app");
const app = createApp(App);
app.use(router); // Router installieren
app.mount("#app");
