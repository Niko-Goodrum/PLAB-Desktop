import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "@/router";
import { useThemeStore } from "@/stores/theme/theme.store";
import { VueQueryPlugin, VueQueryPluginOptions } from "@tanstack/vue-query";
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

const vueQueryPluginOptions: VueQueryPluginOptions = {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 60,
      },
    },
  },
};
app.use(VueQueryPlugin, vueQueryPluginOptions);

app.mount("#app");
