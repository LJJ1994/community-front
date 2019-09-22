<template>
    <div class="me-common">
      <div class="me-common-header">
        <Row>
          <Col span="4">
            <img src="../../assets/images/kuohao.svg" alt="" @click="goBack">
          </Col>
          <Col span="20">
            <p class="me-common-name" v-show="showName">{{ userName }}</p>
            <div class="avator-name" v-show="!showName">
              <img src="../../assets/images/avator.svg" alt="">
              <p class="me-common-name1">{{ userName }}</p>
            </div>
          </Col>
        </Row>
      </div>
      <div class="me-common-profile">
        <Row>
          <Col span="6">
            <img src="../../assets/images/avator.svg" alt="">
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
            <router-link to="/me/edit">
              <span class="me-profile-edit" id="me-profile">
                编辑资料
              </span>
            </router-link>
          </Col>
        </Row>
        <div class="me-profile-introduce">
          <p>{{ introduce }}</p>
          <span>{{ position }}</span>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        showName: true,
        userName: '我不是屁屁虾233',
        like: 0,
        fans: 0,
        follow: 2,
        score: 1000,
        position: '广州',
        introduce: '测试'
      }
    },
    methods: {
      goBack () {
        this.$router.back()
        this.$store.state.footer.isShow = true
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
    created () {
      window.addEventListener('scroll', this.handleScroll)
    },
    name: 'meCommon'
  }
</script>

<style scoped>
.me-common {
  height: 140px;
}
  .me-common-header{
    z-index: 999;
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
    margin-top: 7px;
    margin-left: 40px;
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
  .me-common-name1 {
    float: left;
    font-size: 10px;
    font-weight: bold;
    margin-left: 4px;
    margin-top: 6px;
  }
  .me-common-profile {
    margin-top: 60px;
  }
  .me-common-profile img {
    width: 70px;
    height: 70px;
    padding-left: 10px;
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
    width: 173px;
    display: block;
    text-align: center;
    padding-top: 2px;
    height: 25px;
    margin-top: 5px;
    border: 1px solid #ff4b69;
    color: #ff4b69;
    border-radius: 4px;
  }
  .me-profile-introduce {
    margin-top: 10px;
    margin-left: 8px;
    margin-right: 2px;
    height: 56px;
    /*border-bottom: 1px solid #d9d9d9;*/
  }
  .me-profile-introduce span {
    width: 30px;
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
</style>
