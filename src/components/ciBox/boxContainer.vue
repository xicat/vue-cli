<template>
  <div class="box-container">
    <template v-for="(modal, index) in showModals">
      <vBox :modal="modal" :key="modal.id + '-' + index" :zIndex="index + 1" />
    </template>
  </div>
</template>

<script>
import vBox from "./ciBox.vue";
import { mapGetters } from "vuex";
export default {
  name: "boxContainer",
  components: {
    vBox
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      modals: "modal/modals"
    }),
    showModals() {
      return this.modals.filter(modal => modal.show);
    }
  }
};
</script>
<style scoped>
.box-container {
}
</style>
