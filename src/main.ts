import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "@/router";
import { useThemeStore } from "@/stores/theme/theme.store";
import "@/design/global.scss";
import "@/design/pageStyle.scss";
import "@/design/shape/_shape.scss";
import "@/design/shadow/_elevation.scss";
import "@/design/function/_flex.scss";
import "@/design/fonts/_typography.scss";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);

const themeStore = useThemeStore();
themeStore.initTheme();

app.mount("#app");
