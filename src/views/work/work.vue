<template>
<div>{{pageName}}
	<ci-table
		:tableData="tableData"
		:columns="columns"
		:loading="loading"
		></ci-table>
</div>
</template>

<script>
import { getTableData }	from './api'
import ciTable from '@c/ciTable/ciTable.vue'	
export default {
  name: 'work',
  components:{
  	ciTable
  },
  data () {
    return {
      pageName: 'Work',
      loading:false,
      tableData:[]
    }
  },
	computed:{
		columns() {
			return [{
				type: 'selection',
				width: '55'
			},
			{
	      field: "date",
	      title: "日期",
	      width: "120"
			}, 
			{
	      field: "name",
	      title: "姓名",
	      width: "120"	
			},
			{
	      field: "phone",
	      title: "手机",
	      width: "120"	
			},
			{
	      field: "score",
	      title: "成绩",
	      width: "220"	
			},
			{
	      field: "age",
	      title: "年纪",
	      width: "220"	
			},
			{
	      field: "gender",
	      title: "性别",
	      width: "120"	
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
 		getTableData() {
 			this.loading = false;
 			getTableData(null,res=>{
 				this.tableData  = res;
 				this.loading = true;
 			})
 		}
 	}
}
</script>

<style>
</style>
