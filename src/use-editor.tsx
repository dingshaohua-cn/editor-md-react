import React, { useState } from "react";
import { insertStr, toHump, setSelectionRange } from "./helper";
import addTag from "./action-handler/add-tag";
import cssStyle from "./action-handler/css-style";
import oneSided from "./action-handler/one-sided";
import ownBlock from "./action-handler/own-block";
import ownLine from "./action-handler/own-line";
import twoSided from "./action-handler/two-sided";
import uploadFile from "./action-handler/upload-file";

const actionHandlers = {
  addTag,
  cssStyle,
  oneSided,
  ownBlock,
  ownLine,
  twoSided,
  uploadFile,
};

// 动态导入action-handler的所有模块
// const actionHandlersImport = import.meta.glob("./action-handler/*.tsx", {
//   eager: true,
// });
// const actionHandlers = {};
// for (const path in actionHandlersImport) {
//   const moduleName = toHump(path.match(/.*\/(.+).tsx$/)[1]);
//   const moduleConent = actionHandlersImport[path].default;
//   actionHandlers[moduleName] = moduleConent;
// }

// 功能工具栏 需要处理md的方式分类
const fmtTypesGroup = {
  twoSided: {
    // 两侧有md符号
    bold: "**",
    italic: "*",
    strickout: "~~",
  },
  cssStyle: {
    // 样式
    color: "color",
    backgroundColor: "background-color",
    fontSize: "font-size",
  },
  oneSided: {
    // 只有一侧有md符号
    headers: "#",
  },
  addTag: {
    //新加个元素包裹
    underline: "u",
  },
  ownLine: {
    // 单独站一行
    splitLine: "---",
  },
  ownBlock: {
    // 独占一块
    codeView: "```",
  },
};

export default function Editor(props) {
  const [element, setElement] = useState();
  const [content, setContent] = useState(props.content);
  const [selection, setSelection] = useState<any>({});
  const [uploadUrl, setUploadUrl] = useState<any>(props.uploadUrl);

  /**
   * 设置文本域选中区域
   * @param val
   */
  const setSelectionRange = (val) => {
    const textarea = element
      .querySelector(".content")
      .querySelector("textarea");
    textarea.setSelectionRange(val.start, val.end);
    textarea.focus();
  };

  /**
   * 设置格式化(内置的工具栏，当点击action的时候执行，如果不满足 你可以自己照着些自己的实现)
   * @param type 类型（如加粗、斜体等）
   * @param otherParams 其他参数 可以不传
   */
  const setFmt = (type, otherParam = {}) => {
    let fmtTypeId;
    for (const key in fmtTypesGroup) {
      const fmtTypes = fmtTypesGroup[key];
      if (Object.keys(fmtTypes).indexOf(type) > -1) {
        fmtTypeId = key;
      }
    }

    if (fmtTypeId) {
      const res = actionHandlers[fmtTypeId](
        content,
        selection,
        fmtTypesGroup[fmtTypeId][type],
        otherParam
      );

      setContent(res.content);
      setTimeout(() => {
        setSelectionRange(res.selection);
      });
    } else {
      alert("尚未由对应的处理格式方式");
    }
  };

  const insertContent = (val) => {
    setContent(content + val);
  };

  return {
    uploadUrl,
    content,
    selection,
    element,
    setSelectionRange,
    setElement,
    setContent,
    setSelection,
    setFmt,
    uploadFile: () => actionHandlers["uploadFile"](uploadUrl),
    setUploadUrl,
    insertContent,
  };
}
