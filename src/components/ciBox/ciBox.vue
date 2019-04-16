<template>
  <div class="ci-box">
    <div class="header">
      <span>{{ modal.title }}</span>
    </div>
    <div class="body"></div>
  </div>
</template>

<script>
export default {
  name: "box",
  props: {
    modal: {
      type: Object,
      default: function() {
        return {
          id: "",
          title: ""
        };
      }
    }
  },
  data() {
    return {
      pageName: "Box"
    };
  }
};
</script>
<style></style>
