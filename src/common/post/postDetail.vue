<template>
    <div class="post-wrapper">
      <post-common></post-common>
      <div class="comment-wrapper">
        <post-comment></post-comment>
      </div>
    </div>
</template>

<script>
  import PostCommon from './postCommon'
  import PostComment from './comment'
  export default {
    name: 'post',
    components: {
      PostCommon,
      PostComment
    },
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
  .post-wrapper {
    height: 100%;
  }
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
