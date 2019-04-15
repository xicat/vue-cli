<template>
  <div class="box">
    <div class="list">
      <div class="diary">
        <el-row type="flex" class="row-bg" justify="space-between">
          <el-col :span="6">
            <el-date-picker
              v-model="myForm.date"
              type="date"
              format="yyyy-MM-dd"
              placeholder="选择日期"
            >
            </el-date-picker>
          </el-col>
          <el-col :span="6">
            <el-select v-model="myForm.weather" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg" justify="space-between">
          <el-col :span="20"><input v-model="myForm.title"/></el-col>
        </el-row>
        <el-row type="flex" class="row-bg" justify="space-between">
          <el-col :span="20"
            ><textarea v-model="myForm.content"></textarea
          ></el-col>
        </el-row>
        <el-row type="flex" class="row-bg" justify="space-between">
          <el-button size="small" @click="submit">提交</el-button>
        </el-row>
      </div>
      <div v-for="(diary, index) in lists" class="diary" :key="index">
        <el-row type="flex" class="row-bg" justify="space-between">
          <el-col :span="6">{{ diary.date }}</el-col>
          <el-col :span="6">{{ diary.weather }}</el-col>
        </el-row>
        <el-row type="flex" class="row-bg" justify="space-between">
          <el-col :span="12">{{ diary.title }}</el-col>
        </el-row>
        <el-row type="flex" class="row-bg" justify="space-between">
          <el-col :span="12">{{ diary.content }}</el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import { getList, createDiary } from "./api";
export default {
  name: "diary",
  data() {
    return {
      lists: null,
      myForm: {
        date: "",
        weather: "",
        title: "",
        content: ""
      },
      options: [
        {
          value: "sunny",
          label: "sunny"
        },
        {
          value: "cloud",
          label: "cloud"
        },
        {
          value: "rainy",
          label: "rainy"
        },
        {
          value: "windy",
          label: "windy"
        },
        {
          value: "snowy",
          label: "snowy"
        }
      ]
    };
  },
  mounted() {
    this.updateList();
  },
  methods: {
    submit() {
      createDiary(this.myForm, res => {
        if (res.result) {
          this.updateList();
        }
      });
    },
    updateList() {
      getList(res => {
        this.lists = res;
      });
    }
  }
};
</script>

<style scoped>
.box {
  padding: 10px;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.5);
}
.row-bg {
  margin-bottom: 20px;
}
</style>
