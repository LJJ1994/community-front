<template>
    <div class="me-edit">
      <div class="me-edit-header">
        <Row class="edit-wrapper">
          <Col span="4" class="edit-left">
            <img src="../../../assets/images/kuohao.svg" alt="" @click="goBack">
          </Col>
          <Col span="16" class="edit-center">
            <span class="edit-title">编辑资料</span>
          </Col>
          <Col span="4" class="edit-right">
            <span class="edit-completed" style="color: #ffffff">完成</span>
          </Col>
        </Row>
      </div>
      <div class="edit-avatar">
        <span><img :src="avatar_url" alt=""></span>
        <div class="avatar-upload">
          <Upload
                  :action="uploadUrl"
                  :headers="headers"
                  :name="name"
                  :on-success="onSuccess"
                  :show-upload-list="showUploadList"
                  :on-error="onError"
          >
            <Button icon="ios-cloud-upload-outline">更换头像</Button>
          </Upload>
        </div>
      </div>
      <div class="me-edit-wrapper">
        <form action="" @submit.prevent="editSubmit">
          <label for="nick-name">昵称: </label><br>
          <input type="text" id="nick-name" class="nick-name" v-model="username"><br><br>
          <label for="signature">签名: </label><br>
          <input type="text" id="signature" class="edit-signature" v-model="signature"><br>
          <span class="edit-sex">性别: </span><br>

          <input type="radio" id="one" value="1" v-model="sex" class="sex-man">
          <label for="one">男</label>

          <input type="radio" id="two" value="2" v-model="sex" class="sex-woman">
          <label for="two">女</label>

          <input type="radio" id="three" value="3" v-model="sex" class="sex-alians">
          <label for="three">外星人</label><br>
          <input type="submit" value="完成" class="sub-btn">
        </form>
      </div>
    </div>
</template>

<script>
  import {GetUser, UserEdit} from 'api/api'
  import {ChangeSex} from 'utils/changeSex'

  export default {
    name: 'edit',
    data () {
      const token = window.localStorage.getItem('token')
      return {
        sex: 0,
        username: '',
        signature: '',
        avatar_url: '',

        name: 'avatar',
        showUploadList: false,
        uploadUrl: 'http://127.0.0.1:5000/api/users/avatar',  //后端上传头像api接口
        headers: {
          'Authorization': `Bearer  ${token}`  // 后端api需要登录用户的token
        }
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
      // 头像上传成功时处理函数
      // iview文件上传成功时, 接受从后端发送过来的data
      onSuccess (response, file, fileList) {
        this.$Message.success('上传成功')
        this.avatar_url = response.data.avatar_url
      },
      onError (error, file, fileList) {
        this.$Message.error('上传失败!')
      },
       editSubmit () {
        let data = JSON.stringify({
          'username': this.username,
          'signature': this.signature,
          'value': this.sex
        })
        const user_id = this.$store.state.user.user_id
        UserEdit(user_id, data).then(res => {
          if (res.data.errno == "0") {
            this.$Message.success("编辑成功!")
          } else {
            this.$Message.success("编辑失败!")
          }
        })
      }
    },
    mounted () {
      this.HideFooter()
    },
    created () {
      const self = this
      const user_id = self.$store.state.user.user_id
      GetUser(user_id).then(res=>{
        if (res.data.errno == '0') {
          const data = res.data.data
          self.username = data.username
          self.signature = data.signature
          self.sex = ChangeSex(data.gender)
          self.avatar_url = data.avatar_url
        } else {
          console.log(res.data.errmsg)
        }
      })
    }
  }
</script>

<style scoped>
  .me-edit{
    height: 100%;
  }
.me-edit-header {
  z-index: 999;
  background: #ffffff;
  height: 60px;
}
  .edit-wrapper{
    width: 100%;
    height: 100%;
  }
  .edit-left {
    height: 60px;
  }
  .edit-center {
    height: 60px;
  }
  .edit-right{
    height: 60px;
  }
  .edit-title{
    display: block;
    text-align: center;
    margin-top: 20px;
    font-size: 14px;
    font-weight: bold;
  }
  .edit-right {
    text-align: center;
    margin-top: 20px;
    color: #ff4b69;
    font-size: 15px;
  }
  .edit-avatar {
   height: 100%;
  }
  .avatar-upload {
    margin-left: 116px;
    margin-top: 16px;
    width: 50px;
    height: 50px;
  }
  .edit-avatar span {
    margin-left: 127px;
    display: inline-block;
    height: 80px;
    width: 80px;
  }
  .edit-avatar img{
    width: 100%;
    height: 100%;
    border-radius: 40px;
  }
  .me-edit-wrapper {
    height: 400px;
    margin-left: 15px;
  }
  .nick-name {
    margin-top: 10px;
    width: 300px;
    border-style: none;
    border-bottom: 1px solid #d9d9d9;
    padding-bottom: 5px;
    outline: none;
  }
  .edit-signature {
    margin-top: 10px;
    width: 300px;
    border-style: none;
    border-bottom: 1px solid #d9d9d9;
    padding-bottom: 5px;
    outline: none;
  }
  .edit-sex {
    display: block;
    margin-top: 10px;
    color: #333333;
  }
  .sex-man,
  .sex-woman,
  .sex-alians {
    margin-left: 40px;
  }
  .sub-btn {
    margin-top: 30px;
    margin-left: 120px;
    display: block;
    padding: 6px 15px;
    border-radius: 4px;
    border: 1px solid #ff4b69;
    color: #ff4b69;
    background: #ffffff;
    outline: none;
  }
</style>
