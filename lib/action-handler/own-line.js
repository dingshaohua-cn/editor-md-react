var ownLine = (function (contentParam, selectionParam, fmtStr) {
  var lastOneIsWrap = contentParam[contentParam.length - 1] === "\n";
  var content = contentParam + (lastOneIsWrap ? "" : "\n") + "***" + "\n";
  var selection = {
    start: selectionParam.start + content.length,
    end: selectionParam.start + content.length
  };
  return {
    content: content,
    selection: selection
  };
});

export { ownLine as default };
