<template>
  <v-fade-transition mode="out-in">
    <router-view />
  </v-fade-transition>
</template>

<script>
import { sync } from "vuex-pathify";
import Admin from "./views/layouts/Admin.vue";
export default {
  name: "App",
  components: { Admin },
  computed: {
    ...sync(["themeColor", "themeDark"]),
  },
  data: () => ({
    //
  }),
  mounted() {
    this.initTheme();
  },
  methods: {
    initTheme() {
      this.$vuetify.theme.dark = this.themeDark;
      this.$vuetify.theme.themes[
        this.$vuetify.theme.dark ? "dark" : "light"
      ].primary = this.themeColor;
    },
  },
};
</script>
