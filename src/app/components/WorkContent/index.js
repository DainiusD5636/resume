import "./index.css";

function WorkContent({ position, company, date, children, text1, text2 }) {
  return (
    <div className="Jobs">
      <div className="Text-center">
        <p>
          <span className="Strong-font">{position}</span>
          <br />
          {company} <br />
          {date}
        </p>
      </div>
      <p>{children}</p>

      <ul>
        <li>{text1}</li>
        <li>{text2}</li>
      </ul>
    </div>
  );
}

export default WorkContent;
