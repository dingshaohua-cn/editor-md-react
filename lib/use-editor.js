import { __assign } from './node_modules/tslib/tslib.es6.js';
import { useState } from 'react';
import addTag from './action-handler/add-tag.js';
import cssStyle from './action-handler/css-style.js';
import oneSided from './action-handler/one-sided.js';
import ownBlock from './action-handler/own-block.js';
import ownLine from './action-handler/own-line.js';
import twoSided from './action-handler/two-sided.js';
import uploadFile from './action-handler/upload-file.js';

var actionHandlers = {
  addTag: addTag,
  cssStyle: cssStyle,
  oneSided: oneSided,
  ownBlock: ownBlock,
  ownLine: ownLine,
  twoSided: twoSided,
  uploadFile: uploadFile
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
var fmtTypesGroup = {
  twoSided: {
    // 两侧有md符号
    bold: "**",
    italic: "*",
    strickout: "~~"
  },
  cssStyle: {
    // 样式
    color: "color",
    backgroundColor: "background-color",
    fontSize: "font-size"
  },
  oneSided: {
    // 只有一侧有md符号
    headers: "#"
  },
  addTag: {
    //新加个元素包裹
    underline: "u"
  },
  ownLine: {
    // 单独站一行
    splitLine: "---"
  },
  ownBlock: {
    // 独占一块
    codeView: "```"
  }
};
function Editor(props) {
  var _a = useState(),
    element = _a[0],
    setElement = _a[1];
  var _b = useState(props.content),
    content = _b[0],
    setContent = _b[1];
  var _c = useState({}),
    selection = _c[0],
    setSelection = _c[1];
  var _d = useState(props.uploadUrl),
    uploadUrl = _d[0],
    setUploadUrl = _d[1];
  var _e = useState(props.toolbar),
    toolbar = _e[0],
    setToolbar = _e[1];
  /**
   * 设置文本域选中区域
   * @param val
   */
  var setSelectionRange = function (val) {
    var textarea = element.querySelector(".content").querySelector("textarea");
    textarea.setSelectionRange(val.start, val.end);
    textarea.focus();
  };
  /**
   * 设置格式化(内置的工具栏，当点击action的时候执行，如果不满足 你可以自己照着些自己的实现)
   * @param type 类型（如加粗、斜体等）
   * @param otherParams 其他参数 可以不传
   */
  var setFmt = function (type, otherParam) {
    if (otherParam === void 0) {
      otherParam = {};
    }
    var fmtTypeId;
    for (var key in fmtTypesGroup) {
      var fmtTypes = fmtTypesGroup[key];
      if (Object.keys(fmtTypes).indexOf(type) > -1) {
        fmtTypeId = key;
      }
    }
    if (fmtTypeId) {
      var res_1 = actionHandlers[fmtTypeId](content, selection, fmtTypesGroup[fmtTypeId][type], otherParam);
      setContent(res_1.content);
      setTimeout(function () {
        setSelectionRange(res_1.selection);
      });
    } else {
      alert("尚未由对应的处理格式方式");
    }
  };
  var insertContent = function (val) {
    setContent(content + val);
  };
  return __assign(__assign({}, props), {
    toolbar: toolbar,
    setToolbar: setToolbar,
    uploadUrl: uploadUrl,
    content: content,
    selection: selection,
    element: element,
    setSelectionRange: setSelectionRange,
    setElement: setElement,
    setContent: setContent,
    setSelection: setSelection,
    setFmt: setFmt,
    uploadFile: function () {
      return actionHandlers["uploadFile"](uploadUrl);
    },
    setUploadUrl: setUploadUrl,
    insertContent: insertContent
  });
}

export { Editor as default };
