import React, { useState, useRef, useEffect } from 'react';
import parse from 'html-react-parser';
import ReactDOM from 'react-dom/client';

// 渲染富文本(支持自定义组件【核心依赖html-react-parser库】)
var RenderRtf = function (props) {
  // 组件名字处理
  var regComp = {};
  for (var key in props["regComp"]) {
    var keyStr = key.toLowerCase();
    regComp[keyStr] = props["regComp"][key];
  }
  // 子实例的根节点
  var _a = useState(),
    root = _a[0],
    setRoot = _a[1];
  // 子实例的根节点的挂载点
  var renderRtfNode = useRef(null);
  // 子实例渲染
  var rootRender = function () {
    root.render(parse(props.content, {
      replace: function (domNode) {
        if (Object.keys(regComp).indexOf(domNode.name) > -1) {
          var Cmp = regComp[domNode.name];
          return /*#__PURE__*/React.createElement(Cmp, domNode.attribs);
        } else {
          return domNode;
        }
      }
    }));
  };
  // 一旦有子实例了，就立刻渲染，传入的内容更改 也需要重新渲染
  useEffect(function () {
    root ? rootRender() : console.warn("没有实例对象，此次实例无法重新render");
  }, [root, props]);
  // 挂载第二（子）实例
  useEffect(function () {
    if (renderRtfNode.current) {
      var instanceRoot = ReactDOM.createRoot(renderRtfNode.current);
      setRoot(instanceRoot);
    }
  }, [renderRtfNode]);
  return /*#__PURE__*/React.createElement("div", {
    className: "render_rtf",
    ref: renderRtfNode
  });
};

export { RenderRtf as default };
