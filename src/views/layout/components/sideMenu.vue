<template>
<component :is="menu">
</component>
</template>

<script>
import 	workMenu from './workMenu.vue'
export	default {
	name: 'sideMenu',
	components:{
		workMenu,
	},
	data() {
		return {
			menu:null
		}
	},
	created(){
		this.refreshPageMenu(this.$route.meta.root)
	},
	methods: {
		refreshPageMenu(root){
			if(root == 'work'){
				this.menu = 'workMenu'
			}			
		}
	},
	watch:{
		'$route.meta.root'(root) {
			this.refreshPageMenu(root)
		},
	}
}
</script>

<style scoped>
	.box{
		width: 100%;
		height: 100%;
		background-color: #000;
	}
</style>
