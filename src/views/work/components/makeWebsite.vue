<template>
  <div class="box">
    <div class="btn-bar">
      <el-button size="small" type="primary">新建</el-button>
      <el-button size="small" type="primary">保存</el-button>
      <el-button size="small" type="primary">预览</el-button>
    </div>
    <div class="container">
      <tool-box class="tool-box" @layout="layout"></tool-box>
      <work-shop class="work-shop" :layoutStyle="layoutStyle"></work-shop>
    </div>
  </div>
</template>

<script>
import toolBox from "@/views/website/toolBox.vue";
import workShop from "@/views/website/workShop.vue";
export default {
  data() {
    return {
      layoutStyle: -1
    };
  },
  components: {
    toolBox,
    workShop
  },
  methods: {
    layout(type) {
      this.layoutStyle = type;
    }
  }
};
</script>

<style scoped>
.box {
  height: 100%;
  width: 100%;
}
.btn-bar {
  height: 40px;
  line-height: 40px;
}
.container {
  position: relative;
  height: calc(100% - 40px);
  width: 100%;
  padding-left: 300px;
  box-sizing: border-box;
}
.tool-box {
  width: 300px;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-color: #fff;
  padding: 10px;
  box-sizing: border-box;
}
.work-shop {
  height: 100%;
  width: 100%;
  background-color: rgb(84, 92, 100);
  padding: 10px;
  box-sizing: border-box;
}
</style>
