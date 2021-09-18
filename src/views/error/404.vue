<template>
  <v-app>
    <v-main>
      <v-row fill-height align="center" justify="center">
        <v-card elevation="24">
          <v-card-title>
            <v-container>
              <v-row
                ><v-col class="title">资源不存在,请返回上一页</v-col>
              </v-row>
              <v-row
                ><v-col>
                  <v-row align-center justify-center>
                    <v-btn @click="goBack">返回上一页</v-btn></v-row
                  ></v-col
                ></v-row
              >
            </v-container>
          </v-card-title>
        </v-card>
      </v-row>
    </v-main>
  </v-app>
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

<style scoped>
.title {
  text-align: center;
}
</style>