<template>
    <div class="category">
      <div class="category-header">
        <input type="text" placeholder="搜索话题" name="search-btn" class="search-btn" v-model="searchInput">
        <button type="button" class="cancel-btn" @click.prevent="goBack">取消</button>
      </div>
      <div class="category-wrapper">
        <ul class="category-group" v-for="(item, id) in category" :key="id">
          <li class="category-item">
            <span class="item-left">
              <img src="../../../assets/images/avator.svg" alt="">
            </span>
            <div class="item-middle">
              <p class="item-middle-tile">{{ item.name }}</p>
              <p class="item-middle-hot">{{ item.comment_count }}条热门内容</p>
            </div>
            <input type="text" v-model="category_id" class="item-right-select">
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'category',
    data() {
      return {
        searchInput: '',
        category_id: '选我',
        category: []
      };
    },
    methods: {
      goBack () {
        this.$router.back()
      },
      GetCategory () {
        const self = this
        const token = window.localStorage.getItem('token')
        self.axios({
          url: `/api/category`,
          method: 'get',
          headers: {
            'Authorization': `Bearer  ${token}`,
            'Content-Type': 'application/json'
          }
        }).then(res => {
          if (res.data.errno == '0') {
            const data = res.data.data
            self.category = data
            console.log(self.category)
          } else {
            self.$Message.error(res.data.errmsg)
          }
        })
      }
    },
    created () {
      this.GetCategory()
    }
  }
</script>

<style scoped>
.category {
  height: 100%;
}
  .category-header {
    height: 40px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: #ffffff;
    z-index: 999;
    overflow: hidden;
  }
  .search-btn{
    float: left;
    display: inline-block;
    height: 30px;
    width: 240px;
    margin-top: 5px;
    margin-left: 15px;
    border-radius: 4px;
    background: #d2d0d0;
    color: #333333;
    padding: 2px 4px;
    outline: none;
  }
  .cancel-btn {
    float: right;
    margin-top: 12px;
    margin-right: 18px;
    font-size: 14px;
    display: inline-block;
    border: none;
    background: #ffffff;
    color: #333333;
    outline: none;
  }
  .category-wrapper {
    margin-top: 50px;
    height: 100%;
  }
  .category-group {
    margin: 0 10px;
    height: 100%;
  }
  .category-item {
    height: 55px;
    width: 300px;
    display: inline-block;
    overflow: hidden;
    position: relative;
    border-bottom: 1px solid #f9ecec;
  }
  .item-left {
    float: left;
    display: inline-block;
    margin-top: 5px;
    margin-left: 3px;
    border-radius: 4px;
    width: 40px;
    height: 40px;
  }
  .item-middle {
    margin-left: 15px;
    margin-top: 5px;
    float: left;
    height: 40px;
  }
  .item-middle-tile {
    font-size: 14px;
  }
  .item-middle-hot {
    margin-top: 10px;
    font-size: 12px;
    color: #716e6e;
  }
  .item-right-select {
    float: right;
    margin-top: 10px;
    width: 40px;
    height: 20px;
    border: 1px solid #ff4b69;
    border-radius: 4px;
    color: #ff4b69;
    padding: 2px 2px;
    outline: none;
  }
</style>
