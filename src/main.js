import { createApp } from "vue";
import naive from "naive-ui";
import App from "./App.vue";
import router from "./router";
import "@fortawesome/fontawesome-free/css/all.css";

//Material Design
const app = createApp(App);
app.use(naive);

app.use(router).mount("#app");
