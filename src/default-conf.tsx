import React from 'react';
import CBtn from "./custom-components/c-btn";
import bold from "./img/bold.svg";
import italic from "./img/italic.svg";
import img from "./img/img.svg";
import fontColor from "./img/font-color.svg";
import fontBgColor from "./img/font-bg-color.svg";
import splitLine from "./img/split-line.svg";
import strickout from "./img/strickout.svg";
import underline from "./img/underline.svg";
// import fontSize from "./img/font-size.svg";
import head from "./img/head.svg";
import codeView from './img/code-view.svg'

export default {
  regComp: {
    CBtn,
  },
  toolbar: [
    {
      id: "bold",
      icon: bold,
      action(editor) {
        editor.setFmt("bold");
      },
    },
    {
      id: "italic",
      icon: italic,
      action(editor) {
        editor.setFmt("italic");
      },
    },
    {
      id: "color",
      render: (props) => {
        return (
          <>
            <img src={fontColor}></img>
            <input
              type="color"
              style={{
                position: "absolute",
                opacity: 0,
                height: "100%",
                width: "100%",
              }}
              onChange={(e) => {
                props.editor.setFmt("color", e.target.value);
              }}
            />
          </>
        );
      },
    },
    {
      id: "backgroundColor",
      render: (props) => {
        return (
          <>
            <img src={fontBgColor}></img>
            <input
              type="color"
              style={{
                position: "absolute",
                opacity: 0,
                height: "100%",
                width: "100%",
              }}
              onChange={(e) => {
                props.editor.setFmt("backgroundColor", e.target.value);
              }}
            />
          </>
        );
      },
    },
    {
      id: "fontSize",
      render: (props) => (
        <input
          type="number"
          style={{ width: "40px" }}
          onChange={(e) => {
            props.editor.setFmt("fontSize", e.target.value + "px");
          }}
        />
      ),
    },
    {
      id: "headers",
      render: (props) => (
        <>
          <img src={head}></img>
          <select
            style={{
              position: "absolute",
              opacity: 0,
              height: "100%",
              width: "100%",
            }}
            onChange={(e) => {
              props.editor.setFmt("headers", { value: e.target.value });
            }}
          >
            <option value="1">标题1</option>
            <option value="2">标题2</option>
            <option value="3">标题3</option>
            <option value="4">标题4</option>
          </select>
        </>
      ),
    },
    {
      id: "img",
      icon: img,
      async action(editor) {
        const res = await editor.uploadFile();
        editor.insertContent(`<img src="${res.data}"/>`);
      },
    },
    {
      id: "splitLine",
      icon: splitLine,
      action(editor) {
        editor.setFmt("splitLine");
      },
    },
    {
      id: "strickout",
      icon: strickout,
      action(editor) {
        editor.setFmt("strickout");
      },
    },
    {
      id: "underline",
      icon: underline,
      action(editor) {
        editor.setFmt("underline");
      },
    },
    {
      id: "codeView",
      icon: codeView,
      action(editor) {
        editor.setFmt("codeView");
      },
    },

    
  ],
};
