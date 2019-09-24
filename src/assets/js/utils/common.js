// js读取cookie的方法
function GetCookie(name) {
  var r = document.cookie.match("\\b" + name + "=([^;]*)\\b");
  return r ? r[1] : undefined;
}

export {
  GetCookie
}
