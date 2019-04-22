<template>
  <my-table :data="tableData" style="width: 100%">
    <my-table-column prop="date" label="日期" width="180"> </my-table-column>
    <my-table-column prop="name" label="姓名" width="180"> </my-table-column>
    <my-table-column
      prop="address"
      label="地址"
      :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
    >
    </my-table-column>
  </my-table>
</template>

<script>
import MyTable from "@/libs/table/table.vue";
import MyTableColumn from "@/libs/table/table-column.js";
export default {
  name: "mTable",
  components: {
    MyTable,
    MyTableColumn
  },
  data() {
    return {
      pageName: "mTable",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  }
};
</script>

<style></style>
