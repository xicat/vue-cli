<template>
  <div
    class="table"
    v-loading="loading"
    :element-loading-text="$t('common.loading')"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(255, 255, 255, 0.8)"
    @mouseover="mouseover"
  >
    <el-table
      ref="table"
      :data="showTableData"
      :stripe="stripe"
      :fit="fit"
      :height="height"
      :maxHeight="maxHeight"
      :style="tableStyle"
      :border="border"
      :show-header="showHeader"
      :highlight-current-row="highlightCurrentRow"
      :current-row-key="currentRowKey"
      :row-class-name="rowClassName"
      :row-style="rowStyle"
      :cell-class-name="cellClassName"
      :cell-style="cellStyle"
      :header-row-class-name="headerRowClassName"
      :header-row-style="headerRowStyle"
      :header-cell-class-name="headerCellClassName"
      :header-cell-style="headerCellStyle"
      :row-key="rowKey"
      :default-expand-all="defaultExpandAll"
      :expand-row-keys="expandRowKeys"
      :default-sort="defaultSort"
      :tooltip-effect="tooltipEffect"
      :show-summary="showSummary"
      :sum-text="sumText"
      :summary-method="summaryMethod"
      @select="select"
      @select-all="selectAll"
      @selection-change="selectionChange"
      @cell-mouse-enter="cellMouseEnter"
      @cell-mouse-leave="cellMouseLeave"
      @cell-click="cellClick"
      @cell-dblclick="cellDblclick"
      @row-click="rowClick"
      @row-contextmenu="rowContextmenu"
      @row-dblclick="rowDblclick"
      @header-click="headerClick"
      @sort-change="sortChange"
      @filter-change="filterChange"
      @current-change="currentChange"
      @header-dragend="headerDragend"
      @expand-change="expandChange"
    >
      <template v-for="(column, index) in columns">
        <el-table-column
          v-if="isCustom(column.field)"
          :key="index"
          :prop="column.field"
          :label="column.title"
          :width="column.width"
          :type="column.type"
          :index="column.index"
          :column-key="column.columnKey"
          :min-width="column.minWidth"
          :fixed="column.fixed"
          :render-header="column.renderHeader"
          :sortable="column.sortable"
          :sort-method="column.sortMethod"
          :sort-by="column.sortBy"
          :resizable="column.resizable"
          :formatter="column.Formatter"
          :show-overflow-tooltip="column.showOverflowTooltip"
          :align="column.align"
          :header-align="column.headerAlign"
          :class-name="column.className"
          :label-class-name="column.labelClassName"
          :selectable="column.selectable"
          :reserve-selection="column.reserveSelection"
          :filters="column.filters"
          :filter-placement="column.filterPlacement"
          :filter-multiple="column.filterMultiple"
          :filter-method="column.filterMethod"
          :filtered-value="column.filteredValue"
        >
          <template slot-scope="scope">
            <slot :name="scope.row.property" :row="scope.row" />
          </template>
        </el-table-column>
        <el-table-column
          v-else
          :key="index"
          :prop="column.field"
          :label="column.title"
          :width="column.width"
          :type="column.type"
          :index="column.index"
          :column-key="column.columnKey"
          :min-width="column.minWidth"
          :fixed="column.fixed"
          :render-header="column.renderHeader"
          :sortable="column.sortable"
          :sort-method="column.sortMethod"
          :sort-by="column.sortBy"
          :resizable="column.resizable"
          :formatter="column.Formatter"
          :show-overflow-tooltip="column.showOverflowTooltip"
          :align="column.align"
          :header-align="column.headerAlign"
          :class-name="column.className"
          :label-class-name="column.labelClassName"
          :selectable="column.selectable"
          :reserve-selection="column.reserveSelection"
          :filters="column.filters"
          :filter-placement="column.filterPlacement"
          :filter-multiple="column.filterMultiple"
          :filter-method="column.filterMethod"
          :filtered-value="column.filteredValue"
        >
        </el-table-column>
      </template>
      <template slot="empty">
        <div class="nodata" v-show="!loading">
          {{ $t(emptyText) }}
        </div>
      </template>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="pageSizes"
      :page-size="pageSize"
      :layout="paginationLayout"
      :total="showTotal"
      class="pagination"
    >
    </el-pagination>
  </div>
