<template>
  <v-card class="mt-2 ml-2 mr-2">
    <v-card-title>
      <v-row
        align="center"
        align-content="center"
        justify="space-between"
        justify-sm="space-around"
        class="flex-wrap"
      >
        <v-col md="3" sm="4" cols="12">
          <v-text-field
            class="flex"
            placeholder="输入关键字"
            prepend-inner-icon="mdi-magnify"
          >
          </v-text-field>
        </v-col>
        <v-col sm="2" cols="4">
          <v-row justify="center">
            <v-btn color="primary">搜索</v-btn>
          </v-row>
        </v-col>
        <v-spacer class="d-none d-sm-flex"></v-spacer>
        <v-col md="1" sm="2" cols="4">
          <v-row justify="center">
            <v-btn color="secondary" @click="goAdd">添加</v-btn>
          </v-row>
        </v-col>
        <v-col md="1" sm="2" cols="4">
          <v-row justify="center">
            <v-btn color="error">删除所有</v-btn>
          </v-row>
        </v-col>
      </v-row>
    </v-card-title>
    <v-card-text>
      <v-data-table
        v-model="selectedList"
        :headers="headers"
        :items="dataList"
        hide-default-footer
        class="elevation-1 mt-5"
        :fixed-header="true"
        :multi-sort="true"
        :show-select="true"
      >
        <template v-slot:[`item.status`]="{ item }">
          <div>
            <v-chip v-if="item.status == 0" color="success">正常</v-chip>
            <v-chip v-else color="error">封禁</v-chip>
          </div>
        </template>

        <template v-slot:[`item.command`]="{ item }">
          <v-row justify="center" align="center">
            <v-btn text color="primary" title="详情" @click="goDetail(item)">
              详情
            </v-btn>
            <v-btn text color="primary" title="编辑" @click="goEdit(item)">
              编辑
            </v-btn>
            <v-btn text color="error" title="删除"> 删除 </v-btn>
          </v-row>
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
        { text: "昵称", value: "nickname" },
        { text: "手机号", value: "phone" },
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
  methods: {
    goDetail(item) {
      this.$router.push({
        path: "/admin/user/detail",
        param: {
          id: item.id,
        },
      });
    },
    goEdit(item) {
      this.$router.push({
        path: "/admin/user/edit",
        param: {
          id: item.id,
        },
      });
    },
    goAdd(){
      this.$router.push('/admin/user/add')
    }
  },
};
</script>

<style>
</style>