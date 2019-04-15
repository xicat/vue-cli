<template>
  <div class="header">
    <div class="logo"></div>
    <div class="nav">
      <router-link
        tag="li"
        :to="route.to"
        :key="route.name"
        v-for="route in routes"
        :class="['router-link', showActive(route.root) ? 'active' : '']"
      >
        <a>{{ $t(route.title) }}</a>
      </router-link>
    </div>
    <div class="bar">
      <span @click="change" class="lang">{{ $t("common.lang") }}</span>
      <span class="logout">{{ $t("common.logout") }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    routes() {
      // 借用  router 的 路由来 组建 NAV
      const path = this.$router.options.routes[1].path;
      return this.$router.options.routes[1].children.map(item => {
        return {
          to: path + "/" + item.path,
          title: item.meta.title,
          root: item.meta.root
        };
      });
    }
  },
  methods: {
    showActive(root) {
      return this.$route.meta.root === root;
    },
    change() {
      if (this.$i18n.locale === "cn") {
        this.$i18n.locale = "en";
      } else {
        this.$i18n.locale = "cn";
      }
    }
  }
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 60px;
  background-color: #545c64;
}
.logo {
  display: inline-block;
  width: 200px;
}
.nav {
  display: inline-flex;
  width: calc(100vw - 400px);
  justify-content: space-between;
}
.router-link {
  height: 58px;
  line-height: 58px;
  padding: 0px 10px;
  text-align: center;
}
.router-link:hover {
  cursor: pointer;
}
.router-link a {
  color: #fff;
  font-size: 18px;
  text-decoration: none;
}
.active {
  border-bottom: 2px solid #1989fa;
}
.active.router-link a {
  color: #1989fa;
}
.bar {
  display: inline-block;
  text-align: right;
  padding-right: 20px;
  float: right;
  height: 60px;
  line-height: 60px;
  position: relative;
  width: 120px;
}
.lang {
  cursor: pointer;
  color: #fff;
  text-align: center;
  height: 26px;
  line-height: 26px;
  width: 26px;
  top: 18px;
  left: 0px;
  position: absolute;
  background-color: #1989fa;
  display: inline-block;
}
.logout {
  top: 0px;
  right: 0px;
  position: absolute;
  width: 80px;
  cursor: pointer;
  color: #1989fa;
  text-align: center;
  display: inline-block;
}
</style>
