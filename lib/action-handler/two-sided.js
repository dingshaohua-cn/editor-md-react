import { insertStr } from '../helper.js';

// 文字两边加相同的特定符号 比如 加粗、倾斜等
var twoSided = (function (contentParam, selectionParam, fmtStr) {
  var start = selectionParam.start,
    end = selectionParam.end,
    text = selectionParam.text;
  // 存在选中区域
  if (contentParam.substring(start - fmtStr.length, start) === fmtStr && contentParam.substring(end, end + fmtStr.length) === fmtStr) {
    // 取消
    var content = contentParam.substring(0, start - fmtStr.length) + contentParam.substring(start, end) + contentParam.substring(end + fmtStr.length, contentParam.length);
    var selection = {
      start: start - fmtStr.length,
      end: end - fmtStr.length
    };
    return {
      content: content,
      selection: selection
    };
  } else {
    var temp = insertStr(contentParam, start, fmtStr);
    var content = insertStr(temp, end + fmtStr.length, fmtStr);
    var selection = {
      start: start + fmtStr.length,
      end: start + fmtStr.length + text.length
    };
    return {
      content: content,
      selection: selection
    };
  }
});

export { twoSided as default };
