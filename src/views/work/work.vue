<template>
  <component :is="page"> </component>
</template>
<script>
const workClientTable = () => import("./components/workClientTable.vue");
const workServerTable = () => import("./components/workServerTable.vue");
const eChart = () => import("./components/echart.vue");
const ciForm = () => import("./components/form.vue");
const mTable = () => import("./components/mTable.vue");
const ciDialog = () => import("./components/dialog.vue");
import { mapGetters } from "vuex";
export default {
  name: "work",
  components: {
    workClientTable,
    workServerTable,
    eChart,
    ciForm,
    mTable,
    ciDialog
  },
  data() {
    return {
      page: "mTable"
    };
  },
  computed: {
    ...mapGetters({
      workPage: "work/page"
    })
  },
  watch: {
    workPage(page) {
      this.page = page;
    }
  }
};
</script>

<style></style>
