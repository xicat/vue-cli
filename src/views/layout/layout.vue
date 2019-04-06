<template>
	<div class="container">
		<nav-menu></nav-menu>
		<section>
			<side-menu></side-menu>
			<div class="content">
				<router-view></router-view>
			</div>
		</section>
	</div>
</template>

<script>
export default {
  name: 'layout',
  components: {
    navMenu: () => import('./components/navMenu.vue'),
    sideMenu: () => import('./components/sideMenu.vue')
  }
}
</script>

<style scoped>
	section{
		height:calc(100vh - 60px) ;
		width: calc(100vw);
		display: flex;

	}
	.content{
		width: calc(100% - 200px);
		background-color: #f5f5f5;
	}
</style>
