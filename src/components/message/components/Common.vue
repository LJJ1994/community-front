<template>
    <div class="comments">
      <ul class="comments-wrapper">
        <li class="comments-item">
          <Row>
            <Col span="4"><img src="../../../assets/images/bigboy.svg" alt=""></Col>
            <Col span="14" class="like-item-middle">
              <p class="comments-user-name">屁屁虾000</p>
              <p class="comments-content">不要回复我！不要回复我！不要回复我！不要回复我！</p>
              <p class="comments-time">1小时前</p>
            </Col>
            <Col span="6" class="like-item-right">
              <p class="comments-text" v-if="isText" id="comments">读书必须有用!!!!!!!!!!!!!!!!!!!!</p>
              <img src="../../../assets/images/sprite.png" alt="" v-else>
            </Col>
          </Row>
        </li>
      </ul>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        isText: true
      }
    },
    name: 'Common',
    mounted () {
      this.$nextTick(function () {
        this.handleWord()
      })
    },
    methods: {
      handleWord() {
        var content = document.getElementById('comments')
        content.innerHTML = content.innerHTML.slice(0, 10) + "..."
      }
    }
  }
</script>

<style scoped>
.comments {
  height: 100%;
  margin-top: 50px;
}
  .comments-wrapper {
    max-height: 60px;
    width: 100%;
    overflow: hidden;
  }
  .comments-wrapper img {
    width: 40px;
    height: 40px;
    margin-left: 10px;
  }
  .comments-user-name {
    font-size: 12px;
    font-weight: bold;
  }
  .comments-content {
    overflow: hidden;
    white-space: nowrap;
    text-overflow:ellipsis;
    font-size: 12px;
    margin-top: 2px;
  }
  .comments-time {
    margin-top: 4px;
    font-size: 6px;
  }
  .like-item-right {
    width: 60px;
    height: 60px;
    background: #d9d9d9;
    border-radius: 4px;
    padding: 10px 4px;
    overflow: hidden;
  }
</style>
