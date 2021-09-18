<template>
  <v-app class="login">
    <video
      autoplay="autoplay"
      loop="loop"
      muted="muted"
      class="background"
      src="@/static/kardo-default-video.mp4"
    ></video>

    <v-main>
      <v-container fluid class="fill-height">
        <v-row justify="center">
          <v-col
            align-self="center"
            xl="4"
            lg="4"
            md="10"
            sm="10"
            class="loginCard"
          >
            <v-card
              :class="
                $vuetify.theme.dark ? 'login-card-dark' : 'login-card-light'
              "
            >
              <v-card-title
                class="login-title" ><v-row  justify="center"
                  >欢迎使用Kardo后台管理系统</v-row
                ></v-card-title
              >
              <v-card-text>
                <v-row>
                  <v-spacer class="d-none d-sm-flex"></v-spacer>
                  <v-col xl="10" lg="10" md="10" sm="10">
                    <v-form ref="form" lazy-validation>
                      <v-text-field
                        v-model="username"
                        :counter="15"
                        :rules="usernameRules"
                        label="用户名"
                        required
                      ></v-text-field>
                      <v-text-field
                        v-model="password"
                        :rules="passwordRules"
                        label="密码"
                        required
                      ></v-text-field>
                    </v-form>
                  </v-col>
                  <v-spacer class="d-none d-sm-flex"></v-spacer>
                </v-row>
              </v-card-text>
              <v-card-actions>
                <v-row align="center" justify="center">
                  <v-btn color="primary" class="mb-4" @click="login">
                    登陆
                  </v-btn>
                </v-row>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    username: "",
    usernameRules: [
      (v) => !!v || "请输入用户名",
      (v) => (v && v.length <= 15) || "用户名不应太长",
    ],
    password: "",
    passwordRules: [(v) => !!v || "请输入密码"],
  }),
  methods: {
    login() {
      let valid = this.$refs.form.validate();
      console.log(valid);
      this.$router.push("/admin");
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  height: 100%;
  width: 100%;
  position: relative;
}
.background {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
}
.login-card-light {
  background: rgba(255, 255, 255, 0.8) !important;
}
.login-card-dark {
  background: rgba(0, 0, 0, 0.8) !important;
}
.login-title{
  padding-top: 20px;
}
</style>