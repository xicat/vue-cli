<template>
  <div class="box-container">
    <template v-for="modal in showModals">
      <vBox :modal="modal" :key="modal.id" />
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
    return {
      showModals: null
    };
  },
  computed: {
    ...mapGetters({
      modals: "modal/modals"
    })
  },
  watch: {
    modals(val) {
      this.showModals = val.fitler(modal => modal.show);
    }
  }
};
</script>
<style scoped>
.box-container {
}
</style>
