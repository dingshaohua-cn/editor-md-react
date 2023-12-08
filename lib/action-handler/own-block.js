var ownBlock = (function (contentParam, selectionParam, fmtStr) {
  console.log(selectionParam);
  var content;
  if (selectionParam.text) {
    var one = contentParam.substring(0, selectionParam.start);
    var two = contentParam.substring(selectionParam.end, contentParam.length);
    var oneLastOneIsWrap = one[one.length - 1] === "\n";
    var twoFirstOneIsWrap = two[0] === "\n";
    content = one + (oneLastOneIsWrap ? "" : "\n") + "```" + "\n" + selectionParam.text + "\n" + "```" + (twoFirstOneIsWrap ? "" : "\n") + two;
  } else {
    var lastOneIsWrap = contentParam[contentParam.length - 1] === "\n";
    content = contentParam + (lastOneIsWrap ? "" : "\n");
    content = content + "```" + "\n\n" + "```";
  }
  var selection = {
    start: selectionParam.start + content.length,
    end: selectionParam.start + content.length
  };
  return {
    content: content,
    selection: selection
  };
});

export { ownBlock as default };
