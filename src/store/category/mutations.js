import {ChangeCategoryId, ChangeCategoryName, ChangeSelected, DestroyCategory } from './mutation-types'

export default {
  [ChangeCategoryId] (state, category_id) {
    state.category_id = category_id ? category_id : 0
  },
  [ChangeCategoryName] (state, category_name) {
    state.category_name = category_name
  },
  [ChangeSelected] (state, bool) {
    state.isSelected = bool
  },
  [DestroyCategory] (state) {
    state.category_id = 0
    state.category_name = '添加话题'
  }
}
