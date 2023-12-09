import { __awaiter, __generator } from './node_modules/tslib/tslib.es6.js';
import React from 'react';
import CBtn from './custom-components/c-btn/index.js';
import img from './img/bold.svg.js';
import img$1 from './img/italic.svg.js';
import img$5 from './img/img.svg.js';
import img$2 from './img/font-color.svg.js';
import img$3 from './img/font-bg-color.svg.js';
import img$6 from './img/split-line.svg.js';
import img$7 from './img/strickout.svg.js';
import img$8 from './img/underline.svg.js';
import img$4 from './img/head.svg.js';
import img$9 from './img/code-view.svg.js';

var defaultConf = {
  regComp: {
    CBtn: CBtn
  },
  toolbar: [{
    id: "bold",
    icon: img,
    action: function (editor) {
      editor.setFmt("bold");
    }
  }, {
    id: "italic",
    icon: img$1,
    action: function (editor) {
      editor.setFmt("italic");
    }
  }, {
    id: "color",
    render: function (props) {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("img", {
        src: img$2
      }), /*#__PURE__*/React.createElement("input", {
        type: "color",
        style: {
          position: "absolute",
          opacity: 0,
          height: "100%",
          width: "100%"
        },
        onChange: function (e) {
          props.editor.setFmt("color", e.target.value);
        }
      }));
    }
  }, {
    id: "backgroundColor",
    render: function (props) {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("img", {
        src: img$3
      }), /*#__PURE__*/React.createElement("input", {
        type: "color",
        style: {
          position: "absolute",
          opacity: 0,
          height: "100%",
          width: "100%"
        },
        onChange: function (e) {
          props.editor.setFmt("backgroundColor", e.target.value);
        }
      }));
    }
  }, {
    id: "fontSize",
    render: function (props) {
      return /*#__PURE__*/React.createElement("input", {
        type: "number",
        style: {
          width: "40px"
        },
        onChange: function (e) {
          props.editor.setFmt("fontSize", e.target.value + "px");
        }
      });
    }
  }, {
    id: "headers",
    render: function (props) {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("img", {
        src: img$4
      }), /*#__PURE__*/React.createElement("select", {
        style: {
          position: "absolute",
          opacity: 0,
          height: "100%",
          width: "100%"
        },
        onChange: function (e) {
          props.editor.setFmt("headers", {
            value: e.target.value
          });
        }
      }, /*#__PURE__*/React.createElement("option", {
        value: "1"
      }, "\u6807\u98981"), /*#__PURE__*/React.createElement("option", {
        value: "2"
      }, "\u6807\u98982"), /*#__PURE__*/React.createElement("option", {
        value: "3"
      }, "\u6807\u98983"), /*#__PURE__*/React.createElement("option", {
        value: "4"
      }, "\u6807\u98984")));
    }
  }, {
    id: "img",
    icon: img$5,
    action: function (editor) {
      return __awaiter(this, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4 /*yield*/, editor.uploadFile()];
            case 1:
              res = _a.sent();
              editor.insertContent("<img src=\"".concat(res.data, "\"/>"));
              return [2 /*return*/];
          }
        });
      });
    }
  }, {
    id: "splitLine",
    icon: img$6,
    action: function (editor) {
      editor.setFmt("splitLine");
    }
  }, {
    id: "strickout",
    icon: img$7,
    action: function (editor) {
      editor.setFmt("strickout");
    }
  }, {
    id: "underline",
    icon: img$8,
    action: function (editor) {
      editor.setFmt("underline");
    }
  }, {
    id: "codeView",
    icon: img$9,
    action: function (editor) {
      editor.setFmt("codeView");
    }
  }]
};

export { defaultConf as default };
