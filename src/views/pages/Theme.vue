<template>
  <v-card class="mt-2 ml-2 mr-2">
    <v-card-text>
      <v-list>
        <v-list-item>
          <v-list-item-icon> 暗黑模式: </v-list-item-icon>
          <v-list-item-action>
            <v-switch
              v-model="$vuetify.theme.dark"
              class="ma-0 pa-0"
              color="secondary"
              hide-details
            />
          </v-list-item-action>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
          <v-list-item-icon>主题颜色:</v-list-item-icon>
          <v-list-item-action>
            <v-row align="center">
              <v-avatar
                :color="themeColor"
                class="color-item"
                size="25"
              />
              <v-btn class="ml-4" text small @click="showPickColor('Theme')"
                >选取颜色</v-btn
              >
            </v-row>
          </v-list-item-action>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
          <v-list-item-icon>侧边颜色:</v-list-item-icon>
          <v-list-item-action>
            <v-row align="center">
              <v-avatar :color="drawerColor" class="color-item" size="25" />
              <v-btn class="ml-4" text small @click="showPickColor('Darwer')"
                >选取颜色</v-btn
              >
            </v-row>
          </v-list-item-action>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
          <v-list-item-icon>顶栏颜色:</v-list-item-icon>
          <v-list-item-action>
            <v-row align="center">
              <v-avatar
                :color="headerColor"
                class="color-item"
                size="25"
              />
              <v-btn class="ml-4" text small @click="showPickColor('Header')"
                >选取颜色</v-btn
              >
            </v-row>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-card-text>
    <v-dialog :value="pickColorDialogStatus" max-width="360">
      <v-card>
        <v-card-title
          ><v-row justify="center"
            >选择{{ pickTarget }}颜色</v-row
          ></v-card-title
        >
        <v-card-text>
          <v-row justify="center">
            <v-color-picker
              dot-size="26"
              hide-mode-switch
              mode="rgba"
              :color="pickColorValue"
              @input="pickColorResult"
            ></v-color-picker>
          </v-row>
        </v-card-text>
        <v-card-actions class="pb-5">
          <v-row justify="space-around"
            ><v-btn @click="pickColor">选中</v-btn
            ><v-btn @click="pickColorDialogStatus = !pickColorDialogStatus"
              >关闭</v-btn
            ></v-row
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
import { sync } from "vuex-pathify";
export default {
  name: "Role",
  computed: {
    ...sync(["themeColor", "drawerColor", "headerColor", "themeDark"]),
  },
  watch: {
    "$vuetify.theme.dark"(value) {
      if (value) {
        this.themeDark = true;
        this.drawerColor = "#1E1E1E";
        this.headerColor = "#1E1E1E";
      } else {
        this.themeDark = false;
        this.drawerColor = "#FFFFFF";
        this.headerColor = "#FFFFFF";
      }
    },
  },
  data() {
    return {
      pickColorDialogStatus: false,
      pickTarget: "Theme",
      pickColorValue: "FFFFFF",
    };
  },
  methods: {
    showPickColor(target) {
      this.pickTarget = target;
      this.pickColorDialogStatus = true;
    },
    pickColorResult(value) {
      this.pickColorValue = value.hex;
    },
    pickColor() {
      if (this.pickTarget == "Theme") {
        this.themeColor = this.pickColorValue;
        this.$vuetify.theme.themes[
          this.$vuetify.theme.dark ? "dark" : "light"
        ].primary = this.pickColorValue;
      }
      if (this.pickTarget == "Darwer") {
        this.drawerColor = this.pickColorValue;
      }
      if (this.pickTarget == "Header") {
        this.headerColor = this.pickColorValue;
      }
      this.pickColorDialogStatus = false;
    },
  },
};
</script>


<style lang="scss" scoped>
.color-item {
  border-width: 4px;
  border-style: solid;
  border-color: #7dc5f5 !important;
}
</style>