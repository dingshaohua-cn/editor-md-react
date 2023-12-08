import styleInject from './node_modules/style-inject/dist/style-inject.es.js';

var css_248z = ".md_editor {\n  height: 100%;\n}\n.md_editor .toolbar {\n  display: flex;\n  background-color: rgba(0, 0, 0, 0.05);\n}\n.md_editor .toolbar .item {\n  height: 26px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 6px;\n}\n.md_editor .toolbar .item img {\n  width: 16px;\n  height: 16px;\n  border-radius: 2px;\n}\n.md_editor .content {\n  border: rgba(0, 0, 0, 0.1) solid 1px;\n  height: calc(100% - 26px);\n  min-height: 100px;\n  display: flex;\n}\n.md_editor .content textarea {\n  border: none;\n  outline: none;\n  padding: 10px;\n  font-size: 16px;\n  resize: none;\n  border-right: rgba(0, 0, 0, 0.1) solid 1px;\n}\n.md_editor .content .render_rtf {\n  border-left: rgba(0, 0, 0, 0.1) solid 1px;\n  padding: 0 10px;\n}\n.md_editor .content > * {\n  width: 50%;\n}\n";
styleInject(css_248z);

export { css_248z as default };
