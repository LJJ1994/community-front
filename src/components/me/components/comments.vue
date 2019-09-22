<template>
    <div class="comments">
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
            <span class="title-icon"> <img src="../../../assets/images/delete.svg" alt=""> </span>
          </div>
          <div class="item-content">
            <div class="item-content-video">
              {{ comment }}
            </div>
            <div class="item-content-reply">
              <span class="comment-name">{{ commentName }}</span>: <span class="comment-content"  id="comments">{{ commentContent}}</span>
              <span class="content-img1"><img class="content-img" src="../../../assets/images/play.png" alt="" v-show="hasImg"></span>
            </div>
          </div>
          <div class="item-bottom">
            <ul class="item-bottom-list">
              <li class="item-bottom-like">
                <img src="../../../assets/images/like.svg" alt="">   2
              </li>
              <li class="item-bottom-comment">
                <img src="../../../assets/images/commen.svg" alt=""> 评论</li>
              <li class="item-bottom-share">
                <img src="../../../assets/images/share.svg" alt=""> 分享</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
  export default {
    name: 'comments',
    data () {
      return {
        comment: '评论内容',
        commentName: '评论人名字',
        commentContent: '评论的内容我真是服了你了啊啊啊啊啊啊啊啊啊啊啊啊',
        hasImg: false
      }
    },
    mounted () {
      this.$nextTick(function () {
        this.handleWord()
      })
    },
    methods: {
      handleWord() {
        var content = document.getElementById('comments')
        content.innerHTML = content.innerHTML.slice(0, 10) + "..."
      }
    }
  }
</script>

<style scoped>
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
  .title-icon img {
    width: 20px;
    height: 20px;
  }
  .post-item .item-content {
    width: 100%;
    height: 100%;
    margin-bottom: 10px;
  }
  .item-content span {
    display: inline-block;
  }
  .item-content-reply {
    height: 45px;
    width: 100%;
    background: #ececec;
    margin-right: 20px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: bold;
    position: relative;
    overflow: hidden;
    line-height: 45px;
  }
  .comment-name {
    margin-left: 2px;
    float: left;
    font-size: 13px;
    font-weight: bold;
  }
  .content-img {
    width: 45px;
    height: 45px;
  }
  .content-img1 {
    border-radius: 2px;
    float: right;
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
  .post-bottom {
    display: block;
    height: 40px;
    padding: 10px 10px;
    font-size: 14px;
    color: #ccc
  }
</style>
