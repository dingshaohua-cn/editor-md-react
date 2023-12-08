export default (contentParam: string, selectionParam, fmtStr) => {
  const lastOneIsWrap = contentParam[contentParam.length - 1] === "\n";
  const content = contentParam + (lastOneIsWrap ? "" : "\n") + `***` + "\n";
  const selection = {
    start: selectionParam.start + content.length,
    end: selectionParam.start + content.length,
  };
  return {
    content,
    selection,
  };
};
