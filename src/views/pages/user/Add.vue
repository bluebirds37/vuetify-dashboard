<template>
  <v-card class="fill-height ml-2 mt-2 mr-2">
    <v-card-title><v-row justify="center">添加用户</v-row></v-card-title>
    <v-card-text>
      <v-container class="fill-height">
        <v-row>
          <v-col class="text-center">
            <v-dialog v-model="showCropper" persistent width="800px">
              <template v-slot:activator="{ on }">
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
                      v-model="form.username"
                      hint="用户名不能包含空格和特殊字符"
                      class="purple-input"
                      label="用户名*"
                      required
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