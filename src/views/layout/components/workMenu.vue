<template>
  <el-menu
    class="el-menu"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#1989fa"
    @select="select"
    :default-active="pageActive"
  >
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-menu"></i>
        <span>表格</span>
      </template>
      <el-menu-item index="1-1">本地分页</el-menu-item>
      <el-menu-item index="1-2">远程分页</el-menu-item>
    </el-submenu>
    <el-menu-item index="2">
      <i class="el-icon-menu"></i>
      <span slot="title">表单</span>
    </el-menu-item>
    <el-menu-item index="3">
      <i class="el-icon-menu"></i>
      <span slot="title">弹框</span>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-menu"></i>
      <span slot="title">页面模板</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "workMenu",
  data() {
    return {
      pageActive: "4"
    };
  },
  computed: {
    ...mapGetters({
      aciveMenu: "work/menu"
    })
  },
  watch: {
    aciveMenu(val) {
      this.pageActive = val;
      this.select(val);
    }
  },
  methods: {
    ...mapActions({
      setPage: "work/setPage",
      setMenu: "work/setMenu"
    }),
    select(index) {
      if (index == "1-1") {
        this.setPage("workClientTable");
        this.setMenu("1-1");
      } else if (index == "1-2") {
        this.setPage("workServerTable");
        this.setMenu("1-2");
      } else if (index == "2") {
        this.setPage("ciForm");
        this.setMenu("2");
      } else if (index == "3") {
        this.setPage("ciDialog");
        this.setMenu("3");
      } else if (index == "4") {
        this.setPage("makeWebsite");
        this.setMenu("4");
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
