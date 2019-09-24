<template>
    <div class="me-history">
      <div class="me-history-header">
        <span @click="goBack"><img src="../../../assets/images/kuohao.svg" alt=""></span>
        <p>我看过的</p>
      </div>
      <div class="me-history-date">
        <span class="me-history-today" v-show="isToday">{{ today }}</span>
        <span class="me-history-other" v-show="!isToday">{{ otherDay }}</span>
      </div>
      <section class="post-list">
        <ul class="post-wrapper">
          <li class="post-item">
            <div class="item-top">
              <a href=""><img src="../../../assets/images/avator.svg" alt=""></a>
              <div class="item-top-middle">
                <span>淘票票</span>
                <div class="item-time-user">
                  <span class="time">2小时前</span>
                  <span class="user">上海影视文化有限公司</span>
                </div>
              </div>
              <span class="title-icon"> > </span>
            </div>
            <div class="item-content">
              <h4>《丑娃娃国庆欢乐上线》</h4>
              <div class="item-content-video">
                该片讲述了丑娃娃们探索未知世界寻找真正自我的冒险之旅的故事。生活在丑娃镇上的丑娃娃们前往一个叫完美学院的地方探险，那里的娃娃们都精致漂亮，会在毕业前接受训练，然后被送到真实世界里成为孩子们心爱的玩具。小希要和小伙伴们在那里接受训练变身完美娃娃，这对于他们来说并不容易。小希能否完成蜕变，找到属于自己的主人，故事还在继续展开。
              </div>
            </div>
            <div class="item-bottom">
              <ul class="item-bottom-list">
                <li class="item-bottom-like">
                  <img src="../../../assets/images/like.svg" alt="">   2
                </li>
                <li class="item-bottom-unlike">
                  <img src="../../../assets/images/unlike.svg" alt=""> 踩</li>
                <li class="item-bottom-comment">
                  <img src="../../../assets/images/commen.svg" alt=""> 评论</li>
                <li class="item-bottom-share">
                  <img src="../../../assets/images/share.svg" alt=""> 分享</li>
              </ul>
            </div>
          </li>
          <li class="post-item">
            <div class="item-top">
              <a href=""><img src="../../../assets/images/avator.svg" alt=""></a>
              <div class="item-top-middle">
                <span>淘票票</span>
                <div class="item-time-user">
                  <span class="time">2小时前</span>
                  <span class="user">上海影视文化有限公司</span>
                </div>
              </div>
              <span class="title-icon"> > </span>
            </div>
            <div class="item-content">
              <h4>《丑娃娃国庆欢乐上线》</h4>
              <div class="item-content-video">
                该片讲述了丑娃娃们探索未知世界寻找真正自我的冒险之旅的故事.
                我服了
              </div>
            </div>
            <div class="item-bottom">
              <ul class="item-bottom-list">
                <li class="item-bottom-like">
                  <img src="../../../assets/images/like.svg" alt="">   2
                </li>
                <li class="item-bottom-unlike">
                  <img src="../../../assets/images/unlike.svg" alt=""> 踩</li>
                <li class="item-bottom-comment">
                  <img src="../../../assets/images/commen.svg" alt=""> 评论</li>
                <li class="item-bottom-share">
                  <img src="../../../assets/images/share.svg" alt=""> 分享</li>
              </ul>
            </div>
          </li>
          <li class="post-item">
            <div class="item-top">
              <a href=""><img src="../../../assets/images/avator.svg" alt=""></a>
              <div class="item-top-middle">
                <span>淘票票</span>
                <div class="item-time-user">
                  <span class="time">2小时前</span>
                  <span class="user">上海影视文化有限公司</span>
                </div>
              </div>
              <span class="title-icon"> > </span>
            </div>
            <div class="item-content">
              <h4>《丑娃娃国庆欢乐上线》</h4>
              <div class="item-content-video">
                该片讲述了丑娃娃们探索未知世界寻找真正自我的冒险之旅的故事.
                我服了
              </div>
            </div>
            <div class="item-bottom">
              <ul class="item-bottom-list">
                <li class="item-bottom-like">
                  <img src="../../../assets/images/like.svg" alt="">   2
                </li>
                <li class="item-bottom-unlike">
                  <img src="../../../assets/images/unlike.svg" alt=""> 踩</li>
                <li class="item-bottom-comment">
                  <img src="../../../assets/images/commen.svg" alt=""> 评论</li>
                <li class="item-bottom-share">
                  <img src="../../../assets/images/share.svg" alt=""> 分享</li>
              </ul>
            </div>
          </li>
          <li class="post-item">
            <div class="item-top">
              <a href=""><img src="../../../assets/images/avator.svg" alt=""></a>
              <div class="item-top-middle">
                <span>淘票票</span>
                <div class="item-time-user">
                  <span class="time">2小时前</span>
                  <span class="user">上海影视文化有限公司</span>
                </div>
              </div>
              <span class="title-icon"> > </span>
            </div>
            <div class="item-content">
              <h4>《丑娃娃国庆欢乐上线》</h4>
              <div class="item-content-video">
                该片讲述了丑娃娃们探索未知世界寻找真正自我的冒险之旅的故事.
                我服了
              </div>
            </div>
            <div class="item-bottom">
              <ul class="item-bottom-list">
                <li class="item-bottom-like">
                  <img src="../../../assets/images/like.svg" alt="">   2
                </li>
                <li class="item-bottom-unlike">
                  <img src="../../../assets/images/unlike.svg" alt=""> 踩</li>
                <li class="item-bottom-comment">
                  <img src="../../../assets/images/commen.svg" alt=""> 评论</li>
                <li class="item-bottom-share">
                  <img src="../../../assets/images/share.svg" alt=""> 分享</li>
              </ul>
            </div>
          </li>
        </ul>
      </section>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        isToday: false,
        today: '今天',
        otherDay: '一周内'
      }
    },
    name: 'history',
    methods: {
      HideFooter () {
        this.$store.state.footer.isShow = false
      },
      goBack () {
        this.$store.state.footer.isShow = true
        this.$router.back()
      }
    },
    mounted () {
      this.HideFooter()
    }
  }
