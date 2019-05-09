<template>
  <component :is="page"> </component>
</template>
<script>
const workClientTable = () => import("./components/workClientTable.vue");
const workServerTable = () => import("./components/workServerTable.vue");
const eChart = () => import("./components/echart.vue");
const ciForm = () => import("./components/form.vue");
const ciDialog = () => import("./components/dialog.vue");
const makeWebsite = () => import("./components/makeWebsite.vue");
import { mapGetters } from "vuex";
export default {
  name: "work",
  components: {
    workClientTable,
    workServerTable,
    eChart,
    ciForm,
    ciDialog,
    makeWebsite
  },
  data() {
    return {
      page: "workServerTable"
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
