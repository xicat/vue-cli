<template>
  <div>
    <div class="bar">
      <el-button
        @click="toggle(modal.id)"
        v-for="modal in modals"
        :key="modal.id"
        >{{ modal.title }}</el-button
      >
    </div>
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
      pageName: "dialog",
      zIndex: 1
    };
  },
  computed: {
    ...mapGetters({
      modals: "modal/modals"
    })
  },
  methods: {
    ...mapActions({
      newModal: "modal/newModal",
      toggleModal: "modal/toggleModal"
    }),
    addModal() {
      let modal = new Modal(this, "text");
      modal.title = "hello world" + this.zIndex++;
      this.newModal(modal);
    },
    toggle(id) {
      this.toggleModal(id);
    }
  }
};
</script>

<style></style>
