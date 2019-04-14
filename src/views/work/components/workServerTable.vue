<template>
	<ci-table
		:tableData = "tableData"
		:columns = "columns"
		:loading = "loading"
		:rowClassName = "rowClassName"		
		@page-change = "pageChange"
		@sort-change = "sortChange"
		@filter-change = "filterChange"
		></ci-table>

</template>

<script>
import { getTableData }	from '../api'
import ciTable from '@c/ciTable/ciTable.vue'	
export default {
  name: 'workServerTable',
  components:{
  	ciTable
  },
  data () {
    return {
      pageName: 'Work',
      loading:false,
      tableData:[],
      filters:null,
      order:null
    }
  },
	computed:{
		columns() {
			return [{
				type: 'selection',
				width: '55'
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
	      width: "200",
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
	      sortable: 'custom',
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
	      filters:[{ text: 'girl', value: 'girl' }, { text: 'boy', value: 'boy' }],
      	filterMethod:function(value, row){
      		return row.gender === value
      	}
	      
			},		
			{
	      field: "address",
	      title: "地址",
	      width: "240"			      
			}]
		}
	},
	mounted() {
		this.getTableData() 
	},
 	methods: {
 		getTableData(pageSize=10,currentPage=1) {
			let order = this.order;
			let filters = JSON.stringify(this.filters);
			this.loading = true;
 			getTableData({pageSize, currentPage,order,filters},res=>{
 				this.tableData  = res;
 				this.loading = false;
 			})
 		},
 		pageChange(opt){
 			this.getTableData(opt.pageSize, opt.currentPage)
 		},
 		rowClassName({row, rowIndex}) {
 			if(row.score <60){
 				return 'no-pass'
 			}
 		},
 		sortChange(order) {
			this.order=order;
			this.getTableData() 
			
 		},
 		filterChange(filters) {
			this.filters = filters;
			this.getTableData() 
 		}
 	}
}
</script>

<style>
</style>
