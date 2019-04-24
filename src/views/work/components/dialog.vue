<template>
  <div>
    <div class="bar">
      <el-button
        @click="toggle(modal)"
        v-for="modal in showModals"
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
    }),
    showModals() {
      return this.modals
        .map(row => {
          return {
            id: row.id,
            title: row.title,
            show: row.show
          };
        })
        .sort(function(a, b) {
          return a.id - b.id;
        });
    }
  },
  methods: {
    ...mapActions({
      newModal: "modal/newModal",
      toggleModal: "modal/toggleModal"
    }),
    addModal() {
      let modal = new Modal("text");
      modal.title = "hello world" + this.zIndex++;
      this.newModal(modal);
    },
    toggle(modal) {
      this.toggleModal(modal);
    }
  }
};
</script>

<style></style>
