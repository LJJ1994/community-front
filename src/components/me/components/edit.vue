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
        <img src="../../../assets/images/gilr1.svg" alt="">
      </div>
      <div class="me-edit-wrapper">
        <form action="">
          <label for="nick-name">昵称: </label><br>
          <input type="text" id="nick-name" name="name" class="nick-name" v-model="nickName"><br><br>
          <label for="signature">签名: </label><br>
          <input type="text" id="signature" name="signature" class="edit-signature" v-model="signature"><br>
          <span class="edit-sex">性别: </span><br>

          <input type="radio" id="one" value="1" v-model="picked" class="sex-man">
          <label for="one">女</label>

          <input type="radio" id="two" value="2" v-model="picked" class="sex-woman">
          <label for="two">男</label>

          <input type="radio" id="three" value="3" v-model="picked" class="sex-alians">
          <label for="three">外星人</label><br>
          <input type="submit" value="完成" class="sub-btn">
        </form>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'edit',
    data () {
      return {
        picked: '',
        nickName: '我是一只猪',
        signature: '我才不是猪呢,　嘤嘤嘤',
      }
    },
    methods: {
      HideFooter () {
        this.$store.state.footer.isShow = false
      },
      goBack () {
        this.$router.back()
        this.$store.state.footer.isShow = true

      }
    },
    mounted () {
      this.HideFooter()
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
   height: 90px;
  }
  .me-edit-wrapper {
    height: 400px;
    margin-top: 20px;
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
