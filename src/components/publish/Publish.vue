<template>
    <div class="publish">
      <div class="publish-wrapper">
        <div class="publish-header">
          <span><img src="../../assets/images/kuohao.svg" alt="" @click.prevent="goBack"></span>
        </div>
        <div class="publish-body">
          <form ref="upload" enctype=”multipart/form-data”>
            <cube-textarea v-model="content" :maxlength="maxlength" placeholder="输入要说的话~"></cube-textarea>
            <input type="text" class="category-btn" v-model="category_id">
            <router-link :to="{name: 'PublishCategory'}">
              <button class="select-category" v-model="category_id">{{ selectCate }}</button>
            </router-link>
            <input type="file" id="files" name="file" class="publish-file" multiple="multiple"><br>
            <label for="files" class="publish-file-btn">添加图片</label>
            <input type="submit" class="publish-btn" value="发布" @click.prevent="uploadHandler">
          </form>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'Publish',
    data () {
      return {
        content: '',
        maxlength: 120,
        category_id: 2,
        selectCate: '单曲循环'
      }
    },
    methods: {
      goBack () {
        this.$router.back()
      },
      uploadHandler () {
        const self = this
        var upload = this.$refs.upload
        var formData = new FormData(upload)
        const token = window.localStorage.getItem('token')
        formData.append("content", this.content)
        formData.append("category_id", this.category_id)
        self.axios({
          url: '/api/post/publish',
          method: 'post',
          data: formData,
          headers: {
            'Authorization': `Bearer  ${token}`,
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
          }
        }).then(res=>{
          if (res.data.errno == '0') {
            self.$Message.success({
              duration: 2,
              content: res.data.errmsg,
              onClose: function () {  // 发送帖子成功时的回调
                self.$router.push('/')
              }
            })
          } else {
            self.$Message.warning(res.data.errmsg)
          }
        })
      }
    }
  }
</script>

<style scoped>
  .publish {
    height: 100%;
  }
  .publish-wrapper {
    height: 100%;
  }
  .publish-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 40px;
    background: #ffffff;
  }
  .publish-header span {
    display: inline-block;
    width: 40px;
    height: 40px;
  }
  .publish-header img{
    width: 100%;
    height: 100%;
  }

  .publish-body {
    margin-top: 50px;
  }
  .cube-textarea-wrapper {
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;
  }
  .category-btn {
    display: none;
  }
  .select-category {
    outline: none;
    display: inline-block;
    margin-top: 9px;
    margin-left: 14px;
    margin-bottom: 10px;
    border-radius: 10px;
    border: 1px solid #ff4b69;
    color: #ff4b69;
    background: #ffffff;
    padding: 2px 5px;
    font-size: 13px;
  }
  .publish-btn {
    display: block;
    outline: none;
    position: fixed;
    top: 12px;
    right: 20px;
    background: #ff4b69;
    color: #ffffff;
    font-weight: bold;
    font-size: 13px;
    padding: 5px 10px;
    border-radius: 5px;
  }
  .publish-file {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }
  .publish-file-btn {
    display: inline-block;
    height: 100px;
    width: 100px;
    padding: 34px 22px;
    border: 2px solid #878787;
    border-radius: 5px;
    margin-left: 10px;
  }
  /*动画部分*/
  @-webkit-keyframes fadeInDown {
    0% {
      opacity: .5;
      transform: translateY(-100px);
      -webkit-transform: translateY(-100px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
      -webkit-transform: translateY(0);
    }
  }
  @keyframes fadeInDown {
    0% {
      opacity: .5;
      transform: translateX(100px);
      -ms-transform: translateX(100px);
      -webkit-transform: translateX(100px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
      -ms-transform: translateX(0);
      -webkit-transform: translateX(0);
    }
  }
  .fadeInDown {
    animation: fadeInDown .5s;
    -webkit-animation: fadeInDown .5s;
  }
  @-webkit-keyframes fadeOutTop {

  }
  @keyframes fadeOutTop {
    0% {
      opacity: 1;
      transform: translateX(0);
      -webkit-transform: translateX(0);
      -ms-transform: translateX(0);
    }
    100% {
      opacity: 0;
      transform: translateX(-100px);
      -webkit-transform: translateX(-100px);
      -ms-transform: translateX(-100px);
    }
  }
  @-webkit-keyframes fadeOutTop {
    0% {
      opacity: 1;
      transform: translateY(0);
      -webkit-transform: translateY(0);
    }
    100% {
      opacity: 0;
      transform: translateY(-100px);
      -webkit-transform: translateY(-100px);
    }
  }
  .fadeOutTop {
    animation: fadeOutTop .5s;
    -webkit-animation: fadeOutTop .5s;
  }
</style>
