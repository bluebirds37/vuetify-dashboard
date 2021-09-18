<template>
  <v-app-bar id="default-app-bar" :color="headerColor" app height="70">
    <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer" />
    <v-btn
      class="ml-3 mr-4 hidden-sm-and-down"
      elevation="1"
      fab
      small
      @click="mini = !mini"
    >
      <v-icon>
        {{ mini ? "mdi-format-list-bulleted" : "mdi-dots-vertical" }}
      </v-icon>
    </v-btn>
    <v-toolbar-title class="font-weight-light text-h5" v-text="headTitle" />
    <v-spacer />
    <default-account />
  </v-app-bar>
</template>

<script>
import { get, sync } from "vuex-pathify";
export default {
  components: {
    DefaultAccount: () => import("@/components/Account"),
  },
  computed: {
    ...sync(["drawer", "mini", "headTitle"]),
    headerColor: get("headerColor"),
  },
};
</script>

<style>
</style>