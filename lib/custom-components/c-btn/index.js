import './style.less.js';
import React from 'react';

var CBtn = function (props) {
  var _a;
  return /*#__PURE__*/React.createElement("button", {
    className: "c_btn"
  }, (_a = props.txt) !== null && _a !== void 0 ? _a : "按钮");
};

export { CBtn as default };
