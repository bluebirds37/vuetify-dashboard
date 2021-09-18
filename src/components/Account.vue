<template>
  <v-menu
    bottom
    right
    min-width="200"
    offset-y
    origin="top right"
    transition="scale-transition"
  >
    <template v-slot:activator="{ attrs, on }">
      <v-avatar size="46px">
        <img
          v-bind="attrs"
          v-on="on"
          :src="`${require('@/assets/logo.png')}`"
          alt=""
        />
      </v-avatar>
      <strong class="mr-2">管理员</strong>
    </template>

    <v-list :tile="false" flat nav>
      <template v-for="(p, i) in profile">
        <v-divider v-if="p.divider" :key="`divider-${i}`" class="mb-2 mt-2" />
        <v-list-item v-else :key="`item-${i}`" to="/">
          <v-list-item-title @click="handle(p)" v-text="p.title" />
        </v-list-item>
      </template>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: "DefaultAccount",
  data() {
    return {
      profile: [
        // { title: "Profile" },
        // { title: "Settings" },
        // { divider: true },
        { title: "退出登陆" },
      ],
    };
  },
  methods: {
    handle() {
      this.$router.push("/");
    },
  },
};
</script>

<style>
</style>