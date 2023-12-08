import { useState, useEffect, useRef } from "react";
import parse from "html-react-parser";
import ReactDOM from "react-dom/client";


// 渲染富文本(支持自定义组件【核心依赖html-react-parser库】)
const RenderRtf = (props) => {
  // 组件名字处理
  const regComp = {};
  for (const key in props["regComp"]) {
    const keyStr = key.toLowerCase();
    regComp[keyStr] = props["regComp"][key];
  }

  // 子实例的根节点
  const [root, setRoot] = useState<any>();
  // 子实例的根节点的挂载点
  const renderRtfNode = useRef(null);
  // 子实例渲染
  const rootRender = () => {
    root.render(
      parse(props.content, {
        replace(domNode: any) {
          if (Object.keys(regComp).indexOf(domNode.name) > -1) {
            const Cmp = regComp[domNode.name];
            return <Cmp {...domNode.attribs} />;
          } else {
            return domNode;
          }
        },
      })
    );
  };

  // 一旦有子实例了，就立刻渲染，传入的内容更改 也需要重新渲染
  useEffect(() => {
    root?rootRender():console.warn("没有实例对象，此次实例无法重新render")
  }, [root, props]);

  // 挂载第二（子）实例
  useEffect(() => {
    if (renderRtfNode.current) {
      const instanceRoot = ReactDOM.createRoot(renderRtfNode.current);
      setRoot(instanceRoot);
    }
  }, [renderRtfNode]);
  return <div className="render_rtf" ref={renderRtfNode}></div>;
};

export default RenderRtf;
