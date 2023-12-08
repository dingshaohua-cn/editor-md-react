import { insertStr } from '../helper.js';

// 诸如 标题等  只在前边加符号 且换行的格式
var oneSided = (function (contentParam, selectionParam, fmtStr, otherParam) {
  var fmtStrs = new Array(Number(otherParam.value)).fill(fmtStr).join("");
  var content = insertStr(contentParam, selectionParam.start, "\n".concat(fmtStrs, " "));
  var selection = {
    start: selectionParam.start + content.length,
    end: selectionParam.start + content.length
  };
  return {
    content: content,
    selection: selection
  };
});

export { oneSided as default };
