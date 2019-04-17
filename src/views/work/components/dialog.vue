<template>
  <div>
    <el-button type="primary" @click="addModal">add</el-button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "ciDialog",
  data() {
    return {
      pageName: "dialog"
    };
  },
  methods: {
    ...mapActions({
      newModal: "modal/newModal"
    }),
    addModal() {
      this.newModal({ title: "hello world" });
    }
  }
};
</script>

<style></style>
