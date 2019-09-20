<template>
  <div id="app" :style="{height: '100%'}">
    <div class="main" :style="{height: '100%'}">
      <router-view></router-view>
    </div>
    <footer-nav></footer-nav>
  </div>
</template>

<script>
import FooterNav from '@/components/FooterNav'
export default {
  name: 'App',
  data () {
    return {
      showNav: true
    }
  },
  components: {
    FooterNav
  },
  methods: {
    routeChange () {
      let path = this.$route.path
      if (path === '/' || path === '/find' || path === '/publish' || path === '/message' || path === '/me') {
        this.showNav = true
      } else {
        this.showNav = false
      }
    }
  },
  created () {
    this.routeChange()
  },
  mounted () {
    window.setTimeout(() => {
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }, 300)
  }
}
</script>

<style>
/*#app {*/
/*  font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*  margin-top: 60px;*/
/*}*/
</style>
