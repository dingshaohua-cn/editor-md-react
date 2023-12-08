import { insertStr } from "../helper";

// 诸如 标题等  只在前边加符号 且换行的格式
export default (contentParam: string, selectionParam, fmtStr) => {
  const temp = insertStr(contentParam, selectionParam.start, `<${fmtStr}>`);
  const content = insertStr(temp, selectionParam.end + fmtStr.length + 2, `</${fmtStr}>`);
  const selection = {
    start: selectionParam.start,
    end: selectionParam.start + content.length,
  };
  return {
    content,
    selection
  }
};
