<template>
<el-container>
  <el-header>
    <nav-menu></nav-menu>
  </el-header>
  <el-container class="container">

      <el-aside width="200px" v-show="flagShowSideMenu">
        <side-menu></side-menu>
      </el-aside>
    <el-main class="content">
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>

</template>

<script>
export default {
  name: 'layout',
  components: {
    navMenu: () => import('./components/navMenu.vue'),
    sideMenu: () => import('./components/sideMenu.vue')
  },
  data () {
    return {
      flagShowSideMenu: false,
      showMenuPage: {
        'home': false,
        'family': true,
        'work': true,
        'diary': true,
        'learn': true,
        'disport': true,
        'about': false
      }
    }
  },
  created () {
    const flag = this.showMenuPage[this.$route.meta.root]
    this.displaySideMenu(flag, flag)
  },
  watch: {
    '$route.meta.root' (to, form) {
      console.log('watch', form, to)
      if (!form) {
        const flag = this.showMenuPage[to]
        this.displaySideMenu(flag, flag)
        return
      }
      const flag1 = this.showMenuPage[form]
      const flag2 = this.showMenuPage[to]
      this.displaySideMenu(flag1, flag2)
    }
  },
  methods: {
    displaySideMenu (form, to) {
      console.log('displaySideMenu', form, to)
      this.flagShowSideMenu = to
    }
  }
}
</script>

<style scoped>
	.container{
		height:calc(100vh - 60px) ;
		width: calc(100vw);
		display: flex;

	}
	.content{
		background-color: #f5f5f5;
		box-sizing: border-box;
		padding: 10px;
	}
</style>
