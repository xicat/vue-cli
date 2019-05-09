<template>
  <div class="box">
    <el-row :gutter="20">
      <el-col :span="4">过滤</el-col>
    </el-row>
    <div class="table-box">
      <ci-table
        :tableData="tableData"
        :columns="columns"
        :loading="loading"
        :customColumns="customColumns"
        @page-change="pageChange"
        @sort-change="sortChange"
        @filter-change="filterChange"
      >
        <template slot="score" slot-scope="scope">
          <span :style="showNoPass(scope.row)">{{ scope.row.score }}</span>
        </template>
      </ci-table>
    </div>
  </div>
</template>

<script>
import { getTableData } from "../api";
import ciTable from "@c/ciTable/ciTable.vue";
export default {
  name: "workServerTable",
  components: {
    ciTable
  },
  data() {
    return {
      pageName: "Work",
      customColumns: ["score"],
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
          sortable: "custom"
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
          width: "240"
        }
      ];
    }
  },
  mounted() {
    this.getTableData();
  },
  methods: {
    getTableData(pageSize = 10, currentPage = 1) {
      const order = this.order;
      const filters = JSON.stringify(this.filters);
      this.loading = true;
      getTableData({ pageSize, currentPage, order, filters }, res => {
        this.tableData = res;
        this.loading = false;
      });
    },
    pageChange(opt) {
      this.getTableData(opt.pageSize, opt.currentPage);
    },
    rowClassName({ row }) {
      if (row.score < 60) {
        return "no-pass";
      }
    },
    sortChange(prop, order) {
      this.order = { prop, order };
      this.getTableData();
    },
    filterChange(filters) {
      this.filters = filters;
      this.showFilter();
      this.getTableData();
    },
    showFilter() {
      console.log(this.filters);
    },
    showNoPass(row) {
      if (row.score < 60) {
        return {
          color: "red"
        };
      }
      return null;
    }
  }
};
</script>

<style scoped>
.box {
  width: 100%;
  height: 100%;
}
.table-box {
  width: 100%;
  height: calc(100% - 40px);
}
.el-row {
  height: 40px;
  line-height: 40px;
}
</style>
