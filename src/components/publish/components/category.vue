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
            <div class="item-right-select">
              <label :for="item.category_id" v-show="!hasSelected">选我</label>
              <label :for="item.category_id" v-show="hasSelected">不选我</label>
              <input type="radio"
                     v-model="picked"
                     :id="item.category_id"
                     :value="item.category_id"
                     @change="selectHandler(item.name)"
                     class="item-right-select-btn">
            </div>
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
        hasSelected: false,
        picked: '',
        category: [],
      };
    },
    methods: {
      goBack () {
        this.$destroy()
        this.$router.go(-1)
      },
      selectHandler (e) {
        console.log('e是什么',e) // 给绑定的处理函数传入category_name, 那么这里的e就是传入的参数, 然后触发vuex中的ChangeCategoryName函数,更新相应的值
        console.log('pick id', this.picked)
        // 因为用户只能选择一个话题, 那么用户在选择某个话题后, 直接跳转到发布页面
        // 考虑用户可能不选择话题直接发布, 那么picked数组最多只有一个元素, 1: 要么选择一个话题 0: 要么不选择话题
        // 同时更新vuex中的category_id, category_name, 以便发布页面的选择话题的相应属性能够实时更新

        let category_name = e ? e : '添加话题'
        this.$store.commit('ChangeCategoryName', category_name)
        this.$store.commit('ChangeCategoryId', this.picked)
        this.$destroy()
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
  .item-right-select-btn {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }
</style>
