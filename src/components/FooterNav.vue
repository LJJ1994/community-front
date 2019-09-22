<template>
  <footer class="footer" :class="{'go-back': !showNav}" v-show="$store.state.footer.isShow">
    <section class="footer mint-1px-t" v-show="showNav">
      <nav class="nav nav-home" :class="{'cur-page': route === '/'}">
        <router-link to="/">
          <div class="nav-icon">
            <img v-show="route !== '/'" src="../assets/images/home1.svg" alt="">
            <img v-show="route === '/'" src="../assets/images/home1.svg" alt="">
          </div>
        </router-link>
      </nav>
      <nav class="nav nav-find" :class="{'cur-page': route === '/find'}">
        <router-link to="/find">
          <div class="nav-icon">
            <img v-show="route !== '/find'" src="../assets/images/find.svg" alt="">
            <img v-show="route === '/find'" src="../assets/images/find.svg" alt="">
          </div>
        </router-link>
      </nav>
      <nav class="nav nav-publish" :class="{'cur-page': route === '/publish'}">
        <router-link to="/publish">
          <div class="nav-icon">
            <img v-show="route !== '/publish'" src="../assets/images/publish.svg" alt="">
            <img v-show="route === '/publish'" src="../assets/images/publish.svg" alt="">
          </div>
        </router-link>
      </nav>
      <nav class="nav nav-message" :class="{'cur-page': route === '/message'}">
        <router-link to="/message">
          <div class="nav-icon">
            <img v-show="route !== '/message'" src="../assets/images/message.svg" alt="">
            <img v-show="route === '/message'" src="../assets/images/message.svg" alt="">
          </div>
        </router-link>
      </nav>
      <nav class="nav nav-me" :class="{'cur-page': route === '/me'}">
        <router-link to="/me">
          <div class="nav-icon">
            <img v-show="route !== '/me'" src="../assets/images/me.svg" alt="">
            <img v-show="route === '/me'" src="../assets/images/me.svg" alt="">
          </div>
        </router-link>
      </nav>
    </section>
    <section v-show="!showNav" @click="goBack" style="width: 100%">
      <p class="back"> < </p>
    </section>
  </footer>
</template>
<script>
export default {
  name: 'FooterNav',
  data () {
    return {
      // showFooter: this.$store.state.footer.isShow
    }
  },
  props: {
    'showNav': {
      type: Boolean,
      default: true
    }
  },
  methods: {
    goBack () {
      this.$router.back()
    }
  },
  computed: {
    route () {
      return this.$route.path
    }
  }
}
</script>
<style>
  .footer {
    background-color: #fff;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 54px;
    display: -webkit-box;
    padding-top: 7px;
    box-sizing: border-box;
    z-index: 10000;
    border: none;
  }

  .footer nav {
    -webkit-box-flex: 1;
    text-align: center;
    color: #8a869e;
  }

  .footer .cur-page.nav {
    color: rgba(255, 130, 152, 0.97);
  }

  .nav-icon {
    width: 23px;
    height: 23px;
    margin: 0 auto;
  }

  .nav-icon img {
    width: 100%;
    height: 100%;
  }

  .nav-home::after,
  .nav-find::after,
  .nav-publish::after,
  .nav-message::after,
  .nav-me::after {
    width: 30px;
    padding-top: 2px;
    text-align: center;
    display: inline-block;
    font-size: 12px;
  }

  .nav-home::after {
    content: "首页";
  }

  .nav-find::after {
    content: "发现";
  }

  .nav-publish::after {
    content: "发布";
  }

  .nav-message::after {
    content: "消息";
  }

  .nav-me::after {
    content: "我的";
  }

  .go-back {
    background: #ff2c43;
  }

  .back {
    font-size: 30px;
    color: #fff;
    padding-left: 30px;
    margin-top: -6px;
    transform: scaleY(1.5);
  }

</style>
