<template>
  <component :is="node.type" :style="node.style" v-show="node.type">
    <template v-if="node.children">
      <web-node
        v-for="(child, index) in node.children"
        :key="index"
        :node="child"
      ></web-node>
    </template>

    <span v-else>{{ node.name }}</span>
  </component>
</template>

<script>
export default {
  name: "webNode",
  componentName: "webNode",
  props: {
    node: {
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
