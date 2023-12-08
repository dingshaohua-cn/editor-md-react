import "./style.less";
import MarkdownIt from "markdown-it";
import RenderRtf from "./render-rtf";
import defaultConf from "./default-conf";
import { textSelect } from "./helper";
import { useEffect, useRef } from "react";


const md = MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
});


function MdEditor(props) {
  const finalToolbar = [
    ...defaultConf.toolbar,
    ...(props.editor.toolbar ?? []),
  ];
  const renderRtfProps = {
    regComp: { ...defaultConf.regComp, ...props.editor.regComp },
    content: md.render(props.editor.content),
  };

  const mdEditorNode = useRef(null);

  useEffect(()=>{
    if(mdEditorNode.current){
      props.editor.setElement(mdEditorNode.current)
    }
  },[mdEditorNode])

  return (
    <div className="md_editor" ref={mdEditorNode}>
      <div className="toolbar">
        {finalToolbar.map((item) =>
          item.render ? (
            <div className="item" key={item.id}>
             <item.render editor={props.editor}/>
            </div>
          ) : (
            <div
              className="item"
              key={item.id}
              onClick={() => {
                item.action(props.editor);
              }}
            >
              <img src={item.icon} />
            </div>
          )
        )}
      </div>
      <div className="content">
        <textarea
          onSelect={(e) => {
            e.stopPropagation();
            props.editor.setSelection(textSelect(e));
          }}
          value={props.editor.content}
          onInput={({ target}) => {
            props.editor.setContent(target.value);
            target.style.height = "inherit";
            target.style.height = `${target.scrollHeight}px`;;
            
          }}
        />
        <RenderRtf {...renderRtfProps} />
      </div>
    </div>
  );
}

export default MdEditor;
