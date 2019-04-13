<template>
	<div class="table">
	  <el-table
	    :data="showTableData"
	    stripe
	    style="width: 100%">
	    <template  v-for="(column,index) in columns" >
	    	<el-table-column  v-if="column.scope"
		      :prop="column.field"
		      :label="column.title"
		      :width="column.width"
		      :type="column.type"	    		
	    	>
		      <template slot-scope="scope">
					`column.scope`
		      </template>
	    	</el-table-column>
	    	<el-table-column v-else
		      :prop="column.field"
		      :label="column.title"
		      :width="column.width"
		      :type="column.type"
	    	>
	    	</el-table-column>
	    </template>
	  </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="pageSizes"
      :page-size="pageSize"
      :layout="paginationLayout"
      :total="showTotal">
    </el-pagination>
	</div>
</template>
<script>
export default {
  name: 'ci-table',
  props:{
  	loading: {
  		type: Boolean,
  		default: function() {
  			return false
  		}
  	},
  	tableData: {
  		type:Array,
  		default: function() {
  			return null
  		}  		
  	},
  	columns: {
  		type:Array,
  		default: function() {
  			return null
  		}
  	},
  	initPageSize: {
  		type:Number,
  		default: function() {
  			return 10
  		}  		
  	},
  	initCurrentPage: {
  		type:Number,
  		default: function() {
  			return 1
  		}  		
  	},
  	pageSizes: {
  		type:Array,
  		default: function() {
  			return [10, 20, 50, 100]
  		}
  	},
  	paginationLayout: {
  		type:String,
  		default: function() {
  			return "total, sizes, prev, pager, next, jumper"
  		}  		
  	},
  	total: {
  		type: String,
  		default: function() {
  			return 'total'
  		}
  	},
  	entry: {
  		type: String,
  		default: function() {
  			return 'entry'
  		}
  	},
  },
  data() {
    return {
    		pageSize:this.initPageSize,
    		currentPage:this.initCurrentPage,
    }
  },
  computed:{
  	showTableData() {
  		if(this.pagination == 'client'){
  			return this.tableData.slice((this.currentPage-1)*this.pageSize, this.currentPage*this.pageSize)
  		}else {
  			return this.tableData[this.total]
  		}
  	},
  	showTotal() {
  		if(this.pagination == 'client'){
  			return this.tableData.length
  		}else {
  			return this.tableData[this.entry]
  		}
  	},
  	pagination() { //分析数据 判断前后台分页
  		return  (this.tableData instanceof Array)?'client':'server'	
  	}
  },
  methods:{
  	handleSizeChange(pageSize) {
  		this.pageSize = pageSize ;
  		this.$emit('page-change',{
  			pageSize: this.pageSize,
  			currentPage: this.currentPage
  		})
  	},
  	handleCurrentChange(currentPage) {
  		this.currentPage = currentPage ;
  		this.$emit('page-change',{
  			pageSize: this.pageSize,
  			currentPage: this.currentPage
  		})
  	}
  }
}
</script>

<style>
</style>