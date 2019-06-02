<template>
  <el-scrollbar>
    <el-row>
      <my-card
        v-for="card in list"
        :type="card.type"
        :key="card.type"
        :size="card.size"
      />
    </el-row>
  </el-scrollbar>
</template>

<script>
import myCard from "./card.vue";
export default {
  name: "my-panel",
  components: {
    myCard
  },
  data() {
    return {
      list: [
        { type: "card001", size: 12 },
        { type: "card002", size: 6 },
        { type: "card003", size: 6 },
        { type: "card004", size: 6 },
        { type: "card005", size: 12 },
        { type: "card006", size: 6 },
        { type: "card007", size: 6 },
        { type: "card008", size: 6 },
        { type: "card009", size: 12 }
      ]
    };
  }
};
</script>

<style></style>
