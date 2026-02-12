// Vue/VitePress
import { h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";

// CSS
import "./style.css";
import "./tailwind.css";
import "./custom.css";

// PrimeVue
import PrimeVue from "primevue/config";
import Lara from "@primeuix/themes/lara";
import { definePreset } from "@primeuix/themes";
import "primeicons/primeicons.css";

// Custom Components
import Tutorial from "./components/Tutorial.vue";
import TutorialStep from "./components/TutorialStep.vue";

// PrimeVue Theme
const PVTheme = definePreset(Lara, {
  semantic: {
    primary: {
      50: "{indigo.50}",
      100: "{indigo.100}",
      200: "{indigo.200}",
      300: "{indigo.300}",
      400: "{indigo.400}",
      500: "{indigo.500}",
      600: "{indigo.600}",
      700: "{indigo.700}",
      800: "{indigo.800}",
      900: "{indigo.900}",
      950: "{indigo.950}",
    },
  },
});

// VitePress Theme
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {});
  },
  enhanceApp({ app, router, siteData }) {
    app.use(PrimeVue, { theme: { preset: PVTheme }, ripple: true });
    app.component("Tutorial", Tutorial);
    app.component("TutorialStep", TutorialStep);
  },
} satisfies Theme;
