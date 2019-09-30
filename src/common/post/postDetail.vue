<template>
    <div class="post-wrapper">
<!--      帖子内容详情-->
<!--      <post-common :postCommons="postCommons"></post-common>-->
      <div class="post-detail">
        <div class="post-detail-header">
          <Row>
            <Col span="4">
              <img src=".././../assets/images/kuohao.svg" alt="" @click="goBack">
            </Col>
            <Col span="20">
              <p class="post-title" v-show="!showName">帖子详情</p>
              <div class="avator-name" v-show="showName">
                <img :src="avatar_url" alt="">
                <div class="post-user-name">
                  <span>{{ username }}</span>
                  <p>{{ create_time }}</p>
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
              <Col span="4" class="post-header-avatar">
                <img :src="avatar_url" alt="" @click="goBack">
              </Col>
              <Col span="16" class="post-header-middle">
                <p class="post-header-username">{{ username }}</p>
                <span class="post-publish-time">{{ create_time }}</span>
              </Col>
              <Col span="4">
                <span class="post-followed-btn" v-show="isFollow">已关注</span>
                <span class="post-nofollow-btn" v-show="!isFollow">关注</span>
              </Col>
            </Row>
          </div>
          <div class="post-content-wrapper">
            <div class="item-content-video">
              {{ content }}
              <div class="item-images-group" v-show="img_url">
                <ul class="item-content-images">
                  <li class="item-content-image" v-for="(url, idx) in img_url" :key="idx">
                    <img :src="url" alt="">
                  </li>
                </ul>
              </div>
            </div>
            <span class="post-content-browse">{{ clicks }}次阅读</span>
          </div>
        </div>
      </div>
<!--      帖子评论详情-->
      <div class="comment-wrapper">
        <div class="post-comment">
          <div class="post-comment-wrapper">
<!--            用户头部信息-->
            <Row>
              <Col span="4">
                <span class="post-comment-avatar"><img src="../../assets/images/girl2.svg" alt=""></span>
              </Col>
              <Col span="14">
                <div class="post-user-profile">
                  <p class="post-comment-username">{{ commentUsername }}</p>
                  <p class="post-comment-time">{{ commentTime }}</p>
                </div>
              </Col>
              <Col span="6">
                <p class="comment-like-count">{{likeCount}}</p>
                  <span class="post-like-right">
                <img src="../../assets/images/like.svg" alt="">
              </span>
              </Col>
            </Row>
<!--            评论内容-->
            <Row>
              <Col span="24">
                <div class="comment-content">
                  {{ commentContent }}
                </div>
              </Col>
            </Row>
            <Row>
              <Col span="24">
                <router-link :to="{name: 'PostReply', params: {'commentId': commentId}}">
                  <span class="reply-count">{{ replyCount }}条回复></span>
                </router-link>
              </Col>
            </Row>
          </div>
          <div class="comment-bottom">
            到底了~
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  // import PostCommon from './postCommon'
  import PostComment from './comment'
  import postCommon from './postCommon'
  export default {
    name: 'post',
    components: {
      PostComment
    },
    data () {
      return {
        avatar_url: '',
        username: '',
        create_time: '',
        content: '',
        img_url: [],
        clicks: 0,
        showName: false,
        isFollow: true,

        commentId: 2,
        hasImg: true,
        likeCount: 200,
        commentUsername: '发呆大傻子',
        commentTime: '50分钟前',
        replyCount: 30,
        commentContent: "我服了,　这确实是评论内容我服了,内容我服了,　这确实是评论内容"
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
      },
      GetPostData (postId) {
        const self = this
        self.axios({
          url: `/api/post/${postId}/detail`,
          method: 'get'
        }).then(res=>{
          console.log(res.data)
          if (res.data.errno=='0') {
            const data = res.data.data
            self.username = data.username
            self.content = data.content
            self.avatar_url = data.avatar_url
            self.create_time = data.create_time
            self.img_url = data.img_url
            self.clicks = data.clicks
          } else {
            this.$Message.errno(res.data.errmsg)
            this.$router.push('/')
          }
        })
      }
    },
    mounted () {
      this.HideFooter()
      window.addEventListener('scroll', this.handleScroll)
    },
    created () {
      const self = this
      const postId = this.$route.params.postId
      self.GetPostData(postId)
    }
  }
</script>

<style scoped>
  .post-wrapper {
    height: 100%;
    overflow: hidden;
  }
  /*帖子详情内容*/
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
    border-radius: 14px;
  }
  .post-user-name {
    float: left;
    font-size: 10px;
    font-weight: bold;
    margin-left: 10px;
    margin-top: 4px;
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
    border-radius: 14px;
  }
  .post-header-middle {
    margin-top: 5px;
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
    display: inline-block;
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
    display: inline-block;
    margin-right: 10px;
    padding-left: 5px;
    border: 1px solid #ff4b69;
    color: #ffffff;
    background: #ff4b69;
    margin-top: 7px;
    font-size: 13px;
    border-radius: 5px;
  }
  .item-content-video {
    width: 309%;
    height: 100%;
    overflow: hidden;
    font-size: 14px;
    color: #333333;
    margin: 10px 5px;
  }

  .item-images-group {
    position: relative;
    overflow: hidden;
    height: 100%;
  }
  .item-content-images{
    display: block;
    height: 100%;
    width: 320px;
  }
  .item-content-image {
    float: left;
    display: inline-block;
    margin-top: 10px;
    margin-left: 5px;
    width: 96px;
    height: 96px;
  }
  .post-content-browse {
    display: block;
    margin-left: 10px;
    margin-top: 10px;
    font-size: 12px;
    color: #929292;
    margin-bottom: 10px;
  }

  /*评论详情*/
  .post-comment {
    margin-top: 10px;
    height: 100%;
  }
  .post-comment-wrapper {
    height: 100%;
  }
  .post-comment-avatar {
    margin-left: 10px;
    display: block;
    height: 30px;
    width: 30px;
  }
  .post-user-profile {
    height: 30px;
    position: relative;
  }
  .post-comment-username {
    float: left;
    margin-top: 10px;
    color: #333333;
  }
  .post-comment-time {
    float: left;
    margin-left: 10px;
    margin-top: 10px;
    font-size: 10px;
    color: #d9d9d9;
  }
  .comment-like-count {
    display: inline-block;
    margin-top: 7px;
    margin-left: 15px;
    font-size: 14px;
  }
  .post-like-btn {
    margin-top: 5px;
    margin-right: 5px;
    position: relative;
    overflow: hidden;
  }
  .post-like-left {
    margin-left: 3px;
    margin-top: 2px;
    float: left;
  }
  .post-like-right {
    display: inline-block;
    float: right;
    width: 20px;
    height: 20px;
    margin-top: 2px;
    margin-right: 16px;
  }
  .comment-content {
    margin-top: 5px;
    margin-left: 10px;
    margin-right: 10px;
  }
  .comment-img {
    padding: 0;
    display: block;
    width: 100px;
    margin-top: 10px;
  }
  .reply-count {
    display: inline-block;
    margin-left: 10px;
    margin-top: 8px;
    border-radius: 7px;
    background: #d9d9d9;
    color: #333333;
    padding: 2px 2px;
  }
  .comment-bottom {
    box-sizing: border-box;
    padding-top: 10px;
    font-size: 14px;
    color: #989595;
    text-align: center;
    height: 40px;
  }
</style>
