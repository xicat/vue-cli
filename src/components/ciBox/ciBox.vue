<template>
  <div class="ci-box">
    <div class="header">
      <span class="title">{{ modal.title }}</span>
      <div class="win-btn">
        <el-button
          size="mini"
          type="text"
          @click="hide"
          icon="el-icon-caret-left"
        />
        <el-button
          size="mini"
          type="text"
          @click="max"
          icon="el-icon-caret-top"
          v-if="modal.max"
        />
        <el-button
          size="mini"
          type="text"
          @click="min"
          icon="el-icon-caret-bottom"
          v-else
        />
        <el-button
          size="mini"
          type="text"
          @click="close"
          icon="el-icon-caret-right"
        />
      </div>
    </div>
    <div class="body"></div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
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
  },
  methods: {
    ...maxActions({
      delModal: "modal/delModal",
      hideModal: "modal/hideModal",
      toTopModal: "modal/toTopModal",
      maxModal: "modal/maxModal"
    }),
    hide() {
      this.hideModal(this.modal);
    },
    min() {
      this.modal.max = false;
    },
    max() {
      this.modal.max = true;
    },
    close() {
      this.delModal(this.modal);
    }
  }
};
</script>
<style scoped>
.ci-box {
  border-radius: 4px;
  border: 1px solid #d8d8d8;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
  height: 200px;
  width: 300px;
}
.ci-box header {
  padding: 4px;
  height: 32px;
  line-height: 32px;
}
.ci-box .win-btn {
  float: right;
}
</style>
