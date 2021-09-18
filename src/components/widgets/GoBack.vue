<template>
  <div class="pl-5 pt-5">
    <v-icon large @click="goBack">mdi-arrow-left</v-icon>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style>
</style>