import { defineConfig, UserConfig } from "vitepress";
import { withSidebar } from "vitepress-sidebar";
import tailwindcss from "@tailwindcss/vite";

import { tutorialPlugin } from "./markdown/tutorial";

const vitePressOptions: UserConfig = {
  markdown: {
    config(md) {
      md.use(tutorialPlugin);
    },
  },

  srcDir: "site",

  title: "Studenti Marconi",
  description: "Sito ufficiale degli Studenti del Marconi",
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Progetti",
        items: [
          //{ text: "Timeline", link: "/progetti/index.md" },
          { text: "Marconi's Got Talent", link: "/progetti/mgt.md" },
          { text: "Marconi Notes", link: "/progetti/notes.md" },
        ],
      },
      {
        text: "Info",
        items: [
          { text: "Social", link: "/social.md" },
          { text: "Chi Siamo", link: "/about.md" },
        ],
      },
      {
        text: "Wiki",
        activeMatch: "/wiki",
        link: "/wiki/index.md",
      },
      {
        text: "MarconiCraft",
        activeMatch: "/marconicraft",
        items: [
          { text: "Introduzione", link: "/marconicraft/index.md" },
          { text: "Tutorial", link: "/marconicraft/tutorial.md" },
          { text: "FAQ", link: "/marconicraft/faq.md" },
          { text: "Mappa", link: "https://map.studentimarconi.org" },
        ],
      },
      {
        text: "Link",
        items: [
          { text: "Rappresentanti", link: "https://rappresentantimarconi.eu" },
          { text: "Apps", link: "https://apps.marconivr.it" },
          { text: "Status", link: "https://status.studentimarconi.org" },
        ],
      },
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/StudentiMarconi/StudentiMarconi.github.io",
      },
      {
        icon: "signal",
        link: "https://signal.group/#CjQKINN9KaMFM9m1KI4s_q-5M2OGp07u0BidSz99GTG7EgSmEhAgc_uDgJbbE_Slj7rqNagx",
      },
      { icon: "discord", link: "https://discord.com/invite/jtKkm9Gvg8" },
      { icon: "telegram", link: "https://t.me/+0pZuisMiqkE4YmRk" },
      {
        icon: "whatsapp",
        link: "https://chat.whatsapp.com/EuSA4tXy1zS2l18D90JZHu",
      },
      {
        icon: "instagram",
        link: "https://www.instagram.com/rappresentanti_marconivr",
      },
      { icon: "reddit", link: "https://www.reddit.com/r/MarconiVerona" },
    ],
    footer: {
      message: "For All Time. Always.",
    },

    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: "Cerca",
                buttonAriaLabel: "Cerca",
              },
              modal: {
                displayDetails: "Mostra dettagli",
                resetButtonTitle: "Resetta",
                backButtonTitle: "Indietro",
                noResultsText: "Nessun risultato per",
                footer: {
                  selectText: "per selezionare",
                  selectKeyAriaLabel: "invio",
                  navigateText: "per navigare",
                  navigateUpKeyAriaLabel: "su",
                  navigateDownKeyAriaLabel: "giù",
                  closeText: "per chiudere",
                  closeKeyAriaLabel: "esc",
                },
              },
            },
          },
        },
      },
    },

    lastUpdated: { text: "Ultimo aggiornamento" },

    outline: {
      label: "In questa pagina",
    },

    docFooter: {
      prev: "Pagina precedente",
      next: "Pagina successiva",
    },

    darkModeSwitchLabel: "Tema",
    darkModeSwitchTitle: "Cambia in tema scuro",
    lightModeSwitchTitle: "Cambia in tema chiaro",
    returnToTopLabel: "Torna all'inizio",
    skipToContent: "Vai al contenuto",
  },
  vite: {
    resolve: {
      dedupe: ["vue", /^primevue\/.+/],
    },
    plugins: [tailwindcss()],
  },
};

const vitePressSidebarOptions = [
  {
    documentRootPath: "site",
    scanStartPath: "progetti",
    resolvePath: "/progetti/",
    useTitleFromFrontmatter: true,
    useTitleFromFileHeading: true,
    collapsed: true,
    useFolderTitleFromIndexFile: true,
    useFolderLinkFromIndexFile: true,
    sortMenusByFrontmatterOrder: true,
    //includeRootIndexFile: true,
  },
  {
    documentRootPath: "site",
    scanStartPath: "wiki",
    resolvePath: "/wiki/",
    useTitleFromFrontmatter: true,
    useTitleFromFileHeading: true,
    collapsed: true,
    useFolderTitleFromIndexFile: true,
    useFolderLinkFromIndexFile: true,
    sortMenusByFrontmatterOrder: true,
    includeRootIndexFile: true,
  },
  {
    documentRootPath: "site",
    scanStartPath: "marconicraft",
    resolvePath: "/marconicraft/",
    useTitleFromFrontmatter: true,
    useTitleFromFileHeading: true,
    collapsed: true,
    useFolderTitleFromIndexFile: true,
    useFolderLinkFromIndexFile: true,
    sortMenusByFrontmatterOrder: true,
    includeRootIndexFile: true,
  },
];

export default defineConfig(
  withSidebar(vitePressOptions, vitePressSidebarOptions),
);
