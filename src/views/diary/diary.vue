<template>
	<div class="box">
	</div>
</template>

<script>
import { getList } from './api'
export default {
  name: 'diary',
  data () {
    return {

      
    }
  },
  mounted () {
  	console.log('mounted-diary')
    getList(res => {

      console.log('mounted', res)
    })
  }
}
</script>

<style scoped>
.box{
	padding: 10px;
	box-sizing: border-box;
	height: 100%;
	width: 100%;
	background-color: rgba(255,255,255,0.5);
}
</style>
