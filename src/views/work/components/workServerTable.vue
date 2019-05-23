<template>
  <div class="box">
    <el-row :gutter="20">
      <el-col :span="3">过滤</el-col>
      <el-col :span="12">
        <filter-bar
          :list="filterList"
          @remove-filter="removeFilter"
        ></filter-bar>
      </el-col>
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
import filterBar from "./filterBar.vue";
export default {
  name: "workServerTable",
  components: {
    ciTable,
    filterBar
  },
  data() {
    return {
      pageName: "Work",
      customColumns: ["score"],
      loading: false,
      tableData: [],
      filters: [],
      filterList: [],
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
          type: "=",
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
    removeFilter(key) {
      console.log(key);
    },
    showFilter() {
      this.filterList = [];
      for (let item in this.filters) {
        this.filterList.push({
          key: item,
          title: this.getColumnTitle(item),
          type: this.getColumnType(item),
          value: this.getColumnFilter(item, this.filters[item])
        });
      }
    },
    getColumnByField(field) {
      return this.columns.filter(col => col.field == field)[0];
    },
    getColumnTitle(key) {
      return this.getColumnByField(key).title;
    },
    getColumnType(key) {
      return this.getColumnByField(key).type;
    },
    getColumnFilter(key, value) {
      return value.join();
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
