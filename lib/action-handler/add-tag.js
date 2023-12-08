import { insertStr } from '../helper.js';

// 诸如 标题等  只在前边加符号 且换行的格式
var addTag = (function (contentParam, selectionParam, fmtStr) {
  var temp = insertStr(contentParam, selectionParam.start, "<".concat(fmtStr, ">"));
  var content = insertStr(temp, selectionParam.end + fmtStr.length + 2, "</".concat(fmtStr, ">"));
  var selection = {
    start: selectionParam.start,
    end: selectionParam.start + content.length
  };
  return {
    content: content,
    selection: selection
  };
});

export { addTag as default };
