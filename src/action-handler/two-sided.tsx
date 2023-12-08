import { insertStr } from "../helper";

// 文字两边加相同的特定符号 比如 加粗、倾斜等
export default (contentParam: string, selectionParam, fmtStr) => {
  const { start, end, text } = selectionParam;
  // 存在选中区域
  if (
    contentParam.substring(start - fmtStr.length, start) === fmtStr &&
    contentParam.substring(end, end + fmtStr.length) === fmtStr
  ) {
    // 取消
    const content =
      contentParam.substring(0, start - fmtStr.length) +
      contentParam.substring(start, end) +
      contentParam.substring(end + fmtStr.length, contentParam.length);
    const selection = {
      start: start - fmtStr.length,
      end: end - fmtStr.length,
    };
    return {
      content,
      selection,
    };
  } else {
    const temp = insertStr(contentParam, start, fmtStr);
    const content = insertStr(temp, end + fmtStr.length, fmtStr);
    const selection = {
      start: start + fmtStr.length,
      end: start + fmtStr.length + text.length,
    };
    return {
      content,
      selection,
    };
  }
};
