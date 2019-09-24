<template>
    <div class="register">
      <div class="register-header">
        <span class="register-back" @click="goBack">返回上一步</span>
        <p>注册</p>
      </div>
      <div class="register-phone">
        <form>
          <input type="text" id="phone" v-model="mobile" class="mobile" placeholder="请输入手机号">
          <input type="submit" v-model="getSms" class="get-sms" @click.prevent="GetSmsCode" :disabled="isEnabledBtn">
          <p class="err-msg">{{ errMsg }}</p>
        </form>
      </div>
      <div class="register-form">
        <form action="">
          <label for="sms">验证码:</label><br>
          <input type="text" v-model="smsCode" id="sms" class="sms-code"><br>
<!--          <label for="user">用户名</label><br>-->
<!--          <input type="text" id="user" v-model="username" class="username"><br>-->
          <label for="pass1">密码:</label><br>
          <input type="password" id="pass1" v-model="password" class="password1"><br>
          <label for="pass2">重复密码: </label><br>
          <input type="password" id="pass2" v-model="password2" class="password2"><br>
          <input type="submit" value="点击注册" class="register-btn" @click.prevent="Register">
        </form>
      </div>
    </div>
</template>

<script>
  import { GetCookie } from '../../../assets/js/utils/common.js'
  export default {
    name: 'register',
    data () {
      return {
        isEnabledBtn: false,
        getSms: '发送验证码',
        mobile: '',
        errMsg: '',
        smsCode: null,
        username: '',
        password: '',
        password2: ''
      }
    },
    methods: {
      goBack () {
        this.$router.push('/me/login')
      },
      HideFooter () {
        this.$store.state.footer.isShow = false
      },
      CheckPhone (val) {
        let mobile = this.mobile.toString()
        if (!/^1[3456789]\d{9}$/.test(mobile)) {
          this.errMsg = '* 请输入格式正确的手机号'
        }
      },
      GetSmsCode (e) {
        var self = this
        var mobileVal = this.mobile
        self.CheckPhone(mobileVal)

        this.axios({
          method: 'get',
          url: "/api/sms_codes/" + mobileVal
        }).then(function (res) {
          if (res.data.errno == "0") {
            var num = 60
            var timer = setInterval(function () {
              if (num >= 1) {
                self.getSms = num + '秒'
                num -= 1
                self.isEnabledBtn = true
              } else {
                self.getSms = '发送验证码'
                clearInterval(timer)
                self.isEnabledBtn = false
              }
            }, 1000, 60)
          } else {
            alert(res.data.errmsg)
          }
        })
      },
      Register (e) {
        var self = this
        var data = {
          "mobile": self.mobile,
          "sms_code": self.smsCode,
          "password": self.password,
          "password2": self.password2
        }
        this.axios({
          method: 'post',
          data: data,
          url: '/api/users/signup',
          headers: {
            "X-CSRFToken": GetCookie("csrf_token")
          }
        }).then(function (res) {
          console.log(res.data)
        }).catch(function (res) {
          alert(res)
        })
      }
    },
    mounted () {
      this.HideFooter()
    }
  }
</script>

<style scoped>
.register {
  height: 100%;
}
  .register-header {
    height: 40px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
  .register-header span{
    display: inline-block;
    font-size: 14px;
    color: #ff4b69;
    margin-left: 10px;
    margin-top: 10px;
  }
  .register-header p {
    display: inline-block;
    margin-left: 80px;
    margin-top: 10px;
    font-size: 16px;
    font-weight: bold;
  }
  .register-phone {
    margin-top: 150px;
    margin-left: 50px;
  }
  .get-sms {
    outline: none;
    margin-left: 5px;
    border-style: none;
    background: #d9d9d9;
    color: #333333;
    width: 80px;
    height: 30px;
  }
  .err-msg {
    margin-top: 4px;
    height: 20px;
    width: 200px;
    font-size: 10px;
    color: #ff2c43;
  }
  .register-form {
    margin-top: 10px;
    margin-left: 50px;
  }
  .sms-code {
    outline: none;
    border-radius: 2px;
    border: 1px solid #878787;
    width: 150px;
    height: 25px;
  }
  .mobile {
    outline: none;
    border-radius: 2px;
    border: 1px solid #878787;
    width: 150px;
    height: 25px;
  }
  .username {
    outline: none;
    border-radius: 2px;
    border: 1px solid #878787;
    width: 150px;
    height: 25px;
  }
  .password1 {
    outline: none;
    border-radius: 2px;
    border: 1px solid #878787;
    width: 150px;
    height: 25px;
  }
  .password2 {
    outline: none;
    border-radius: 2px;
    border: 1px solid #878787;
    width: 150px;
    height: 25px;
  }
  .register-btn {
    outline: none;
    margin-top: 10px;
    border-style: none;
    background: #d9d9d9;
    color: #333333;
    width: 80px;
    height: 30px;
  }
</style>
