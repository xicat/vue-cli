<template>
  <el-menu
    class="el-menu"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#1989fa"
    @select="select"
    default-active="1-1"
  >
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-el-icon-date"></i>
        <span>表格</span>
      </template>
      <el-menu-item index="1-1">本地分页</el-menu-item>
      <el-menu-item index="1-2">远程分页</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "workMenu",
  methods: {
    ...mapActions({
      setPage: "work/setPage"
    }),
    select(index) {
      if (index == "1-1") {
        this.setPage("workClientTable");
      } else {
        this.setPage("workServerTable");
      }
    }
  }
};
</script>

<style scoped>
.box {
  width: 100%;
  height: 100%;
  background-color: #000;
}
.el-menu {
  border-right-width: 0;
}
</style>
