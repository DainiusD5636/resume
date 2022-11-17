import "./index.css";

function Label({ children, type }) {
  let className = "Label";
  if (type) {
    className = [className, `Label--${type}`].join(" ");
  }
  return <div className={className}>{children}</div>;
}

export default Label;
