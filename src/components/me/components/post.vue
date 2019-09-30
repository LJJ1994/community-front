<template>
    <div class="me-profile-post">
      <ul class="post-wrapper" v-for="(item, post_id) in posts" :key="post_id">
        <li class="post-item">
          <div class="item-top">
            <a href=""><img :src="item.avatar_url" alt=""></a>
            <div class="item-top-middle">
              <span>{{ item.username }}</span>
              <div class="item-time-user">
                <span class="time">{{ item.created_time }}</span>
<!--                <span class="user">上海影视文化有限公司</span>-->
              </div>
            </div>
            <cube-button @click="deleteBtn(post_id)" class="post-delete-btn" v-show="isLoginUser">
              <p id="post_id">{{ item.post_id }}</p>
              <img src="../../../assets/images/delete.svg" alt="">
            </cube-button>
          </div>
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
          <div class="item-bottom">
            <ul class="item-bottom-list">
              <li class="item-bottom-like">
                <img src="../../../assets/images/like.svg" alt="">   {{ item.like_counts }}
              </li>
              <li class="item-bottom-unlike">
                <img src="../../../assets/images/unlike.svg" alt=""> 踩</li>
              <li class="item-bottom-comment">
                <img src="../../../assets/images/commen.svg" alt=""> {{ item.comments_counts  }}</li>
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
    name: 'post',
    data () {
      return {
      }
    },
    props: {
      posts: {
        type: Array,
        default () {
          return []
        }
      },
      isLoginUser: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      deleteBtn() {
        const self = this
        const token = window.localStorage.getItem('token')
        self.$createDialog({
          type: 'confirm',
          icon: 'cubeic-alert',
          content: '确定删除吗？',
          confirmBtn: {
            text: '确定',
            active: true,
            disabled: false,
            href: 'javascript:;'
          },
          cancelBtn: {
            text: '取消',
            active: false,
            disabled: false,
            href: 'javascript:;'
          },
          onConfirm: (e) => {
            const postElem = document.getElementById('post_id')
            const post_id = postElem.innerText
            console.log(post_id)

            self.axios({
              url: `/api/post/delete/${post_id}`,
              method: 'post',
              headers: {
                'Authorization': 'Bearer ${token}'
              }
            }).then(res=>{
              if (res.data.errno == '0') {
                self.$Message.success(res.data.errmsg)
                window.location.reload()
              } else {
                self.$Message.error(res.data.errmsg)
              }
            })
            // this.$createToast({
            //   type: 'warn',
            //   time: 1000,
            //   txt: '已删除'
            // }).show()
          },
          onCancel: () => {
            this.$createToast({
              type: 'warn',
              time: 1000,
              txt: '已取消'
            }).show()
          }
        }).show()
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
    margin-top: 8px;
    position: relative;
    overflow: hidden;
  }

  .post-item .item-top a{
    float: left;
    display: block;
    width: 30px;
    height: 30px;
    margin-left: 5px;
    border-radius: 5px;
  }
  .post-item .item-top a img {
    border-radius: 16px;
  }
  .post-item .item-top .item-top-middle {
    float: left;
    width: 200px;
    font-size: 12px;
    height: 25px;
    margin-left: 10px;
    margin-top: 4px;
  }

  .post-item .item-top-middle .item-time-user {
    font-size: 10px;
    color: #9c9c9c;
    margin-top: 5px;
  }

  .post-delete-btn {
    float: right;
    width: 30px;
    height: 20px;
    font-size: 13px;
    padding: 0;
    margin-right: 11px;
    background: #ffffff;
  }

  .post-item .item-top .title-icon {
    color: #8e8383;
    font-size: 16px;
    margin-top: 7px;
    display: inline-block;
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

  .post-item .item-content h4 {
    width: 100%;
    height: 30px;
    overflow: hidden;
    padding-top: 4px;
    font-size: 14px;
    font-weight: bold;
  }

.item-content-video {
    width: 320px;
    height: 100%;
    line-height: 20px;
    overflow: hidden;
    font-size: 14px;
    color: #333333;
    padding-left: 6px;
    padding-right: 6px;
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
  .post-bottom {
    display: block;
    height: 40px;
    padding: 10px 10px;
    font-size: 14px;
    color: #ccc
  }
</style>
