<template>
    <div class="follow">
        <ul class="follow-list">
          <li class="follow-item">
            <Row>
              <Col span="4"><img src="../../../assets/images/gilr1.svg" alt=""></Col>
              <Col span="16">
                <div class="follow-item-middle">
                  <span class="follow-item-middle-name">{{ followerName }}</span> 关注了你
                  <p class="follow-time">1小时前</p>
                </div>
              </Col>
              <Col span="4">
                <span class="follow-btn">关注</span>
              </Col>
            </Row>
          </li>
          <li class="follow-item">
            <Row>
              <Col span="4"><img src="../../../assets/images/gilr1.svg" alt=""></Col>
              <Col span="16">
                <div class="follow-item-middle">
                  <span class="follow-item-middle-name">{{ followerName }}</span> 关注了你
                  <p class="follow-time">1小时前</p>
                </div>
              </Col>
              <Col span="4">
                <span class="follow-btn">关注</span>
              </Col>
            </Row>
          </li>
          <li class="follow-item">
            <Row>
              <Col span="4"><img src="../../../assets/images/gilr1.svg" alt=""></Col>
              <Col span="16">
                <div class="follow-item-middle">
                  <span class="follow-item-middle-name">{{ followerName }}</span> 关注了你
                  <p class="follow-time">1小时前</p>
                </div>
              </Col>
              <Col span="4">
                <span class="follow-btn">关注</span>
              </Col>
            </Row>
          </li>
          <li class="follow-item">
            <Row>
              <Col span="4"><img src="../../../assets/images/gilr1.svg" alt=""></Col>
              <Col span="16">
                <div class="follow-item-middle">
                  <span class="follow-item-middle-name">{{ followerName }}</span> 关注了你
                  <p class="follow-time">1小时前</p>
                </div>
              </Col>
              <Col span="4">
                <span class="follow-btn">关注</span>
              </Col>
            </Row>
          </li>
          <li class="follow-item">
            <Row>
              <Col span="4"><img src="../../../assets/images/gilr1.svg" alt=""></Col>
              <Col span="16">
                <div class="follow-item-middle">
                  <span class="follow-item-middle-name">{{ followerName }}</span> 关注了你
                  <p class="follow-time">1小时前</p>
                </div>
              </Col>
              <Col span="4">
                <span class="follow-btn">关注</span>
              </Col>
            </Row>
          </li>
          <li class="follow-item">
            <Row>
              <Col span="4"><img src="../../../assets/images/gilr1.svg" alt=""></Col>
              <Col span="16">
                <div class="follow-item-middle">
                  <span class="follow-item-middle-name">{{ followerName }}</span> 关注了你
                  <p class="follow-time">1小时前</p>
                </div>
              </Col>
              <Col span="4">
                <span class="follow-btn">关注</span>
              </Col>
            </Row>
          </li>
          <li class="follow-item">
            <Row>
              <Col span="4"><img src="../../../assets/images/gilr1.svg" alt=""></Col>
              <Col span="16">
                <div class="follow-item-middle">
                  <span class="follow-item-middle-name">{{ followerName }}</span> 关注了你
                  <p class="follow-time">1小时前</p>
                </div>
              </Col>
              <Col span="4">
                <span class="follow-btn">关注</span>
              </Col>
            </Row>
          </li>
          <li class="follow-item">
            <Row>
              <Col span="4"><img src="../../../assets/images/gilr1.svg" alt=""></Col>
              <Col span="16">
                <div class="follow-item-middle">
                  <span class="follow-item-middle-name">{{ followerName }}</span> 关注了你
                  <p class="follow-time">1小时前</p>
                </div>
              </Col>
              <Col span="4">
                <span class="follow-btn">关注</span>
              </Col>
            </Row>
          </li>
          <li class="follow-item">
            <Row>
              <Col span="4"><img src="../../../assets/images/gilr1.svg" alt=""></Col>
              <Col span="16">
                <div class="follow-item-middle">
                  <span class="follow-item-middle-name">{{ followerName }}</span> 关注了你
                  <p class="follow-time">1小时前</p>
                </div>
              </Col>
              <Col span="4">
                <span class="follow-btn">关注</span>
              </Col>
            </Row>
          </li>
          <li class="follow-item">
            <Row>
              <Col span="4"><img src="../../../assets/images/gilr1.svg" alt=""></Col>
              <Col span="16">
                <div class="follow-item-middle">
                  <span class="follow-item-middle-name">{{ followerName }}</span> 关注了你
                  <p class="follow-time">1小时前</p>
                </div>
              </Col>
              <Col span="4">
                <span class="follow-btn">关注</span>
              </Col>
            </Row>
          </li>

          <li class="follow-item">
            <Row>
              <Col span="24">
                <span class="follow-item-no-content">
                  @~@ 没有更多内容了~~~~~
                </span>
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
        followerName: '我不是皮皮虾2333'
      }
    },
    name: 'Follow'
  }
</script>

<style scoped>
.follow {
  margin-top: 49px;
  height: 100%;
  margin-bottom: 50px;
}
  .follow-list {
    height: 100%;
  }
  .follow-item {
    width: 100%;
    height: 60px;
  }
  .follow-item img {
    width: 40px;
    height: 40px;
    padding: 0 4px;
  }
  .follow-item-middle {
    margin-top: 5px;
  }
  .follow-item-middle-name {
    font-size: 13px;
    font-weight: bold;
    margin-right: 7px;
  }
  .follow-time {
    margin-top: 3px;
    font-size: 5px;
  }
  .follow-btn {
    display: block;
    margin-top: 10px;
    border: 1px solid #ff4b69;
    color: #ff4b69;
    margin-right: 10px;
    padding-left: 7px;
    border-radius: 4px;
  }
  .follow-item-no-content {
    margin-left: 50px;
    margin-top: 30px;
    font-size: 10px;
    color: #9c9c9c;
  }
</style>
