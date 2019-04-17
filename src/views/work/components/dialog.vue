<template>
  <div>
    <el-button type="primary" @click="addModal">add</el-button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Modal from "@/utils/win/box";
export default {
  name: "ciDialog",
  data() {
    return {
      pageName: "dialog"
    };
  },
  computed: {
    ...mapGetters({
      zIndex: "modal/zIndex",
      currId: "modal/currId"
    })
  },
  methods: {
    ...mapActions({
      newModal: "modal/newModal"
    }),
    addModal() {
      let modal = {};
      modal.title = "hello world";
      modal.zIndex = this.zIndex;
      modal.id = this.currId;
      this.newModal(modal);
    }
  }
};
</script>

<style></style>
