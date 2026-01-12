---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

const rappresentanti = [
  {
    avatar: "https://avatars.githubusercontent.com/u/142306632?v=4",
    name: "Matteo Caputo",
    title: "1AI",
    links: [
      { icon: "instagram", link: "https://www.instagram.com/m.capvto" }
    ]
  },
  {
    avatar: "https://cdn.vectorstock.com/i/500p/71/90/blank-avatar-photo-icon-design-vector-30257190.jpg",
    name: "Alice Azzolini",
    title: "3CI",
    links: [
      { icon: "instagram", link: "https://instagram.com/alice._azzolini" }
    ]
  },
  {
    avatar: "https://cdn.vectorstock.com/i/500p/71/90/blank-avatar-photo-icon-design-vector-30257190.jpg",
    name: "Pasindu Rukshan Fernando Warnakulasuriya",
    title: "4BI",
    links: [
      { icon: "", link: "" }
    ]
  },
  {
    avatar: "https://cdn.vectorstock.com/i/500p/71/90/blank-avatar-photo-icon-design-vector-30257190.jpg",
    name: "Pietro Montanari",
    title: "4AC",
    links: [
      { icon: "instagram", link: "https://instagram.com/il_monta07" }
    ]
  }
]
const staff = [
  {
    avatar: "https://avatars.githubusercontent.com/u/101987055?v=4",
    name: "Silvio Landers",
    title: "4BI",
    desc: "Fondatore di StudentiMarconi",
    links: [
      { icon: "codeberg", link: "https://codeberg.org/Malasaur" },
      { icon: "github", link: "https://github.com/Malasaur" },
      { icon: "signal", link: "https://signal.me/#eu/ZjVnmnVWoi_b-luqPup07J8j4QsSYXkkGwhFskagB9LjxdeiHXND9agWEz78paO8" }
    ]
  }
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>Chi siamo</template>
    <template #lead>Siamo rappresentanti e studenti del Marconi come voi.</template>
  </VPTeamPageTitle>
  <VPTeamPageSection>
    <template #title>Rappresentanti</template>
    <template #members>
      <VPTeamMembers size="medium" :members="rappresentanti" />
    </template>
  </VPTeamPageSection>
  <VPTeamPageSection>
    <template #title>Staff</template>
    <template #members>
      <VPTeamMembers size="small" :members="staff" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>
