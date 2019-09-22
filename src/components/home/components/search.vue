<template>
  <section class="search">
    <div class="search-head">
        <span class="search-back" @click="goBack"> < </span>
      <form action="" class="form-group">
        <input type="text" placeholder="请输入关键字" class="search-input">
        <input type="submit" value="搜索" class="search-btn">
      </form>
    </div>
    <div class="search-has-input" v-if="hasInput">
      <ul class="search-has-input-group">
        <li class="search-has-input-item">我服了</li>
        <li class="search-has-input-item">我服了他</li>
        <li class="search-has-input-item">我服了。</li>
      </ul>
    </div>
    <div class="search-no-input" v-else>
      <div class="hot-search">
        <p>大家都在搜</p>
        <div class="hot-list">
          <ul class="record-group">
            <li class="record-item">1 皮小妹专访骚男</li>
            <li class="record-item">2 皮皮虾官方小酒</li>
            <li class="record-item">3 皮皮虾创造周</li>
            <li class="record-item">4 让人</li>
            <li class="record-item">5 头像</li>
            <li class="record-item">6 表情包</li>
          </ul>
        </div>
      </div>
      <div class="search-record">
        <p class="record-title">搜索记录</p>
        <span class="delete-record">
          <img src="../../../assets/images/delete.svg" alt="">
        </span>
      </div>
      <div class="search-record-list">
        <ul class="search-record-group">
          <li class="search-record-item">呵呵</li>
          <li class="search-record-item">皮小子</li>
          <li class="search-record-item">皮皮虾</li>
          <li class="search-record-item">我不皮</li>
          <li class="search-record-item">我不皮</li>
          <li class="search-record-item">我不皮</li>
          <li class="search-record-item">我不皮</li>
          <li class="search-record-item">我不皮</li>
          <li class="search-record-item">我不皮</li>
          <li class="search-record-item">我不皮</li>
          <li class="search-record-item">我不皮</li>
          <li class="search-record-item">我不皮</li>
        </ul>
      </div>
    </div>
    <section class="post-list" style="display: none">
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
      </ul>
    </section>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        hasInput: false,
        result: true
      }
    },
    name: 'search',
    methods: {
      HideFooter () {
        this.$store.state.footer.isShow = false
      },
      goBack () {
        this.$router.back()
        this.$store.state.footer.isShow = true
      }
    },
    created () {
      this.HideFooter()
    }
  }
</script>

<style scoped>
  /*搜索框部分*/
  .search {
    height: 100%;
    width: 100%;
  }
  .search .search-head {
    z-index: 99999;
    height: 30px;
    line-height: 30px;
    width: 100%;
    position: fixed;
    overflow: hidden;
    background: #ffffff;
    top: 0;
    right: 0;
    left: 0;
  }
  .search-head span{
    margin-left: 8px;
    display: block;
    float: left;
    height: 30px;
  }
  .search-head .form-group {
    float: right;
    height: 30px;
    margin-right: 10px;
  }
  .form-group .search-input {
    outline-style: none;
    width: 240px;
    height: 20px;
    background: #80787b1c;
    border-radius: 3px;
    border-style: none;
    padding: 2px 5px;
    font-size: 13px;
  }

  .form-group .search-btn {
    background: #ffffff;
    color: #878787;
    border: none;
  }

  /*输入搜索关键字时*/
  .search-has-input {
    margin-top: 40px;
    margin-left: 10px;
  }
  .search-has-input-item {
    margin-top: 6px;
    font-size: 14px;
    color: #333333;
  }

  /*没有输入搜索关键字时*/
  .search-no-input {
    margin-top: 40px;
  }
  .search-no-input .hot-search {
    font-size: 14px;
    color: rgba(23, 29, 40, 0.5);
  }
  .search-no-input .hot-search p {
    margin-left: 10px;
  }
  .hot-search .hot-list {
    margin-top: 10px;
    color: #333333;
  }
  .hot-list .record-group {
    position: relative;
    width: 300px;
    height: 100px;
  }
  .hot-list .record-group .record-item {
    float: left;
    font-size: 14px;
    color: #333333;
    margin-left: 12px;
    margin-top: 10px;
  }
  .search-record {
    position: relative;
    overflow: hidden;
    margin-top: 2px;
    margin-left: 10px;
  }
  .search-record .record-title {
    color: #878787;
    float: left;
  }
  .search-record .delete-record {
    float: right;
    width: 25px;
    height: 25px;
    margin-right: 10px;
  }
  .search-record .delete-record img {
    width: 100%;
    height: 100%;
  }
  .search-record-list {
    margin-top: 10px;
    margin-left: 10px;
  }
  .search-record-group {
    position: relative;
    width: 300px;
    height: 200px;
  }
  .search-record-item {
    float: left;
    display: block;
    height: 25px;
    margin-right: 20px;
    background: #d9d9d9;
    color: #333333;
    padding: 0 4px;
    font-size: 14px;
    border-radius: 5px;
    margin-top: 10px;
  }

  /*搜索结果页*/
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
    padding-top: 10px;
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
  }

  .post-item .item-content .item-content-video {
    width: 100%;
    height: 100%;
    overflow: hidden;
    font-size: 14px;
    color: #333333;
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
</style>
