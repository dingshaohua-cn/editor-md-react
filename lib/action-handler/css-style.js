// 文字单纯加样式的 比如字体大小、颜色、背景色
var cssStyle = (function (contentParam, selectionParam, fmtStr, otherParam) {
  console.log(fmtStr, otherParam);
  var start = selectionParam.start,
    end = selectionParam.end,
    text = selectionParam.text;
  var content;
  var selection;
  // 正则判断： <span>markdown符号+文本内容+markdown符号</span>
  // 正则表达式模式
  var pattern = new RegExp("<span[^>]*>(\\*{1,2}|_{1,2}|~{2}|`{1})?".concat(text, "\\1</span>"), "g");
  var matches = contentParam.matchAll(pattern);
  var hasWrappMatche = null;
  if (matches) {
    for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
      var match = matches_1[_i];
      // console.log(
      //   `找到匹配 '${match[0]}' 在位置 ${match.index} 到 ${
      //     match.index + match[0].length - 1
      //   }`
      // );
      var testStart = match[0].indexOf(text) + match.index;
      var testEnd = testStart + text.length;
      if (contentParam.substring(testStart, testEnd) === text && testStart === start) {
        // console.log("完全匹配");
        hasWrappMatche = match;
      }
    }
  }
  if (hasWrappMatche) {
    // 说明已经存在样式的span标签 我们直接在上边加样式即可
    var divElement = document.createElement("div");
    // 设置元素内容为DOM字符串
    divElement.innerHTML = hasWrappMatche[0];
    var spanElement = divElement.childNodes[0];
    spanElement.style[fmtStr] = otherParam;
    // 计算出除去匹配到的标签之外的内容
    var one = contentParam.substring(0, hasWrappMatche.index);
    var two = contentParam.substring(hasWrappMatche.index + hasWrappMatche[0].length, contentParam.length);
    content = one + spanElement.outerHTML + two;
    console.log(one.length);
    // 计算出拼接后光标所在位置
    var spanHalfReg = new RegExp("<span[^>]*>(\\*{1,2}|_{1,2}|~{2}|`{1})?");
    selection = {
      start: one.length + spanElement.outerHTML.match(spanHalfReg)[0].length,
      end: one.length + spanElement.outerHTML.match(spanHalfReg)[0].length + text.length
    };
  } else {
    var spanElement = document.createElement("SPAN");
    spanElement.style[fmtStr] = otherParam;
    spanElement.innerHTML = text;
    content = contentParam.slice(0, start) + spanElement.outerHTML + contentParam.slice(end);
    var tempHalf = spanElement.outerHTML.split(text)[0];
    selection = {
      start: start + tempHalf.length,
      end: start + tempHalf.length + text.length
    };
  }
  return {
    content: content,
    selection: selection
  };
});

export { cssStyle as default };
