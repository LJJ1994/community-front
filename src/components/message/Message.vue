<template>
  <div class="message">
    <div class="message-header">
      <div class="message-header-wrapper">
        <Dropdown trigger="click" style="margin-left: 20px" @on-click="changeMenu">
          <a href="javascript:void(0)" name="all">
            {{ menu_text }}
            <Icon type="ios-arrow-down"></Icon>
          </a>
          <DropdownMenu slot="list">
            <DropdownItem name="all">全部消息</DropdownItem>
            <DropdownItem name="common">评论和回复</DropdownItem>
            <DropdownItem name="like">点赞</DropdownItem>
            <DropdownItem name="follow">关注</DropdownItem>
            <DropdownItem name="at" selected>@我的</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
    <div class="message-list">
      <ul class="message-group">
        <li class="message-item-like" v-show="m['all']">
          <all></all>
        </li>
        <li class="message-item-at" v-show="m['at']">
          <at></at>
        </li>
        <li class="message-item-common" v-show="m['common']">
          <common></common>
        </li>
        <li class="message-item-follow" v-show="m['follow']">
          <follow></follow>
        </li>
        <li class="message-item-like" v-show="m['like']">
          <like></like>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Like from './components/Like'
import All from './components/All'
import Common from './components/Common'
import Follow from './components/Follow'
import At from './components/At'

  export default {
    data () {
      return {
        menu_text: '全部消息',
        m: {
          'all': true,
          'common': false,
          'like': false,
          'at': false,
          'follow': false
        }
      }
    },
    components: {
      Like,
      All,
      At,
      Common,
      Follow,
    },
    methods: {
      handleOpen () {
        this.visible = true;
      },
      handleClose () {
        this.visible = false;
      },
      changeMenu (name) {
        var self = this
        switch (name) {
          case "all":
            self.changePage(name)
            self.menu_text = '全部消息';
            break;
          case "common":
            self.changePage(name)
            self.menu_text = '评论和回复';
            break
          case "like":
            self.changePage(name)
            self.menu_text = '点赞';
            break;
          case "follow":
            self.changePage(name)
            self.menu_text = '关注';
            break;
          case "at":
            self.changePage(name)
            self.menu_text = '@我的';
            break;
          default:
            break;
        }
      },
      changePage (cur_name) {
        const self = this
        const len = Object.getOwnPropertyNames(self.m).length
        for (var x in self.m) {
          self.m[x] = false
        }
        if (cur_name in self.m) {
          self.m[cur_name] = true
        }
      }
    },
    name: 'Message'
  }
</script>

<style scoped>
.message {
  height: 100%;

}
  .message-header {
    z-index: 9999;
    background: #ffffff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 40px;
  }
  .message-header-wrapper {
    width: 100px;
    height: 45px;
    margin: 0 auto;
  }
  .ivu-dropdown {
    margin-top: 10px;
    font-size: 12px;
    font-weight: bold;
    color: #333333;
  }
  .ivu-dropdown-rel a {
    color: #333333;
  }
</style>
