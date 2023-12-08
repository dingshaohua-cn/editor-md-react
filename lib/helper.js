// 记录光标选中的信息
var textSelect = function (node) {
  var _a = node.target,
    start = _a.selectionStart,
    end = _a.selectionEnd;
  return {
    start: start,
    end: end,
    text: node.target.value.slice(start, end)
  };
};
/**
 * 指定位置插入字符
 * @param str 需要被插入的原始字符串
 * @param index 位置
 * @param insertStr 需要插入的
 * @returns
 */
var insertStr = function (str, index, insertStr) {
  var ary = str.split(""); // 转化为数组
  ary.splice(index, 0, insertStr); // 使用数组方法插入字符串
  return ary.join(""); // 拼接成字符串后输出
};

export { insertStr, textSelect };
