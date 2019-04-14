<template>
<component  :is="page">
</component>

</template>
<script>
import workClientTable  from './components/workClientTable.vue';
import workServerTable  from './components/workServerTable.vue';
import eChart from './components/echart.vue';
import { mapGetters } from 'vuex'
export default {
  name: 'work',
  components:{
  	workClientTable,
  	workServerTable,
  	eChart
  },
	data() {
		return {
			page: 'workClientTable'
		}
	},
	computed:{
		...mapGetters({
  		workPage:'work/page'
  	}),
	},
	watch:{
		'workPage'(page) {
			this.page = page;
		},
	}	
}
</script>

<style>
</style>
