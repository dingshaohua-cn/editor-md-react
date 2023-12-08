import { insertStr } from "../helper";

   // 诸如 标题等  只在前边加符号 且换行的格式
    export default (contentParam: string, selectionParam, fmtStr, otherParam) => {
      const fmtStrs = new Array(Number(otherParam.value)).fill(fmtStr).join("")
      let content = insertStr(contentParam, selectionParam.start, `\n${fmtStrs} `);
      const selection = {
        start: selectionParam.start + content.length,
        end: selectionParam.start + content.length,
      };
      return {content, selection}
    };
