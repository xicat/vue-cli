<template>
  <div class="ci-box" :style="style" @click="modalActive">
    <div
      :class="['header', isActive ? 'active' : '']"
      draggable="true"
      @dragstart="dragstart"
      @dragend="dragend"
    >
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
import { mapActions, mapGetters } from "vuex";
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
      pageName: "Box",
      top: 0,
      left: 0,
      x: 0,
      y: 0,
      style: {
        top: 0,
        left: 0,
        "z-index": 1
      }
    };
  },
  computed: {
    ...mapGetters({
      activeId: "modal/activeId"
    }),
    isActive() {
      return this.activeId == this.modal.id;
    }
  },
  watch: {
    "modal.zIndex"(index) {
      this.style["z-index"] = index;
    }
  },
  methods: {
    ...mapActions({
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
    },
    modalActive() {
      if (this.modal.id !== this.activeId) this.toTopModal(this.modal);
    },
    dragstart(ev) {
      this.x = ev.x;
      this.y = ev.y;
    },
    dragend(ev) {
      this.left = this.left + ev.x - this.x;
      this.top = this.top + ev.y - this.y;
      this.boundary();
    },
    boundary() {
      if (this.top < 0) {
        this.top = 0;
      }
      if (this.left < 0) {
        this.left = 0;
      }

      let maxHeight =
        this.$parent.$parent.$el.clientHeight - this.$el.clientHeight;
      let maxWidth =
        this.$parent.$parent.$el.clientWidth - this.$el.clientWidth;
      if (this.top > maxHeight) {
        this.top = maxHeight;
      }
      if (this.left > maxWidth) {
        this.left = maxWidth;
      }

      this.style.top = this.top + "px";
      this.style.left = this.left + "px";
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
  position: absolute;
  background-color: #fff;
}
.ci-box .header {
  padding: 0 4px;
  height: 28px;
  line-height: 28px;
  font-size: 12px;
  background-color: #ecf8ff;
  cursor: pointer;
}
.ci-box .header.active {
  background-color: #3a8ee6;
}
.ci-box .win-btn {
  float: right;
}
</style>
