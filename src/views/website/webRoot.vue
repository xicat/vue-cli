<template>
  <component :is="root.type" :style="root.style" :class="root.class">
    <web-node
      v-for="(node, index) in root.children"
      :key="index"
      :node="node"
    ></web-node>
  </component>
</template>

<script>
import webNode from "./webNode.vue";
export default {
  name: "web-root",
  components: {
    webNode
  },
  props: {
    root: {
      type: Object,
      default: function() {
        return {
          type: null,
          style: "",
          children: null
        };
      }
    }
  }
};
</script>

<style></style>
