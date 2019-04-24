<template>
  <div class="ci-box" :style="win.style" @click.stop="modalActive">
    <div
      :class="['header', isActive ? 'active' : '']"
      draggable="true"
      @dragstart.stop="dragstart"
      @dragend.stop="dragend"
    >
      <span class="title">{{ showTitle }}</span>
      <div class="win-btn">
        <el-button size="mini" type="text" @click="hide(modal.id)"
          ><font-awesome-icon icon="window-minimize" />
        </el-button>
        <el-button
          size="mini"
          type="text"
          @click="max(modal.id)"
          v-if="!win.isMax"
          ><font-awesome-icon icon="window-maximize" />
        </el-button>
        <el-button size="mini" type="text" @click="min(modal.id)" v-else
          ><font-awesome-icon icon="window-restore" />
        </el-button>
        <el-button size="mini" type="text" @click="close(modal.id)"
          ><font-awesome-icon icon="window-close" />
        </el-button>
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
          title: "",
          win: null
        };
      }
    },
    zIndex: Number
  },
  data() {
    return {
      pageName: "Box",
      top: 0,
      left: 0,
      x: 0,
      y: 0,
      win: {
        resize: true,
        min: true,
        max: true,
        move: true,
        isMax: false,
        style: {
          top: "50%",
          left: "50%",
          height: "",
          width: "",
          "z-index": 1
        }
      }
    };
  },
  computed: {
    ...mapGetters({
      activeId: "modal/activeId"
    }),
    isActive() {
      return this.activeId == this.modal.id;
    },
    showTitle() {
      return this.modal.string ? this.$t(this.modal.string) : this.modal.title;
    }
  },
  watch: {
    zIndex(val) {
      this.win.style["z-index"] = val;
    }
  },
  mounted() {
    if (!this.modal.win) {
      return;
    }
    this.win = Object.assign({}, this.modal.win);
    this.win.style = Object.assign({}, this.modal.win.style);
    this.$nextTick(() => {
      this.top = this.$el.offsetTop;
      this.left = this.$el.offsetLeft;
    });

    if (this.win.isMax) {
      Object.assign(this.win.style, {
        top: 0,
        left: 0,
        height: "100%",
        width: "100%"
      });
    }
  },
  methods: {
    ...mapActions({
      delModal: "modal/delModal",
      hideModal: "modal/hideModal",
      toTopModal: "modal/toTopModal",
      maxModal: "modal/maxModal",
      refreshModal: "modal/refreshModal"
    }),
    hide(id) {
      this.hideModal(id);
    },
    min(id) {
      this.win.isMax = false;
      this.maxModal({ id, flag: false });
      this.win.style = Object.assign({}, this.modal.win.style);
    },
    max(id) {
      this.win.isMax = true;
      this.maxModal({ id, flag: true });
      this.win.style = Object.assign({}, this.win.style, {
        top: 0,
        left: 0,
        height: "100%",
        width: "100%"
      });
    },
    close(id) {
      this.delModal(id);
    },
    modalActive() {
      if (this.modal.id !== this.activeId) this.toTopModal(this.modal.id);
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

      this.win.style.top = this.top + "px";
      this.win.style.left = this.left + "px";
      this.refreshModal({
        id: this.modal.id,
        style: this.win.style
      });
    }
  }
};
</script>
<style scoped>
.ci-box {
  border-radius: 4px;
  border: 1px solid #d8d8d8;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
  position: absolute;
  background-color: #fff;
  box-sizing: border-box;
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
