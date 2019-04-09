<template>
	<div class="box">
		<el-row type="flex" class="row-bg" justify="space-around">
		  <el-col :span="11"><div class="content "></div></el-col>
		  <el-col :span="11"><div class="content "></div></el-col>
		</el-row>
		<el-row  type="flex" class="row-bg"  justify="space-around">
		  <el-col :span="11"><div class="content "></div></el-col>
		  <el-col :span="11"><div class="content "></div></el-col>
		</el-row>
	</div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      pageName: 'Home'
    }
  }
}
</script>

<style scoped>
 .box{


 }
 .row-bg{margin-top: 20px;}	
.content{
	min-height: 200px;
	background-color: rgba(0,0,0,0.2);
	border-radius: 4px;
	
}
</style>
