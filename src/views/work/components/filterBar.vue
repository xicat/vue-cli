<template>
  <ul>
    <li v-for="item in list" :key="item.type">
      <span>{{ item.title || $t(item.i18n) }}</span
      >{{ item.type }}<span>{{ item.value }}</span
      ><i @click="del(item.key)" class="del el-icon-circle-close"></i>
    </li>
  </ul>
</template>

<script>
export default {
  name: "filterBar",
  props: {
    list: {
      type: Array,
      default: function() {
        return null;
      }
    }
  },
  methods: {
    del(key) {
      this.$emit("remove-filter", key);
    }
  }
};
</script>

<style scoped>
.del {
  cursor: pointer;
}
</style>
