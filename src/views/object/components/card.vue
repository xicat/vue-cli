<template>
  <el-col :span="size" v-loading="loading">
    <div class="card">{{ pageName }}</div>
  </el-col>
</template>

<script>
export default {
  name: "my-card",
  props: {
    type: String,
    size: [Number, String]
  },
  data() {
    return {
      pageName: "Object",
      loading: true
    };
  },
  created() {
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }
};
</script>

<style scoped>
.card {
  height: 300px;
  margin: 10px;
  border: 1px solid #d8d8d8;
  text-align: center;
}
</style>