</script>

<style scoped>
  /*观看历史头部*/
.me-history {
  height: 100%;
}
.me-history-header{
  z-index: 999;
  background: #ffffff;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #efe4e4;
}
.me-history-header span{
  float: left;
  display: block;
  width: 50px;
  height: 50px;
}
.me-history-header p{
  float: right;
  height: 50px;
  font-size: 15px;
  font-weight: bold;
  padding-right: 150px;
}
  .me-history-date {
    position: fixed;
    top: 50px;
    left: 0;
    right: 0;
    height: 40px;
    z-index: 999;
    background: #ffffff;
  }
  .me-history-date span {
    display: block;
    font-size: 14px;
    font-weight: bold;
    margin-top: 10px;
    margin-left: 10px;
  }
  /*历史列表*/
  /*关注/推荐列表*/
  .post-list {
    margin-top: 100px;
    height: 100%;
    /*background: #d9d9d9;*/
  }

  .post-wrapper {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.06);
  }
  .post-item {
    margin-bottom: 5px;
    width: 100%;
    /*height: 350px;*/
    height: 100%;
    background: #ffffff;
  }

  .post-item .item-top {
    height: 40px;
    width: 100%;
    position: relative;
    overflow: hidden;
  }

  .post-item .item-top a{
    float: left;
    display: block;
    width: 25px;
    height: 25px;
    margin-top: 5px;
    margin-left: 5px;
  }

  .post-item .item-top .item-top-middle {
    float: left;
    width: 250px;
    font-size: 12px;
    height: 25px;
    margin-left: 10px;
    margin-top: 4px;
  }

  .post-item .item-top-middle .item-time-user {
    font-size: 10px;
    color: #9c9c9c;
  }

  .post-item .item-top .title-icon {
    color: #8e8383;
    font-size: 16px;
    margin-top: 10px;
  }

  .post-item .item-content {
    width: 100%;
    height: 100%;
    margin-bottom: 10px;
  }

  .post-item .item-content h4 {
    width: 100%;
    height: 30px;
    overflow: hidden;
    padding-top: 4px;
    font-size: 14px;
    font-weight: bold;
  }

  .post-item .item-content .item-content-video {
    width: 100%;
    height: 100%;
    overflow: hidden;
    font-size: 14px;
    color: #333333;
    padding-left: 6px;
  }

  .post-item .item-bottom {
    height: 40px;
    width: 100%;
    position: relative;
    box-sizing: border-box;
  }

  .post-item .item-bottom .item-bottom-list {
    width: 100%;
    height: 40px;
    position: relative;
    padding-top: 10px;
  }

  .item-bottom-list li {
    /*width: 30px;*/
    /*height: 30px;*/
    float: left;
    margin-left: 30px;
    font-size: 15px;
    color: #333333;
  }

  .item-bottom-like img{
    width: 17px;
    height: 17px;
  }

  .item-bottom-unlike img {
    width: 17px;
    height: 17px;
  }
  .item-bottom-comment img {
    width: 17px;
    height: 17px;
  }
  .item-bottom-share img {
    width: 17px;
    height: 17px;
  }
  /*底部填充样式*/
  .bottom {
    height: 100px;
    width: 100%;
    padding-left: 20px;
    padding-top: 10px;
  }
</style>
