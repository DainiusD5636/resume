import "./index.css";

function ContentBlock({ children, className, title }) {
  return (
    <div className={className}>
      <h2 className="Title">{title}</h2>
      <div className="Box">
        <div className="Hr--green"></div>
        <div className="Hr--grey"></div>
      </div>

      <div>{children}</div>
    </div>
  );
}

export default ContentBlock;
