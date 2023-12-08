import "./style.less";

const CBtn = (props) => {
  return <button className="c_btn">{props.txt ?? "按钮"}</button>;
};
export default CBtn;
