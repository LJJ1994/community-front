// 将后端返回的性别字符串改为相应的数字
// 1:MAN 2:WOMAN 3:Aliens
export const ChangeSex = (params) => {
  if (params) {
    if (params=='MAN') {
      return 1
    } else if (params=='WOMAN') {
      return 2
    } else {
      return 3
    }
  } else {
    return ''
  }
}
