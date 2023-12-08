// 文字单纯加样式的 比如字体大小、颜色、背景色
export default (contentParam: string, selectionParam, fmtStr, otherParam) => {
  console.log(fmtStr, otherParam);

  const { start, end, text } = selectionParam;
  let content;
  let selection;
  // 正则判断： <span>markdown符号+文本内容+markdown符号</span>
  // 正则表达式模式
  const pattern = new RegExp(
    `<span[^>]*>(\\*{1,2}|_{1,2}|~{2}|\`{1})?${text}\\1<\/span>`,
    "g"
  );
  const matches = contentParam.matchAll(pattern);
  let hasWrappMatche = null;
  if (matches) {
    for (const match of matches) {
      // console.log(
      //   `找到匹配 '${match[0]}' 在位置 ${match.index} 到 ${
      //     match.index + match[0].length - 1
      //   }`
      // );
      const testStart = match[0].indexOf(text) + match.index;
      const testEnd = testStart + text.length;
      if (contentParam.substring(testStart, testEnd) === text && testStart === start) {
        // console.log("完全匹配");
        hasWrappMatche = match;
      }
    }
  }

  if (hasWrappMatche) {
    // 说明已经存在样式的span标签 我们直接在上边加样式即可
    const divElement = document.createElement("div");
    // 设置元素内容为DOM字符串
    divElement.innerHTML = hasWrappMatche[0];
    const spanElement: HTMLSpanElement = divElement.childNodes[0];
    spanElement.style[fmtStr] = otherParam;

    // 计算出除去匹配到的标签之外的内容
    const one = contentParam.substring(0, hasWrappMatche.index);
    const two = contentParam.substring(
      hasWrappMatche.index + hasWrappMatche[0].length,
      contentParam.length
    );
    content = one + spanElement.outerHTML + two;
    console.log(one.length);
    

    // 计算出拼接后光标所在位置
    const spanHalfReg = new RegExp(`<span[^>]*>(\\*{1,2}|_{1,2}|~{2}|\`{1})?`);
    selection = {
      start: one.length+(spanElement.outerHTML).match(spanHalfReg)[0].length,
      end: one.length+(spanElement.outerHTML).match(spanHalfReg)[0].length + text.length,
    };
  } else {
    const spanElement: HTMLSpanElement = document.createElement("SPAN");
    spanElement.style[fmtStr] = otherParam;
    spanElement.innerHTML = text;
    content =
      contentParam.slice(0, start) +
      spanElement.outerHTML +
      contentParam.slice(end);
    const tempHalf = spanElement.outerHTML.split(text)[0];
    selection = {
      start: start + tempHalf.length,
      end: start + tempHalf.length + text.length,
    };
  }

  return {
    content,
    selection,
  };
};
