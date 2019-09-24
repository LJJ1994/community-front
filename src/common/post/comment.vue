<template>
    <div class="post-comment">
      <div class="post-comment-wrapper">
        <Row>
          <Col span="4">
            <span class="post-comment-avatar"><img src="../../assets/images/girl2.svg" alt=""></span>
          </Col>
          <Col span="16">
            <div class="post-user-profile">
              <p class="post-comment-username">{{ userName }}</p>
              <p class="post-comment-time">{{ commentTime }}</p>
            </div>
          </Col>
          <Col span="4">
            <div class="post-like-btn">
              <span class="post-like-left">{{ likeCount }}</span>
              <span class="post-like-right">
              <img src="../../assets/images/like.svg" alt="">
            </span>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span="24">
            <div class="comment-content">
              {{ content }}
              <img class="comment-img" src="../../assets/images/gilr1.svg" alt="" v-show="hasImg">
            </div>
          </Col>
        </Row>
        <Row>
          <Col span="24">
<!--            <router-link :to="{name: 'PostReply', params: {'commentId': commentId}}">-->
<!--              <span class="reply-count">{{ replyCount }}条回复></span>-->
<!--            </router-link>-->
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
</template>

<script>
  export default {
    name: 'comment',
    data () {
      return {
        commentId: 2,
        hasImg: true,
        likeCount: 200,
        userName: '发呆大傻子',
        commentTime: '50分钟前',
        replyCount: 30,
        content: "我服了,　这确实是评论内容我服了,　这确实是评论内容我服了,　这确实是评论内容我服了,　这确实是评论内容我服了,　这确实是评论内容我服了,　这确实是评论内容我服了,　这确实是评论内容"
      }
    }
  }
</script>

<style scoped>
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
    display: block;
    float: right;
    width: 20px;
    height: 20px;
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
