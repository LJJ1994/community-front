<template>
  <div class="post-detail">
    <div class="post-detail-header">
      <Row>
        <Col span="4">
          <img src="../../assets/images/kuohao.svg" alt="" @click="goBack">
        </Col>
        <Col span="20">
          <p class="post-title" v-show="!showName">帖子详情</p>
          <div class="avator-name" v-show="showName">
            <img src="../../assets/images/avator.svg" alt="">
            <div class="post-user-name">
              <span>{{ userName }}</span>
              <p>{{ publishTime }}</p>
            </div>
            <span class="post-header-followed-btn" v-show="isFollow">已关注</span>
            <span class="post-header-nofollow-btn" v-show="!isFollow">关注</span>
          </div>
        </Col>
      </Row>
    </div>
    <div class="post-detail-wrapper">
      <div class="post-wrapper-header">
        <Row>
          <Col span="4">
            <img src="../../assets/images/avator.svg" alt="" @click="goBack">
          </Col>
          <Col span="16">
            <p class="post-header-username">{{ userName }}</p>
            <span class="post-publish-time">{{ publishTime }}</span>
          </Col>
          <Col span="4">
            <span class="post-followed-btn" v-show="isFollow">已关注</span>
            <span class="post-nofollow-btn" v-show="!isFollow">关注</span>
          </Col>
        </Row>
      </div>
      <div class="post-content-wrapper">
        <p class="post-content-main">
          这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容
        </p>
        <span class="post-content-img"><img src="../../assets/images/pangxie.jpeg" alt=""></span>
      </div>
      <span class="post-content-browse">{{ browses }}次阅读</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'postCommon',
    data () {
      return {
        publishTime: '一小时前',
        showName: false,
        userName: '小姐姐收割机',
        isFollow: true,
        browses: 1000
      }
    },
    methods: {
      HideFooter () {
        this.$store.state.footer.isShow = false
      },
      goBack () {
        this.$router.back()
        this.$store.state.footer.isShow = true
      },
      handleScroll () {
        const top = document.documentElement.scrollTop
        if (top > 40) {
          this.showName = true
        } else {
          this.showName = false
        }
      }
    },
    created () {
      this.HideFooter()
      window.addEventListener('scroll', this.handleScroll)
    },
  }
</script>

<style scoped>
  .post-detail {
    height: 100%;
  }
  .post-detail-header{
    z-index: 999;
    background: #ffffff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 40px;
    width: 100%;
  }
  .post-detail-header img {
    height: 30px;
    width: 30px;
    margin-top: 3px;
    margin-left: 4px;
  }
  .post-title {
    font-size: 14px;
    font-weight: bold;
    margin-top: 7px;
    margin-left: 85px;
  }
  .avator-name {
    margin-top: 4px;
    margin-left: -20px;
    position: relative;
    overflow: hidden;
  }
  .avator-name img {
    float: left;
    width: 25px;
    height: 25px;
  }
  .post-user-name {
    float: left;
    font-size: 10px;
    font-weight: bold;
    margin-left: 10px;
  }
  .post-user-name span {
    display: block;
    font-size: 12px;
    font-weight: bold;
  }
  .post-user-name p {
    font-size: 9px;
    color: #a5a1a1;
    padding: 0;
  }
  .post-header-nofollow-btn {
    display: block;
    float: right;
    margin-right: 20px;
    padding: 2px 8px;
    border: 1px solid #ff4b69;
    color: #ffffff;
    background: #ff4b69;
    margin-top: 4px;
    font-size: 13px;
    border-radius: 5px;
  }
  .post-header-followed-btn {
    display: block;
    float: right;
    margin-right: 20px;
    padding: 2px 8px;
    border: 1px solid #eeeeee;
    color: #807070;
    background: #ffffff;
    margin-top: 4px;
    font-size: 13px;
    border-radius: 5px;
  }
  .post-detail-wrapper {
    border-bottom: 1px solid #d9d9d9;
    margin-top: 40px;
    height: 100%;
    /*background: #ff4b69;*/
  }
  .post-wrapper-header img{
    width: 30px;
    height: 30px;
    margin-top: 5px;
    margin-left: 5px;
  }
  .post-header-username {
    margin-top: 4px;
    font-size: 13px;
    font-weight: bold;
  }
  .post-publish-time {
    color: #d9d9d9;
    font-size: 10px;
  }
  .post-followed-btn {
    display: block;
    margin-right: 10px;
    padding: 0;
    border: 1px solid #eeeeee;
    color: #807070;
    background: #ffffff;
    margin-top: 7px;
    font-size: 13px;
    border-radius: 5px;
  }
  .post-nofollow-btn {
    display: block;
    margin-right: 10px;
    padding-left: 5px;
    border: 1px solid #ff4b69;
    color: #ffffff;
    background: #ff4b69;
    margin-top: 7px;
    font-size: 13px;
    border-radius: 5px;
  }
  .post-content-main {
    margin: 5px 10px;
  }
  .post-content-img {
    display: block;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 10px;
  }
  .post-content-browse {
    display: block;
    margin-left: 10px;
    margin-top: 10px;
    font-size: 12px;
    color: #929292;
    margin-bottom: 10px;
  }
</style>

