<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="4"><h1>搜索框</h1></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="4"><div class="label">回车，按键提交</div></el-col>
      <el-col :span="10">
        <search-input v-model="keyword1" trigger="enter,click"
      /></el-col>
      <el-col :span="10"
        ><div class="result">{{ keyword1 }}</div></el-col
      >
    </el-row>
    <el-row :gutter="20">
      <el-col :span="4"><div class="label">按键提交</div></el-col>
      <el-col :span="10">
        <search-input v-model="keyword2" trigger="click"
      /></el-col>
      <el-col :span="10"
        ><div class="result">{{ keyword2 }}</div></el-col
      >
    </el-row>
    <el-row :gutter="20">
      <el-col :span="4"><div class="label">回车提交</div></el-col>
      <el-col :span="10">
        <search-input v-model="keyword3" trigger="enter"
      /></el-col>
      <el-col :span="10"
        ><div class="result">{{ keyword3 }}</div></el-col
      >
    </el-row>
    <el-row :gutter="20">
      <el-col :span="4"><div class="label">输入提交</div></el-col>
      <el-col :span="10">
        <search-input v-model="keyword4" trigger="input"
      /></el-col>
      <el-col :span="10"
        ><div class="result">{{ keyword4 }}</div></el-col
      >
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
.label {
  text-align: right;
  line-height: 40px;
  height: 40px;
}
.result {
  line-height: 40px;
  height: 40px;
}
.label::after {
  content: ":";
}
</style>
