<template>
    <section class="find" style="height: 100%">
      <div class="find-header">
        <div class="find-header-wrapper" @click="moveTab">
          <span class="find-follow" :class="{selnav: selnav}" fol="sel">关注</span>
          <span class="find-suggest" :class="{selnav: !selnav}">推荐</span>
        </div>
      </div>
      <div class="follow-list" v-if="selnav">
        <ul class="follow-group">
          <li class="find-follow-item">
            <span class="follow-item-avator"><img src="../../assets/images/avator.svg" alt=""></span>
            <p class="follow-item-text">傻缺视频合集</p>
          </li>
          <li class="find-follow-item">
            <span class="follow-item-avator"><img src="../../assets/images/avator.svg" alt=""></span>
            <p class="follow-item-text">傻缺视频合集</p>
          </li>
          <li class="find-follow-item">
            <span class="follow-item-avator"><img src="../../assets/images/avator.svg" alt=""></span>
            <p class="follow-item-text">傻缺视频合集</p>
          </li>
          <li class="find-follow-item">
            <span class="follow-item-avator"><img src="../../assets/images/avator.svg" alt=""></span>
            <p class="follow-item-text">傻缺视频合集</p>
          </li>
          <li class="find-follow-item">
            <span class="follow-item-avator"><img src="../../assets/images/avator.svg" alt=""></span>
            <p class="follow-item-text">傻缺视频合集</p>
          </li>
          <li class="find-follow-item">
            <span class="follow-item-avator"><img src="../../assets/images/avator.svg" alt=""></span>
            <p class="follow-item-text">傻缺视频合集</p>
          </li>
          <li class="find-follow-item">
            <span class="follow-item-avator"><img src="../../assets/images/avator.svg" alt=""></span>
            <p class="follow-item-text">傻缺视频合集</p>
          </li>
          <li class="find-follow-item">
            <span class="follow-item-avator"><img src="../../assets/images/avator.svg" alt=""></span>
            <p class="follow-item-text">傻缺视频合集</p>
          </li>
          <li class="find-follow-item">
            <span class="follow-item-avator"><img src="../../assets/images/avator.svg" alt=""></span>
            <p class="follow-item-text">傻缺视频合集</p>
          </li>
          <li class="find-follow-item">
            <span class="follow-item-avator"><img src="../../assets/images/avator.svg" alt=""></span>
            <p class="follow-item-text">傻缺视频合集</p>
          </li>
        </ul>
      </div>
      <div class="suggest-list" v-else>
        <ul class="suggest-group">
          <li class="suggest-group-item">
            <div class="suggest-avator-text">
              <span class="suggest-image"><img src="../../assets/images/avator.svg" alt=""></span>
              <p>呵呵</p>
            </div>
            <div class="suggest-item-btn">
              <span>关注</span>
            </div>
          </li>
          <li class="suggest-group-item">
            <div class="suggest-avator-text">
              <span class="suggest-image"><img src="../../assets/images/avator.svg" alt=""></span>
              <div class="suggest-item-middle">
                <span>海贼王一生推</span>
              </div>
            </div>
            <div class="suggest-item-btn">
              <span>关注</span>
            </div>
          </li>
          <li class="suggest-group-item">
            <div class="suggest-avator-text">
              <span class="suggest-image"><img src="../../assets/images/avator.svg" alt=""></span>
              <div class="suggest-item-middle">
                <span>海贼王一生推</span>
              </div>
            </div>
            <div class="suggest-item-btn">
              <span>关注</span>
            </div>
          </li>
          <li class="suggest-group-item">
            <div class="suggest-avator-text">
              <span class="suggest-image"><img src="../../assets/images/avator.svg" alt=""></span>
              <div class="suggest-item-middle">
                <span>海贼王一生推</span>
              </div>
            </div>
            <div class="suggest-item-btn">
              <span>关注</span>
            </div>
          </li>
          <li class="suggest-group-item">
            <div class="suggest-avator-text">
              <span class="suggest-image"><img src="../../assets/images/avator.svg" alt=""></span>
              <div class="suggest-item-middle">
                <span>海贼王一生推</span>
              </div>
            </div>
            <div class="suggest-item-btn">
              <span>关注</span>
            </div>
          </li>
          <li class="suggest-group-item">
            <div class="suggest-avator-text">
              <span class="suggest-image"><img src="../../assets/images/avator.svg" alt=""></span>
              <div class="suggest-item-middle">
                <span>海贼王一生推</span>
              </div>
            </div>
            <div class="suggest-item-btn">
              <span>关注</span>
            </div>
          </li>
          <li class="suggest-group-item">
            <div class="suggest-avator-text">
              <span class="suggest-image"><img src="../../assets/images/avator.svg" alt=""></span>
              <div class="suggest-item-middle">
                <span>海贼王一生推</span>
              </div>
            </div>
            <div class="suggest-item-btn">
              <span>关注</span>
            </div>
          </li>
          <li class="suggest-group-item">
            <div class="suggest-avator-text">
              <span class="suggest-image"><img src="../../assets/images/avator.svg" alt=""></span>
              <div class="suggest-item-middle">
                <span>海贼王一生推</span>
              </div>
            </div>
            <div class="suggest-item-btn">
              <span>关注</span>
            </div>
          </li>
          <li class="suggest-group-item">
            <div class="suggest-avator-text">
              <span class="suggest-image"><img src="../../assets/images/avator.svg" alt=""></span>
              <div class="suggest-item-middle">
                <span>海贼王一生推</span>
              </div>
            </div>
            <div class="suggest-item-btn">
              <span>关注</span>
            </div>
          </li>
          <li class="suggest-group-item">
            <div class="suggest-avator-text">
              <span class="suggest-image"><img src="../../assets/images/avator.svg" alt=""></span>
              <div class="suggest-item-middle">
                <span>海贼王一生推</span>
              </div>
            </div>
            <div class="suggest-item-btn">
              <span>关注</span>
            </div>
          </li>
          <li class="suggest-group-item">
            <div class="suggest-avator-text">
              <span class="suggest-image"><img src="../../assets/images/avator.svg" alt=""></span>
              <div class="suggest-item-middle">
                <span>海贼王一生推</span>
              </div>
            </div>
            <div class="suggest-item-btn">
              <span>关注</span>
            </div>
          </li>
          <li class="suggest-group-item">
            <div class="suggest-avator-text">
              <span class="suggest-image"><img src="../../assets/images/avator.svg" alt=""></span>
              <div class="suggest-item-middle">
                <span>海贼王一生推</span>
              </div>
            </div>
            <div class="suggest-item-btn">
              <span>关注</span>
            </div>
          </li>
        </ul>
      </div>
    </section>
