<template>
    <div class="login">
      <div class="login-header">
        <span class="login-back" @click="goBack"><img src="../../../assets/images/delete1.svg" alt=""></span>
        <router-link to="/me/register">
          <span class="login-btn">注册</span>
        </router-link>
      </div>
      <h2 class="login-title">登录</h2>
      <div class="login-group">
        <form action="">
          <label for="username" class="username-label">用户名</label><br>
          <input type="text" id="username" name="username" class="username"><br>
          <label for="pass" class="password-label">密码</label><br>
          <input type="password" id="pass" name="password" class="password"><br>
          <input type="submit" value="登录" class="signup-btn">
        </form>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'login',
    methods: {
      HideFooter () {
        this.$store.state.footer.isShow = false
      },
      goBack () {
        this.$store.state.footer.isShow = true
        this.$router.push({path: '/me'})
      }
    },
    mounted () {
      this.HideFooter()
    }
  }
</script>

<style scoped>
.login {
  height: 100%;
}
  .login-header {
    height: 40px;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
  }
  .login-header span {
    display: inline-block;
  }
  .login-back {
    margin-left: 5px;
    margin-top: 5px;
    float: left;
    height: 30px;
    width: 30px;
  }
  .login-btn {
    float: right;
    margin-right: 10px;
    margin-top: 10px;
    font-size: 16px;
    color: #ff4b69;
  }
  .login-title {
    margin-top: 10px;
    margin-left: 130px;
    font-size: 16px;
    font-weight: bold;
  }
  .login-group {
    margin-top: 100px;
    margin-left: 85px;
  }
  .username-label {
    color: #ff4b69;
    font-size: 15px;
  }
  .username {
    margin-top: 10px;
    margin-bottom: 10px;
    width: 150px;
    height: 25px;
    border-radius: 3px;
    outline: none;
    border: 2px solid #d9d9d9;
  }
  .password-label {
    margin-top: 10px;
    color: #ff4b69;
    font-size: 15px;
  }
  .password {
    margin-top: 5px;
    width: 150px;
    height: 25px;
    border-radius: 3px;
    outline: none;
    border: 2px solid #d9d9d9;
  }
  .signup-btn {
    margin-top: 10px;
    border: 2px solid #d9d9d9;
    outline: none;
    padding: 5px 10px;
    border-radius: 2px;
  }
</style>
