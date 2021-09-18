<template>
  <v-card class="fill-height ml-2 mt-2 mr-2">
    <default-go-back />
    <v-card-title><v-row justify="center">添加用户</v-row></v-card-title>
    <v-card-text>
      <v-container class="fill-height">
        <v-row>
          <v-col class="text-center">
            <v-dialog v-model="showCropper" persistent width="800px">
              <template v-slot:activator="{}">
                <label for="uploads">
                  <a>
                    <v-avatar size="96">
                      <img :src="form.avatar" />
                    </v-avatar>
                  </a>
                </label>
                <input
                  id="uploads"
                  ref="avator"
                  type="file"
                  style="display: none"
                  accept="image/png, image/jpeg, image/gif, image/jpg"
                  @change="fileChange($event)"
                />
              </template>
              <v-card>
                <v-card-title>
                  <div style="width: 800px; height: 400px">
                    <vueCropper
                      ref="cropper"
                      :output-size="option.outputSize"
                      :output-type="option.outputType"
                      :info="option.info"
                      :can-scale="option.canScale"
                      :can-move-box="option.canMoveBox"
                      :center-box="option.centerBox"
                      :auto-crop="option.autoCrop"
                      :fixed="option.fixed"
                      :fixed-number="option.fixedNumber"
                      :img="option.img"
                      style="background-repeat: repeat"
                    ></vueCropper>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="darken-1" @click="cropCancel">返回</v-btn>
                  <v-btn color="primary" @click="cropSubmit">裁剪</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <h3 class="category avator text-gray ffont-weight-light mb-3">
              点击上传用户头像
            </h3>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-form>
              <v-container>
                <v-row>
                  <v-col md="6" cols="12">
                    <v-text-field
                      v-model="form.phone"
                      label="手机号*"
                      class="purple-input"
                    />
                  </v-col>

                  <v-col md="6" cols="12">
                    <v-text-field
                      v-model="form.password"
                      hint="密码必须以字母开头，长度在6~18之间，只能包含字母、数字和下划线"
                      class="purple-input"
                      label="初始密码*"
                      required
                    />
                  </v-col>
                  <v-col md="6" cols="12">
                    <v-text-field
                      v-model="form.nickname"
                      label="昵称"
                      class="purple-input"
                    />
                  </v-col>
                  <v-col md="6" cols="12">
                    <v-select
                      v-model="form.role"
                      item-text="text"
                      item-value="value"
                      label="角色*"
                      required
                    ></v-select>
                  </v-col>
                  <v-col cols="12">
                    <v-textarea
                      v-model="form.intro"
                      class="purple-input"
                      label="简介"
                      placeholder="个人简介此处填写"
                    />
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-row justify="space-around">
        <v-spacer class="d-none d-sm-flex" />
        <v-btn>提交</v-btn>
        <v-spacer class="d-none d-sm-flex" />
        <v-btn>取消</v-btn>
        <v-spacer class="d-none d-sm-flex" />
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "UserAdd",
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
      };
    },
  },
  data() {
    return {
      showCropper: false,
      form: {
        avatar: `${require("@/static/logo/cat.png")}`,
      },
    };
  },
  methods: {
    fileChange(e) {
      // 上传图片
      // this.option.img
      const file = e.target.files[0];
      if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value)) {
        alert("图片类型必须是.gif,jpeg,jpg,png,bmp中的一种");
        return false;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        let data;
        if (typeof e.target.result === "object") {
          // 把Array Buffer转化为blob 如果是base64不需要
          data = window.URL.createObjectURL(new Blob([e.target.result]));
        } else {
          data = e.target.result;
        }
        this.option.img = data;
        this.showCropper = true;
      };
      // 转化为base64
      // reader.readAsDataURL(file)
      // 转化为blob
      reader.readAsArrayBuffer(file);
    },
    cropCancel() {
      this.showCropper = false;
      this.$refs.avator.value = "";
    },
    cropSubmit() {
      this.showCropper = false;
      console.log("开始上传");
      this.uploadAvatar();
    },
    uploadAvatar() {
      this.$refs.cropper.getCropBlob((data) => {
        console.log(data);
        const file = data;
        const param = new FormData();
        param.append("file", file);
      });
    },
  },
};
</script>

<style>
</style>