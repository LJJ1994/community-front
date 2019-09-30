<template>
  <!--  这是其他人个人中心页面(访问时)-->
  <div class="me-detail">
    <div class="me-common">
      <div class="me-common-header">
        <Row>
          <Col span="4">
            <img src="../../../assets/images/kuohao.svg" alt="" @click="goBack">
          </Col>
          <Col span="20">
            <p class="me-common-name" v-show="showName">{{ username }}</p>
            <div class="avator-name" v-show="!showName">
              <img :src="avatar_url" alt="">
              <p class="me-common-name1">{{ username }}</p>
            </div>
          </Col>
        </Row>
      </div>
      <div class="me-common-profile">
        <Row>
          <Col span="6">
            <img :src="avatar_url" alt="">
          </Col>
          <Col span="18" class="me-profile-col">
            <div class="me-profile-group">
              <ul>
                <li class="me-profile-group-item">
                  <span>{{ like }}</span>
                  <p>获赞</p>
                </li>
                <li class="me-profile-group-item">
                  <span>{{ fans }}</span>
                  <p>粉丝</p>
                </li>
                <li class="me-profile-group-item">
                  <span>{{ follow }}</span>
                  <p>关注</p>
                </li>
                <li class="me-profile-group-item">
                  <span>{{ score }}</span>
                  <p>积分</p>
                </li>
              </ul>
            </div>
            <button class="me-profile-edit" id="me-profile" v-if="isLoginUser" @click.prevent="toEditPage">
              编辑资料
            </button>
            <button class="profile-follow-btn" v-else @click.prevent="followBtn($route.params.user_id)">关注</button>
          </Col>
        </Row>
        <div class="me-profile-introduce">
          <p>{{ introduce }}</p>
          <span>{{ position }}</span>
        </div>
      </div>
    </div>
    <div class="me-detail-tab">
      <ul class="tab-group">
        <li class="tab-all tab-item" @click="toggleTab('all')" :class="{active: currentTab === 'all'}">全部</li>
        <li class="tab-post tab-item"  @click="toggleTab('post')"  :class="{active: currentTab === 'post'}" :isLoginUser="isLoginUser">帖子</li>
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

        showName: true,
        username: '',
        like: 0,
        fans: 0,
        follow: 2,
        score: 1000,
        position: '广州',
        introduce: '测试',
        avatar_url: ''
      }
    },
    components: {
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
      },
      goBack () {
        this.$router.back()
        this.$store.state.footer.isShow = true
      },
      toEditPage () {
        const self = this
        self.$router.push("/me/edit")
      },
      followBtn (user_id) {
        console.log(user_id)
      },
      handleScroll () {
        const top = document.documentElement.scrollTop
        if (top > 80) {
          this.showName = false
        } else {
          this.showName = true
        }
      }
    },
    mounted () {
      this.HideFooter()
    },
    computed: {
      isLoginUser () {
        // 判断当前用户id是否为登录用户id
        // 如果是,那么用户有编辑资料等权限,路由中的user_id可能会被伪造, 但是提交post更改是依然会验证当前用户token是否合法
        return this.$store.state.user.user_id === this.$route.params.user_id
      }
    },
    created () {
      const self = this
      const userId = self.$route.params.user_id
      GetUser(userId).then(res => {
        if (res.data.errno == "0") {
          const data = res.data.data
          self.like = data.like
          self.fans = data.followers_count
          self.follow = data.followed_count
          self.score = data.score
          self.username = data.username
          self.avatar_url = data.avatar_url

          self.posts=data.post_list
          console.log(res.data)
        } else {
          alert(res.data.errmsg)
        }
      })
      window.addEventListener('scroll', this.handleScroll)
    }
  }
</script>

<style scoped>
  /*个人信息页的样式*/
  .me-common {
    height: 140px;
  }
  .me-common-header{
    z-index: 98;
    background: #ffffff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 40px;
    width: 100%;
  }
  .me-common-header img {
    height: 30px;
    width: 30px;
    margin-top: 3px;
    margin-left: 4px;
  }
  .me-common-name {
    font-size: 14px;
    font-weight: bold;
    margin-top: 11px;
    margin-left: 58px;
  }
  .avator-name {
    margin-top: 4px;
    margin-left: -20px;
    position: relative;
    overflow: hidden;
  }
  .avator-name img {
    border-radius: 13px;
    float: left;
    width: 25px;
    height: 25px;
  }
  .me-common-name1 {
    float: left;
    font-size: 10px;
    font-weight: bold;
    margin-left: 8px;
    margin-top: 9px;
  }
  .me-common-profile {
    margin-top: 60px;
  }
  .me-common-profile img {
    width: 70px;
    border-radius: 41px;
    margin-left: 7px;
    height: 70px;
  }
  .me-profile-col {
    padding-left: 10px;
  }
  .me-profile-group {
    margin-left: 10px;
    margin-top: 2px;
    position: relative;
    overflow: hidden;
  }
  .me-profile-group-item {
    text-align: center;
    float: left;
    margin-right: 20px;
  }
  .me-profile-group-item span {
    font-size: 14px;
    font-weight: bold;
  }
  .me-profile-group-item p {
    font-size: 10px;
    color: #333333;
  }
  .me-profile-edit {
    width: 159px;
    display: inline-block;
    text-align: center;
    padding-top: 2px;
    height: 25px;
    margin-top: 14px;
    border: 1px solid #ff4b69;
    color: #ffffff;
    border-radius: 4px;
    background: #ff4b69;
    outline: none;
  }
  .profile-follow-btn {
    display: inline-block;
    width: 100px;
    height: 25px;
    background: #ff4b69;
    color: #ffffff;
    border: 1px solid #ff4b69;
    border-radius: 5px;
    outline: none;
    margin-top: 13px;
    margin-left: 29px;
  }
  .me-profile-introduce {
    margin-top: 10px;
    margin-left: 8px;
    margin-right: 2px;
    height: 56px;
    /*border-bottom: 1px solid #d9d9d9;*/
  }
  .me-profile-introduce span {
    width: 40px;
    display: block;
    margin-top: 4px;
    border: 1px solid #9c9c9c;
    border-radius: 5px;
    padding: 2px 2px;
  }
  .me-action-wrapper {
    margin-top: 10px;
  }
  .ivu-tabs-nav {
    margin-left: 40px;
  }
  /*个人tab页的样式*/
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