</template>
<script>
export default {
  name: "ci-table",
  props: {
    customColumns: {
      type: Array,
      default: function() {
        return null;
      }
    },
    // 表格参数
    height: {
      // 高度
      type: [String, Number],
      default: function() {
        return "100%";
      }
    },
    maxHeight: {
      // 最大高度
      type: [String, Number],
      default: function() {
        return null;
      }
    },
    stripe: {
      // 斑马线
      type: Boolean,
      default: function() {
        return true;
      }
    },
    tableStyle: {
      // 样式
      type: String,
      default: function() {
        return "";
      }
    },
    fit: {
      type: Boolean,
      default: function() {
        return true;
      }
    },
    border: {
      type: Boolean,
      default: function() {
        return true;
      }
    },
    showHeader: {
      type: Boolean,
      default: function() {
        return true;
      }
    },
    highlightCurrentRow: {
      type: Boolean,
      default: function() {
        return false;
      }
    },
    currentRowKey: {
      type: [String, Number],
      default: function() {
        return null;
      }
    },
    rowClassName: {
      type: [String, Function],
      default: function() {
        return null;
      }
    },
    rowStyle: {
      type: [Object, Function],
      default: function() {
        return null;
      }
    },
    cellClassName: {
      type: [String, Function],
      default: function() {
        return null;
      }
    },
    cellStyle: {
      type: [Object, Function],
      default: function() {
        return null;
      }
    },
    headerRowClassName: {
      type: [String, Function],
      default: function() {
        return null;
      }
    },
    headerRowStyle: {
      type: [Object, Function],
      default: function() {
        return null;
      }
    },
    headerCellClassName: {
      type: [String, Function],
      default: function() {
        return null;
      }
    },
    headerCellStyle: {
      type: [Object, Function],
      default: function() {
        return null;
      }
    },
    rowKey: {
      type: [String, Function],
      default: function() {
        return null;
      }
    },
    emptyText: {
      type: String,
      default: function() {
        return "common.noData";
      }
    },
    defaultExpandAll: {
      type: Boolean,
      default: function() {
        return false;
      }
    },
    expandRowKeys: {
      type: Array,
      default: function() {
        return null;
      }
    },
    defaultSort: {
      type: Object,
      default: function() {
        return {
          // descending
          order: "ascending"
        };
      }
    },
    tooltipEffect: {
      type: String,
      default: function() {
        return "dark"; // light
      }
    },
    showSummary: {
      type: Boolean,
      default: function() {
        return false;
      }
    },
    sumText: {
      type: String,
      default: function() {
        return "合计";
      }
    },
    summaryMethod: {
      type: Function,
      default: function() {
        // Function({ columns, data })
        return null;
      }
    },
    spanMethod: {
      // Function({ row, column, rowIndex, columnIndex })
      type: Function,
      default: function() {
        return null;
      }
    },
    loading: {
      // 正在加载
      type: Boolean,
      default: function() {
        return false;
      }
    },
    tableData: {
      // 返回数据
      type: [Array, Object],
      default: function() {
        return null;
      }
    },
    columns: {
      // 列表
      type: Array,
      default: function() {
        return null;
      }
    },
    initPageSize: {
      // 一页条数
      type: Number,
      default: function() {
        return 10;
      }
    },
    initCurrentPage: {
      // 默认当前页
      type: Number,
      default: function() {
        return 1;
      }
    },
    pageSizes: {
      // 页面条数列表
      type: Array,
      default: function() {
        return [10, 20, 50, 100];
      }
    },
    paginationLayout: {
      type: String,
      default: function() {
        return "total, sizes, prev, pager, next, jumper";
      }
    },
    total: {
      type: String,
      default: function() {
        return "total";
      }
    },
    entry: {
      type: String,
      default: function() {
        return "entry";
      }
    },
    tdFixTitle: {
      type: Boolean,
      default: function() {
        return true;
      }
    }
  },
  data() {
    return {
      pageSize: this.initPageSize,
      currentPage: this.initCurrentPage
    };
  },
  computed: {
    showTableData() {
      if (this.pagination == "client") {
        return this.tableData.slice(
          (this.currentPage - 1) * this.pageSize,
          this.currentPage * this.pageSize
        );
      } else {
        return this.tableData[this.entry];
      }
    },
    showTotal() {
      if (this.pagination == "client") {
        return this.tableData.length;
      } else {
        return this.tableData[this.total];
      }
    },
    pagination() {
      // 分析数据 判断前后台分页
      return this.tableData instanceof Array ? "client" : "server";
    }
  },
  updated() {},
  methods: {
    isCustom(col) {
      if (!this.customColumns) {
        return false;
      }
      return this.customColumns.indexof(col) > -1;
    },
    handleSizeChange(pageSize) {
      this.pageSize = pageSize;
      if (this.pagination == "client") {
        return;
      }
      this.$emit("page-change", {
        pageSize: this.pageSize,
        currentPage: this.currentPage
      });
    },
    handleCurrentChange(currentPage) {
      this.currentPage = currentPage;
      if (this.pagination == "client") {
        return;
      }
      this.$emit("page-change", {
        pageSize: this.pageSize,
        currentPage: this.currentPage
      });
    },
    select(selection, row) {
      // 当用户手动勾选数据行的 Checkbox 时触发的事件
      this.$emit("select", selection, row);
    },
    selectAll(selection) {
      // 当用户手动勾选全选 Checkbox 时触发的事件
      this.$emit("select", selection);
    },
    selectionChange(selection) {
      // 当选择项发生变化时会触发该事件
      this.$emit("select", selection);
    },
    cellMouseEnter(row, column, cell, event) {
      // 当单元格 hover 进入时会触发该事件
      this.$emit("cell-mouse-enter", row, column, cell, event);
    },
    cellMouseLeave(row, column, cell, event) {
      // 当单元格 hover 退出时会触发该事件
      this.$emit("cell-mouse-leave", row, column, cell, event);
    },
    cellClick(row, column, cell, event) {
      // 当某个单元格被点击时会触发该事件
      this.$emit("cell-click", row, column, cell, event);
    },
    cellDblclick(row, column, cell, event) {
      // 当某个单元格被双击击时会触发该事件
      this.$emit("cell-dblclick", row, column, cell, event);
    },
    rowClick(row, event, column) {
      // 当某一行被点击时会触发该事件
      this.$emit("row-click", row, event, column);
    },
    rowContextmenu(row, event) {
      // 当某一行被鼠标右键点击时会触发该事件
      this.$emit("row-contextmenu", row, event);
    },
    rowDblclick(row, event) {
      // 当某一行被双击时会触发该事件
      this.$emit("row-dblclick", row, event);
    },
    headerClick(column, event) {
      // 当某一列的表头被点击时会触发该事件
      this.$emit("header-click", column, event);
    },
    sortChange(column, prop, order) {
      // 当表格的排序条件发生变化的时候会触发该事件
      this.currentPage = 1;
      if (this.pagination == "client") {
        return;
      }
      this.$emit("sort-change", column, prop, order);
    },
    filterChange(filters) {
      // 当表格的筛选条件发生变化的时候会触发该事件，参数的值是一个对象，对象的 key 是 column 的 columnKey，对应的 value 为用户选择的筛选条件的数组。
      this.currentPage = 1;
      if (this.pagination == "client") {
        return;
      }
      this.$emit("filter-change", filters);
    },
    currentChange(currentRow, oldCurrentRow) {
      // 当表格的当前行发生变化的时候会触发该事件，如果要高亮当前行，请打开表格的 highlight-current-row 属性
      this.$emit("current-change", currentRow, oldCurrentRow);
    },
    headerDragend(newWidth, oldWidth, column, event) {
      // 当拖动表头改变了列的宽度的时候会触发该事件
      this.$emit("header-dragend", newWidth, oldWidth, column, event);
    },
    expandChange(row, expandedRows) {
      // 当用户对某一行展开或者关闭的时候会触发该事件
      this.$emit("expand-change", row, expandedRows);
    },
    clearSelection(selection) {
      // 用于多选表格，清空用户的选择，当使用 reserve-selection 功能的时候，可能会需要使用此方法
      this.$refs.table.clearSelection(selection);
    },
    toggleRowSelection(row, selected) {
      // 用于多选表格，切换某一行的选中状态，如果使用了第二个参数，则是设置这一行选中与否（selected 为 true 则选中）
      this.$refs.table.toggleRowSelection(row, selected);
    },
    toggleRowExpansion(row, expanded) {
      // 用于可展开表格，切换某一行的展开状态，如果使用了第二个参数，则是设置这一行展开与否（expanded 为 true 则展开）
      this.$refs.table.toggleRowExpansion(row, expanded);
    },
    setCurrentRow(row) {
      // 用于单选表格，设定某一行为选中行，如果调用时不加参数，则会取消目前高亮行的选中状态。
      this.$refs.table.setCurrentRow(row);
    },
    clearSort() {
      // 用于清空排序条件，数据会恢复成未排序的状态
      this.$refs.table.clearSort();
    },
    clearFilter() {
      // 用于清空过滤条件，数据会恢复成未过滤的状态
      this.$refs.table.clearFilter();
    },
    doLayout() {
      // 对 Table 进行重新布局。当 Table 或其祖先元素由隐藏切换为显示时，可能需要调用此方法
      this.$refs.table.doLayout();
    },
    mouseover(ev) {
      const cell = ev.target;
      if (cell.tagName !== "TD" && cell.tagName !== "TH") {
        return;
      }
      if (!cell.children) {
        return;
      }
      if (this.tdFixTitle) {
        if (cell.clientWidth < cell.children[0].scrollWidth) {
          cell.title = cell.children[0].innerText;
        } else {
          cell.title = "";
        }
      }
    }
  }
};
</script>

<style scoped>
.table {
  height: calc(100%);
  box-sizing: border-box;
  padding-bottom: 40px;
  width: 100%;
  position: relative;
  background-color: #fff;
}
.pagination {
  position: absolute;
  width: calc(100% - 10px);
  left: 0;
  bottom: 0px;
}
</style>
