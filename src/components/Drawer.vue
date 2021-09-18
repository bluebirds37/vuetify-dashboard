<template>
  <v-navigation-drawer
    v-model="drawer"
    :mini-variant.sync="mini"
    mini-variant-width="80"
    app
    width="260"
    class="shadown"
    :color="drawerColor"
  >
    <v-list expand nav>
      <v-list-item class="mb-0 justify-space-between pl-3">
        <v-list-item-avatar>
          <v-img src="@/assets/logo.svg" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>
            Kardo 后台管理系统
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <template v-for="(item, i) in menuItem">
        <default-list-group
          v-if="item.items"
          :key="`group-${i}`"
          :item="item"
        />
        <default-list-item v-else :key="`item-${i}`" :item="item" />
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { get, sync } from "vuex-pathify";
export default {
  name: "DefaultDrawer",
  components: {
    DefaultListGroup: () => import("@/components/ListGroup"),
    DefaultListItem: () => import("@/components/ListItem"),
  },
  computed: {
    ...sync(["drawer", "mini"]),
    menuItem: get("menuItems"),
    drawerColor: get("drawerColor"),
  },
};
</script>

<style lang="scss" scoped>
.shadown {
  -webkit-box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
}
</style>