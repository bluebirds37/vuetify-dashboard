<template>
  <v-app>
    <default-head-bar />
    <default-drawer />
    <v-main>
          <router-view :key="$route.path" />
    </v-main>
  </v-app>
</template>

<script>
export default {
  components: {
    DefaultListGroup: () => import("@/components/ListGroup"),
    DefaultListItem: () => import("@/components/ListItem"),
    DefaultHeadBar: () => import("@/components/HeadBar"),
    DefaultDrawer: () => import("@/components/Drawer"),
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>