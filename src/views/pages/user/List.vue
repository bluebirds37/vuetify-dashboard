<template>
  <v-card class="mt-2 ml-2 mr-2">
    <v-card-title>
      <v-layout nowrap>
        <v-col lg="2"
          ><v-text-field
            placeholder="输入关键字"
            prepend-inner-icon="mdi-magnify"
          >
          </v-text-field
        ></v-col>
      </v-layout>
    </v-card-title>
    <v-card-text>
      <v-data-table
        v-model="selectedList"
        :headers="headers"
        :items="dataList"
        hide-default-footer
        class="elevation-1"
        :fixed-header="true"
        :multi-sort="true"
        :show-select="true"
      >
        <template v-slot:item.command="{ item }">
          <v-layout justify-center align-center>
            <v-btn text color="primary" title="编辑"> 编辑 </v-btn>
            <v-btn text color="error" title="删除"> 删除 </v-btn>
          </v-layout>
        </template>
      </v-data-table>
    </v-card-text>
    <v-card-actions>
      <v-col>
        <v-pagination :length="4" circle></v-pagination>
      </v-col>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "UserList",
  data() {
    return {
      headers: [
        { text: "头像", value: "head" },
        { text: "用户名", value: "username" },
        { text: "昵称", value: "nickname" },
        { text: "手机号", value: "phone", align: "center" },
        { text: "注册时间", value: "createdTime" },
        { text: "状态", value: "status" },
        {
          text: "操作",
          value: "command",
          align: "center",
          sortable: false,
        },
      ],
      selectedList: [],
      dataList: [
        {
          id: "1437967974187991041",
          username: "",
          nickname: "Kardo7236",
          phone: "186****5313",
          headId: 1004,
          head: "http://test",
          intro: null,
          status: 0,
          createdTime: "2021-09-15 10:34:16",
          roleId: null,
        },
      ],
    };
  },
};
</script>

<style>
</style>