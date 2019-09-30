<template>
<!--  这是个人中心页面(需要登录)-->
  <div class="me-detail">
    <me-common :profile="profile"></me-common>
    <div class="me-detail-tab">
      <ul class="tab-group">
        <li class="tab-all tab-item" @click="toggleTab('all')" :class="{active: currentTab === 'all'}">全部</li>
        <li class="tab-post tab-item"  @click="toggleTab('post')"  :class="{active: currentTab === 'post'}">帖子</li>
        <li class="tab-comments tab-item"  @click="toggleTab('comments')"  :class="{active: currentTab === 'comments'}">评论</li>
      </ul>
    </div>
    <div class="me-tab-content">
      <keep-alive>
        <component :is="currentTab" :posts="posts"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
  import MeCommon from '../../../common/me/meCommon'
  import Post from './post'
  import All from './all'
  import Comments from './comments'

  import { GetUser } from 'api/api'

  export default {
    name: 'meDetail',
    data () {
      return {
        posts: [],
        currentTab: this.$route.params.currentTab || 'post',
        profile: {}
      }
    },
    components: {
      MeCommon,
      Post,
      All,
      Comments
    },
    methods: {
      toggleTab (tab) {
        this.currentTab = tab
      },
      HideFooter () {
        this.$store.state.footer.isShow = false
      }
    },
    mounted () {
      this.HideFooter()
    },
    created () {
      const self = this
      GetUser(this.$store.state.user.user_id).then(res => {
        if (res.data.errno == "0") {
          const data = res.data.data
          self.profile['like'] = data.like
          self.profile['fans'] = data.followers_count
          self.profile['follow'] = data.followed_count
          self.profile['score'] = data.score
          self.profile['username'] = data.username

          self.posts=data.post_list
          console.log(self.posts)
        } else {
          alert(res.data.errmsg)
        }
      })
    }
  }
</script>

<style scoped>
.me-detail {
  height: 100%;
}
.me-detail-tab{
  position: sticky;
  z-index: 99;
  background: #ffffff;
  top: 38px;
}
  .me-detail {
    margin-bottom: 40px;
    margin-top: 10px;
  }
  .tab-group {
    height: 40px;
    position: relative;
    overflow: hidden;
  }
  .me-detail-tab {
    border-top: 1px solid #f3ebeb;
    padding-top: 10px;
  }
  .tab-item {
    margin-left: 50px;
    float: left;
    width: 30px;
    height: 40px;
    font-size: 14px;
    color: #333333;
  }
  .active {
    color: #ff4b69;
  }
</style>
