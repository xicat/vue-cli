<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="4">回车，按键提交</el-col>
      <el-col :span="16">
        <search-input v-model="keyword1" trigger="enter,click"
      /></el-col>
      <el-col :span="4">{{ keyword1 }}</el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="4">按键提交</el-col>
      <el-col :span="16">
        <search-input v-model="keyword2" trigger="click"
      /></el-col>
      <el-col :span="4">{{ keyword2 }}</el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="4">回车提交</el-col>
      <el-col :span="16">
        <search-input v-model="keyword3" trigger="enter"
      /></el-col>
      <el-col :span="4">{{ keyword3 }}</el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="4">输入提交</el-col>
      <el-col :span="16">
        <search-input v-model="keyword4" trigger="input"
      /></el-col>
      <el-col :span="4">{{ keyword4 }}</el-col>
    </el-row>
  </div>
</template>

<script>
import searchInput from "@c/searchInput/search.vue";
export default {
  name: "ciForm",
  components: {
    searchInput
  },
  data() {
    return {
      keyword1: "keyword1",
      keyword2: "keyword2",
      keyword3: "keyword3",
      keyword4: "keyword4"
    };
  }
};
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
</style>
