<template>
  <webRoot :root="rootData" v-if="rootData"></webRoot>
</template>

<script>
import { template } from "./layoutTemplate.js";
import webRoot from "./webRoot.vue";
export default {
  components: {
    webRoot
  },
  props: {
    layoutStyle: {
      type: Number,
      default: function() {
        return -1;
      }
    }
  },
  data() {
    return {
      rootData: null
    };
  },
  watch: {
    layoutStyle(type) {
      if (type < 1) {
        return;
      }
      this.rootData = template[type - 1];
    }
  }
};
</script>

<style>
.work-shop .el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.work-shop .el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.work-shop .el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>
