<template>
  <div style="height: 100%">
<!--    <search></search>-->
    <header class="home-header">
      <div class="nav-bar">
        <ul class="nav-bar-list">
          <li v-bind:class="{select: select}">关注</li>
          <li>推荐</li>
          <li>放映厅</li>
          <li>图片</li>
          <li>小说</li>
        </ul>
        <router-link to="/search">
          <div class="nav-search">
            <img src="../../assets/images/search.svg" alt="">
          </div>
        </router-link>
      </div>
    </header>
    <section class="post-list">
        <ul class="post-wrapper">
          <li class="post-item">
            <div class="item-top">
              <a href=""><img src="../../assets/images/avator.svg" alt=""></a>
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
                  <img src="../../assets/images/like.svg" alt="">   2
                </li>
                <li class="item-bottom-unlike">
                  <img src="../../assets/images/unlike.svg" alt=""> 踩</li>
                <li class="item-bottom-comment">
                  <img src="../../assets/images/commen.svg" alt=""> 评论</li>
                <li class="item-bottom-share">
                  <img src="../../assets/images/share.svg" alt=""> 分享</li>
              </ul>
            </div>
          </li>
          <li class="post-item">
            <div class="item-top">
              <a href=""><img src="../../assets/images/avator.svg" alt=""></a>
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
                  <img src="../../assets/images/like.svg" alt="">   2
                </li>
                <li class="item-bottom-unlike">
                  <img src="../../assets/images/unlike.svg" alt=""> 踩</li>
                <li class="item-bottom-comment">
                  <img src="../../assets/images/commen.svg" alt=""> 评论</li>
                <li class="item-bottom-share">
                  <img src="../../assets/images/share.svg" alt=""> 分享</li>
              </ul>
            </div>
          </li>
          <li class="post-item">
            <div class="item-top">
              <a href=""><img src="../../assets/images/avator.svg" alt=""></a>
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
                  <img src="../../assets/images/like.svg" alt="">   2
                </li>
                <li class="item-bottom-unlike">
                  <img src="../../assets/images/unlike.svg" alt=""> 踩</li>
                <li class="item-bottom-comment">
                  <img src="../../assets/images/commen.svg" alt=""> 评论</li>
                <li class="item-bottom-share">
                  <img src="../../assets/images/share.svg" alt=""> 分享</li>
              </ul>
            </div>
          </li>
          <li class="post-item">
            <div class="item-top">
              <a href=""><img src="../../assets/images/avator.svg" alt=""></a>
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
                  <img src="../../assets/images/like.svg" alt="">   2
                </li>
                <li class="item-bottom-unlike">
                  <img src="../../assets/images/unlike.svg" alt=""> 踩</li>
                <li class="item-bottom-comment">
                  <img src="../../assets/images/commen.svg" alt=""> 评论</li>
                <li class="item-bottom-share">
                  <img src="../../assets/images/share.svg" alt=""> 分享</li>
              </ul>
            </div>
          </li>
          <li class="post-item">
            <div class="item-top">
              <a href=""><img src="../../assets/images/avator.svg" alt=""></a>
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
                  <img src="../../assets/images/like.svg" alt="">   2
                </li>
                <li class="item-bottom-unlike">
                  <img src="../../assets/images/unlike.svg" alt=""> 踩</li>
                <li class="item-bottom-comment">
                  <img src="../../assets/images/commen.svg" alt=""> 评论</li>
                <li class="item-bottom-share">
                  <img src="../../assets/images/share.svg" alt=""> 分享</li>
              </ul>
            </div>
          </li>
          <li class="post-item">
            <div class="item-top">
              <a href=""><img src="../../assets/images/avator.svg" alt=""></a>
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
                  <img src="../../assets/images/like.svg" alt="">   2
                </li>
                <li class="item-bottom-unlike">
                  <img src="../../assets/images/unlike.svg" alt=""> 踩</li>
                <li class="item-bottom-comment">
                  <img src="../../assets/images/commen.svg" alt=""> 评论</li>
                <li class="item-bottom-share">
                  <img src="../../assets/images/share.svg" alt=""> 分享</li>
              </ul>
            </div>
          </li>
          <li class="post-item">
            <div class="item-top">
              <a href=""><img src="../../assets/images/avator.svg" alt=""></a>
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
                  <img src="../../assets/images/like.svg" alt="">   2
                </li>
                <li class="item-bottom-unlike">
                  <img src="../../assets/images/unlike.svg" alt=""> 踩</li>
                <li class="item-bottom-comment">
                  <img src="../../assets/images/commen.svg" alt=""> 评论</li>
                <li class="item-bottom-share">
                  <img src="../../assets/images/share.svg" alt=""> 分享</li>
              </ul>
            </div>
          </li>
        </ul>
    </section>
    <div class="bottom">
      @~@ 哥,这回这没了~
    </div>
  </div>
</template>

<script>
  import Follow from './components/follow'
  import Search from './components/search'

  export default {
    data () {
      return {
        select: true
      }
    },
    name: 'Home',
    components: {
      Follow,
      Search
    }
  }
</script>

<style scoped>
  /* 导航栏　*/
  .home-header {
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    right: 0;
    height: 40px;
    font-size: 14px;
    background-color: #fff;
  }

  .home-header .nav-bar {
    position: relative;
    height: 100%;
    width: 100%;
  }

  .nav-bar-list {
    position: relative;
    overflow: hidden;
    color: black;
    width: 100%;
    height: 100%;
    font-size: 14px;
    margin-left: 14px;
    line-height: 20px;
  }

  .nav-bar-list li {
    float: left;
    margin-left: 20px;
    margin-top: 10px;
  }

  .select {
    color: #ff639d;
    font-size: 16px;
  }

  .home-header .nav-bar .nav-search {
    position: fixed;
    z-index: 999;
    right: 0;
    top: 0;
    bottom: 0;
    width: 40px;
    height: 40px;
  }

  .nav-search {
    height: 100%;
    width: 100%;
  }

/*关注/推荐列表*/
  .post-list {
    margin-top: 40px;
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
