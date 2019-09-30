<template>
  <div id="app" :style="{height: '100%'}">
    <div class="main" :style="{height: '100%'}">
<!--      <transition name="fade" enter-active-class="animated slideInDown"-->
<!--                  leave-active-class="animated slideInUp"-->
<!--                  :duration="100">-->
<!--        <router-view></router-view>-->
<!--      </transition>-->
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
      route: this.$route.path === '/publish'
    }
  },
  components: {
    FooterNav
  },
  watch: {
    '$route': function () {
      this.routeChange()
    }
  },
  methods: {
    routeChange () {
      let path = this.$route.path
      if (path === '/' || path === '/me' || path === '/find' || path === '/message') {
        this.$store.state.footer.isShow = true
      } else {
        this.$store.state.footer.isShow = false
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
