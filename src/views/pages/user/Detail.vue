<template>
  <v-card class="fill-height ml-2 mt-2 mr-2">
    <default-go-back />
    <v-card-title
      ><v-row justify="center">用户{{ form.nickname }}详情</v-row></v-card-title
    >
    <v-card-text>
      <v-container class="fill-height">
        <v-row>
          <v-col class="text-center">
            <v-avatar size="96">
              <img :src="form.avatar" />
            </v-avatar>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-container>
              <v-row class="text-h6">
                <v-col md="6" cols="12">
                  <span class="grey--text">手机号 ：</span>
                  <span>{{ form.phone }}</span>
                </v-col>
                <v-col md="6" cols="12">
                  <span class="grey--text">昵称 ：</span>
                  <span>{{ form.nickname }}</span>
                </v-col>
                <v-col md="6" cols="12">
                  <span class="grey--text">角色 ：</span>
                  <span>{{ form.roleName }}</span>
                </v-col>
                <v-col md="6" cols="12">
                  <span class="grey--text">注册时间 ：</span>
                  <span>{{ form.createdTime }}</span>
                </v-col>
                <v-col md="6" cols="12">
                  <span class="grey--text">最后登陆时间 ：</span>
                  <span>{{ form.lastLoginTime }}</span>
                </v-col>
                <v-col cols="12">
                  <div><span class="grey--text">简介 ：</span></div>
                  <p class="text text-indent-2em" v-html="form.intro"></p>
                </v-col>
              </v-row>
            </v-container>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "UserDetail",
  components: {
    DefaultGoBack: () => import("@/components/widgets/GoBack"),
  },
  computed: {
    option() {
      return {
        img: this.form.avatar || `${require("@/static/logo/cat.png")}`, // 裁剪图片的地址
        info: true, // 裁剪框的大小信息
        outputSize: 1, // 裁剪生成图片的质量
        outputType: "jpeg", // 裁剪生成图片的格式
        canScale: true, // 图片是否允许滚轮缩放
        autoCrop: true, // 是否默认生成截图框
        canMoveBox: true, // 截图框能否拖动
        centerBox: true, // 截图框能否拖动
        fixed: true, // 是否开启截图框宽高固定比例
        fixedNumber: [4, 4], // 截图框的宽高比例
      };
    },
  },
  data() {
    return {
      showCropper: false,
      form: {
        avatar: `${require("@/static/logo/cat.png")}`,
        phone: 18623005316,
        nickname: "123",
        roleName: "123",
        createdTime: "2021-10-10 12:12",
        lastLoginTime: "2021-11-10 12:12",
        intro:
          "我是截图框的宽高比例是否开启截图框宽高固定比例我是截图框的宽高比例是否开启截图框宽高固定比例我是截图框的宽高比例是否开启截图框宽高固定比例我是截图框的宽高比例是否开启截图框宽高固定比例我是截图框的宽高比例是否开启截图框宽高固定比例",
      },
    };
  },
  methods: {
    cropCancel() {
      this.showCropper = false;
      this.$refs.avator.value = "";
    },
    cropSubmit() {
      this.showCropper = false;
    },
  },
};
</script>

<style>
</style>