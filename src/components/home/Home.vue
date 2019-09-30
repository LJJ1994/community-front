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
          <li class="post-item" v-for="(item, id) in postList" :key="id">
            <router-link :to="{name: 'OtherDetail', params: {user_id: item.user_id }}">
              <div class="item-top">
                <img :src="item.avatar_url" alt="">
                <div class="item-top-middle">
                  <span>{{ item.username }}</span>
                  <div class="item-time-user">
                    <span class="time">{{ item.create_time }}</span>
                  </div>
                </div>
                <span class="title-icon"> > </span>
              </div>
            </router-link>
            <router-link :to="{name: 'PostDetail', params: {'postId': item.post_id }}">
              <div class="item-content">
                <div class="item-content-video">
                  {{ item.content }}
                  <div class="item-images-group" v-show="item.img_url">
                    <ul class="item-content-images" v-for="(url, idx) in item.img_url" :key="idx">
                      <li class="item-content-image"><img :src="url" alt=""></li>
                    </ul>
                  </div>
                </div>
              </div>
            </router-link>
            <div class="item-bottom">
              <ul class="item-bottom-list">
                <li class="item-bottom-like">
                  <img src="../../assets/images/like.svg" alt="">   {{item.like_counts}}
                </li>
                <li class="item-bottom-unlike">
                  <img src="../../assets/images/unlike.svg" alt=""> 踩</li>
                <li class="item-bottom-comment">
                  <img src="../../assets/images/commen.svg" alt=""> {{ item.comments_counts }}</li>
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
        select: true,
        id: 1,
        isOrganization: true,
        postList: []
      }
    },
    name: 'Home',
    components: {
      Follow,
      Search
    },
    methods: {
      GetPosts () {
        const self = this
        self.axios({
          url: `/api/post`,
          method: 'GET'
        }).then(res=>{
          if (res.data.errno == '0') {
            const postList = res.data.data
            self.postList = postList
          }
        })
      }
    },
    created () {
      this.GetPosts()
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

  .post-item .item-top img{
    float: left;
    display: inline-block;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    margin-top: 5px;
    margin-left: 5px;
  }

  .post-item .item-top .item-top-middle {
    float: left;
    width: 250px;
    font-size: 12px;
    height: 25px;
    margin-left: 10px;
    margin-top: 6px;
  }

  .post-item .item-top-middle .item-time-user {
    font-size: 10px;
    color: #9c9c9c;
    margin-top: 3px;
  }

  .post-item .item-top .title-icon {
    color: #8e8383;
    display: inline-block;
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
    color: #333333;
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

  .item-images-group {
    position: relative;
    overflow: hidden;
  }
  .item-content-image {
    float: left;
    display: inline-block;
    margin-top: 10px;
    margin-left: 5px;
    width: 96px;
    height: 96px;
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
