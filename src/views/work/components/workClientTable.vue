<template>
  <ci-table
    :tableData="tableData"
    :columns="columns"
    :loading="loading"
    @filter-change="filterChange"
  ></ci-table>
</template>

<script>
import { getTableData } from "../api";
import ciTable from "@c/ciTable/ciTable.vue";
export default {
  name: "workClientTable",
  components: {
    ciTable
  },
  data() {
    return {
      pageName: "Work",
      loading: false,
      tableData: [],
      filters: null,
      order: null
    };
  },
  computed: {
    columns() {
      return [
        {
          type: "selection",
          width: "55"
        },
        {
          field: "cname",
          title: "姓名",
          width: "120",
          fixed: true
        },
        {
          field: "name",
          title: "英文名",
          width: "200"
        },
        {
          field: "date",
          title: "日期",
          width: "150"
        },
        {
          field: "phone",
          title: "手机",
          width: "120"
        },
        {
          field: "score",
          title: "成绩",
          width: "220",
          sortable: true,
          filterType: "text",
          columnKey: "score",
          filterMethod: function(value, row) {
            return row.score >= value;
          }
        },
        {
          field: "age",
          title: "年纪",
          width: "220"
        },
        {
          field: "gender",
          title: "性别",
          width: "120",
          columnKey: "gender",
          filters: [
            { text: "girl", value: "girl" },
            { text: "boy", value: "boy" }
          ],
          filterMethod: function(value, row) {
            return row.gender === value;
          }
        },
        {
          field: "address",
          title: "地址",
          width: "240",
          filterType: "text",
          columnKey: "address",
          filterMethod: function(value, row) {
            return row.address.indexOf(value) > -1;
          }
        }
      ];
    }
  },
  mounted() {
    this.getTableData();
  },
  methods: {
    getTableData() {
      this.loading = true;
      getTableData(null, res => {
        this.tableData = res;
        this.loading = false;
      });
    }
  }
};
</script>

<style scoped></style>