</template>

<script>
export default {
  data () {
    return {
      selnav: true
    }
  },
  name: 'Find',
  methods: {
    moveTab (e) {
      e.target.getAttribute('fol') ? this.selectFollowTab() : this.selectSuggestTab()
    },
    selectFollowTab () {
      this.selnav = true
    },
    selectSuggestTab () {
      this.selnav = false
    }
  }
}
</script>

<style scoped>
.find-header {
  position: fixed;
  background: #ffffff;
  z-index: 99999;
  top: 0;
  left: 0;
  right: 0;
  height: 40px;
  width: 100%;
  font-size: 16px;
  color: #333333;
}
.find-header-wrapper {
  text-align: center;
  margin-top: 10px;
}
.find-follow {
  margin-right: 20px;
}
.selnav {
  color: #ff4b69;
}
.find-follow-item {
  width: 320px;
  height: 40px;
  line-height: 40px;
  position: relative;
  overflow: hidden;
  margin-top: 17px;
  padding-bottom: 7px;
  border-bottom: 1px solid #fdf6f6;
}
.follow-item-avator {
  float: left;
  margin-left: 10px;
}
.follow-item-text {
  float: left;
  margin-left: 40px;
}
.follow-list {
  height: 100%;
  margin-top: 50px;
}
.find-follow-item img {
  width: 40px;
  height: 40px;
  padding-bottom: 2px;
}
.find-follow-item p {
  font-size: 14px;
  color: #333333;
}
  .suggest-list {
    margin-top: 50px;
    height: 100%;
  }
  .suggest-group {
    height: 100%;
  }
  .suggest-group-item {
    height: 60px;
    width: 100%;
    position: relative;
    overflow: hidden;
    border-bottom: 1px solid #fdf6f6;
  }
  .suggest-avator-text {
    float: left;
    height: 59px;
    line-height: 59px;
    width: 200px;
    position: relative;
    overflow: hidden;
  }
  .suggest-image {
    display: inline-block;
    width: 79px;
    height: 60px;
    float: left;
    padding: 2px 5px;
  }
  .suggest-image img {
    width: 50px;
    height: 50px;
  }
  .suggest-item-middle {
    float: left;
    width: 100px;
    height: 58px;
    font-size: 14px;
  }
  .suggest-item-middle span {
    display: inline-block;
    width: 100px;
    height: 20px;
    font-size: 10px;
  }
  .suggest-item-btn {
    float: right;
    margin-top: 20px;
  }
  .suggest-item-btn span {
    margin-right: 10px;
    border-radius: 5px;
    border: 1px solid #ff4b69;
    color: #ff4b69;
    font-size: 14px;
    padding: 4px 10px;
  }
</style>
