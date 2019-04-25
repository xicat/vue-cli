<template>
  <el-collapse accordion>
    <el-collapse-item title="布局" name="1">
      <el-button size="small" type="primary" @clik="container(1)"
        >布局一</el-button
      >
      <el-button size="small" type="primary" @clik="container(2)"
        >布局二</el-button
      >
      <el-button size="small" type="primary" @clik="container(3)"
        >布局三</el-button
      >
    </el-collapse-item>
  </el-collapse>
</template>

<script>
export default {
  methods: {
    container(type) {
      this.$emit("layout", type);
    }
  }
};
</script>

<style></style>
