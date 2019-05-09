<template>
  <ul class="list">
    <li @click="workClientTable">本地分页</li>
    <li @click="workServerTable">远程分页</li>
    <li @click="ciForm">表单</li>
    <li @click="ciDialog">弹框</li>
    <li @click="makeWebsite">页面模板</li>
  </ul>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "home",
  data() {
    return {
      pageName: "Home"
    };
  },

  methods: {
    ...mapActions({
      setMenu: "work/setMenu"
    }),
    gotoWork() {
      this.$router.push({ name: "Work" });
    },
    workClientTable() {
      this.gotoWork();
      this.$nextTick(() => {
        this.setMenu("1-1");
      });
    },
    workServerTable() {
      this.gotoWork();
      this.$nextTick(() => {
        this.setMenu("1-2");
      });
    },
    ciForm() {
      this.gotoWork();
      this.$nextTick(() => {
        this.setMenu("2");
      });
    },
    ciDialog() {
      this.gotoWork();
      this.$nextTick(() => {
        this.setMenu("3");
      });
    },
    makeWebsite() {
      this.gotoWork();
      this.$nextTick(() => {
        this.setMenu("4");
      });
    }
  }
};
</script>

<style scoped>
.list li {
  line-height: 30px;
  height: 30px;
  cursor: pointer;
}
</style>
