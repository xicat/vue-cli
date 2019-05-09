<template>
  <div class="search-bar" @keyup.enter="enter">
    <el-input
      :placeholder="placeholder"
      v-model="value"
      clearable
      v-if="trigger.indexOf('click') > -1"
    >
      <el-button
        slot="append"
        icon="el-icon-search"
        @click="submit"
      ></el-button>
    </el-input>
    <el-input :placeholder="placeholder" v-model="value" clearable v-else>
    </el-input>
  </div>
</template>

<script>
export default {
  name: "searchInput",
  model: {
    prop: "inputValue",
    event: "input"
  },
  props: {
    inputValue: {
      type: String,
      default: function() {
        return "";
      }
    },
    customCss: {
      type: String,
      default: function() {
        return "";
      }
    },
    trigger: {
      type: String,
      default: function() {
        return "click";
      }
    },
    placeholder: {
      type: String,
      default: function() {
        return "请输入内容";
      }
    }
  },
  data() {
    return {
      value: this.inputValue
    };
  },
  watch: {
    value(val) {
      if (this.trigger.indexOf("input") == -1) {
        return;
      }
      this.$emit("input", val);
    }
  },
  methods: {
    submit() {
      if (this.trigger.indexOf("click") == -1) {
        return;
      }
      this.$emit("input", this.value);
    },
    enter() {
      if (this.trigger.indexOf("enter") == -1) {
        return;
      }
      this.$emit("input", this.value);
    }
  }
};
</script>

<style>
.search-bar {
  width: 100%;
}
</style>
