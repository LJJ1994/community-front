<template xmlns="http://www.w3.org/1999/html">
    <div class="me">
      <router-link to="/me/detail" @click.native="HideFooter">
        <div class="me-top">
          <el-row :gutter="20">
            <el-col :span="6" class="me-top-item">
              <div class="me-avator">
                <img src="../../assets/images/avator.svg" alt="">
              </div>
            </el-col>
            <el-col :span="14" class="me-top-item">
              <div class="me-profile">
                <div v-if="hasLogin" class="me-has-login">
                  <h3 class="me-name">我是皮皮虾233</h3>
                  <p class="me-introduce">测试</p>
                </div>
                <div class="me-need-login" v-else>
                  <span>登录/注册</span>
                </div>
              </div>
            </el-col>
            <el-col :span="4" class="me-top-item">
              <p class="me-icon"> > </p>
            </el-col>
          </el-row>
        </div>
      </router-link>
      <div class="me-middle">
        <el-row :gutter="20" class="me-middle-group">
          <el-col :span="6" class="me-middle-like me-middle-item">
            {{ like }}
          </el-col>
          <el-col :span="6" class="me-middle-fans me-middle-item">
            {{ fans }}
          </el-col>
          <el-col :span="6" class="me-middle-follow me-middle-item">
            {{ follow }}
          </el-col>
          <el-col :span="6" class="me-middle-score me-middle-item">
            {{ score }}
          </el-col>
        </el-row>
      </div>
      <div class="me-bottom">
        <nav class="nav nav-post">
          <router-link to="/me/post">
            <div class="nav-icon">
              <img src="../../assets/images/post.svg" alt="">
            </div>
          </router-link>
        </nav>
        <nav class="nav nav-common">
          <router-link to="/me/common">
            <div class="nav-icon">
              <img src="../../assets/images/me-common.svg" alt="">
            </div>
          </router-link>
        </nav>
        <nav class="nav nav-collect">
          <router-link to="/me/collect">
            <div class="nav-icon">
              <img src="../../assets/images/me-collect.svg" alt="">
            </div>
          </router-link>
        </nav>
        <nav class="nav nav-history">
          <router-link to="/me/history">
            <div class="nav-icon">
              <img src="../../assets/images/history.svg" alt="">
            </div>
          </router-link>
        </nav>
      </div>
      <div class="me-banner">
          <div class="me-banner-wrapper">
            <el-carousel height="60px">
              <el-carousel-item>
                <img src="../../assets/images/banne.jpg" alt="">
              </el-carousel-item>
              <el-carousel-item>
                <img src="../../assets/images/banne.jpg" alt="">
              </el-carousel-item>
              <el-carousel-item>
                <img src="../../assets/images/banne.jpg" alt="">
              </el-carousel-item>
              <el-carousel-item>
                <img src="../../assets/images/banne.jpg" alt="">
              </el-carousel-item>
            </el-carousel>
          </div>
      </div>
      <div class="me-category">
        <div class="me-category-wrapper">
          <el-row class="me-category-item">
            <el-col :span="20">
              <p>创作中心</p>
            </el-col>
            <el-col :span="4">
              <p> > </p>
            </el-col>
          </el-row>
          <el-row class="me-category-item">
            <el-col :span="20">
              <p>意见反馈</p>
            </el-col>
            <el-col :span="4">
              <p> > </p>
            </el-col>
          </el-row>
          <el-row class="me-category-item">
            <el-col :span="20" class="me-category-help">
              <p>帮助</p>
            </el-col>
            <el-col :span="4">
              <p> > </p>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
</template>

<script>
  import MeDetail from './components/meDetail'
export default {
  name: 'Me',
  components : {
    MeDetail,
  },
  data () {
    return {
      like: 0,
      fans: 0,
      follow: 3,
      score: 100,
      hasLogin: true
    }
  },
  methods: {
    HideFooter () {
      this.$store.state.footer.isShow = false
    }
  }
}
</script>

<style scoped>
  .me {
    height: 100%;
    overflow: hidden;
  }
  .me-top{
    height: 60px;
    margin-top: 10px;
  }
  .me-top-item{
    height: 60px;
  }
  .me-avator img {
    width: 50px;
    height: 50px;
    margin: 5px 15px;
  }
  .me-profile {
    margin-top: 5px;
  }
  .me-name {
    font-size: 16px;
    font-weight: bold;
    color: #000;
  }
  .me-need-login {
    text-align: center;
    margin-top: 20px;
    font-size: 16px;
  }
  .me-introduce {
    font-size: 14px;
    color: #9c9c9c;
  }
  .me-icon {
    margin-top: 13px;
  }
  .me-middle {
    margin-top: 40px;
    padding: 0 10px;
  }
  .me-middle-group {
    padding: 0 30px;
  }
  .me-middle-item {
    width: 59px;
    height: 59px;
    text-align: center;
  }
  .me-middle-like::after,
  .me-middle-fans::after,
  .me-middle-follow::after,
  .me-middle-score::after {
    display: inline-block;
    text-align: center;
    width: 40px;
    height: 40px;
  }
  .me-middle-like::after{
    content: '点赞';
  }
  .me-middle-fans::after{
    content: '粉丝';
  }
  .me-middle-follow::after {
    content: '关注';
  }
  .me-middle-score::after{
    content: '积分';
  }
  .me-bottom {
    height: 70px;
    width: 450px;
    border-radius: 1px;
    position: relative;
    overflow: hidden;
  }
  .nav {
    float: left;
    width: 40px;
    height: 40px;
    margin-top: 10px;
    margin-left: 30px;
    text-align: center;
  }
  .nav-post::after {
    display: inline-block;
    font-size: 14px;
    margin-top: 4px;
    content: '帖子';
  }
  .nav-common::after {
    display: inline-block;
    font-size: 14px;
    margin-top: 4px;
    content: '评论';
  }
  .nav-collect::after {
    display: inline-block;
    font-size: 14px;
    margin-top: 4px;
    content: '收藏';
  }
  .nav-history::after {
    display: inline-block;
    font-size: 14px;
    margin-top: 4px;
    content: '记录';
  }
  .me-banner-wrapper{
    margin: 0 15px;
  }
  .me-banner-wrapper img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
  }
  .me-category-wrapper {
    margin-top: 17px;
    margin-left: 10px;
    margin-right: 10px;
  }
  .me-category-item {
    margin-bottom: 10px;
    padding-bottom: 5px;
  }
</style>
