import { __spreadArray, __assign } from './node_modules/tslib/tslib.es6.js';
import './style.less.js';
import MarkdownIt from 'markdown-it';
import RenderRtf from './render-rtf.js';
import defaultConf from './default-conf.js';
import { textSelect } from './helper.js';
import React, { useRef, useEffect } from 'react';

var md = MarkdownIt({
  html: true,
  linkify: true,
  typographer: true
});
function MdEditor(props) {
  var _a;
  var finalToolbar = __spreadArray(__spreadArray([], defaultConf.toolbar, true), (_a = props.editor.toolbar) !== null && _a !== void 0 ? _a : [], true);
  var renderRtfProps = {
    regComp: __assign(__assign({}, defaultConf.regComp), props.editor.regComp),
    content: md.render(props.editor.content)
  };
  var mdEditorNode = useRef(null);
  useEffect(function () {
    if (mdEditorNode.current) {
      props.editor.setElement(mdEditorNode.current);
    }
  }, [mdEditorNode]);
  return /*#__PURE__*/React.createElement("div", {
    className: "md_editor",
    ref: mdEditorNode
  }, !props.editor.readonly && /*#__PURE__*/React.createElement("div", {
    className: "toolbar"
  }, finalToolbar.map(function (item) {
    return item.render ? /*#__PURE__*/React.createElement("div", {
      className: "item",
      key: item.id
    }, /*#__PURE__*/React.createElement(item.render, {
      editor: props.editor
    })) : /*#__PURE__*/React.createElement("div", {
      className: "item",
      key: item.id,
      onClick: function () {
        item.action(props.editor);
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: item.icon
    }));
  })), /*#__PURE__*/React.createElement("div", {
    className: "content"
  }, !props.editor.readonly && /*#__PURE__*/React.createElement("textarea", {
    onSelect: function (e) {
      e.stopPropagation();
      props.editor.setSelection(textSelect(e));
    },
    value: props.editor.content,
    onInput: function (_a) {
      var target = _a.target;
      props.editor.setContent(target.value);
      target.style.height = "inherit";
      target.style.height = "".concat(target.scrollHeight, "px");
    }
  }), /*#__PURE__*/React.createElement(RenderRtf, renderRtfProps)));
}

export { MdEditor as default };
