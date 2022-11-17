import "./App.css";
import Label from "./app/components/Label";
import Header from "./app/components/Header";
import ContentBlock from "./app/components/ContentBlock";
import WorkContent from "./app/components/WorkContent";

function App() {
  return (
    <div className="App">
      <Header fullName="Dainius Dičkus" position="PROGRAMMER"></Header>
      <div className="First-flex">
        <ContentBlock className="Item1 Padding" title="LINKS"></ContentBlock>
        <ContentBlock
          className="Item2"
          title="ABOUT ME"
          children="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo libero. Vestibulum vitae mattis diam. Vivamus eleifend diam vel tempor lacinia. Suspendisse non augue egestas, dapibus justo et, lobortis ex. Nullam tortor diam, venenatis at enim a, lacinia porttitor erat. Vivamus tempor dictum leo id aliquam. Praesent elit lacus, tempus ac vehicula in, imperdiet dapibus elit. Nullam scelerisque euismod leo id vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo libero. Vestibulum vitae mattis diam. "
        ></ContentBlock>
      </div>

      <div className="Second-flex">
        <ContentBlock className="Padding Item3" title="EDUCATION">
          <p>
            SCHOOL NAME <br />
            2009-2013 <br />
            Degree
          </p>
          <div className="Hr--short"></div>
          <p>
            SCHOOL NAME <br />
            2009-2013 <br />
            Degree
          </p>
        </ContentBlock>
        <ContentBlock className="Padding Item4" title="PERSONAL SKILS">
          <Label>TEAMWORK</Label>
          <Label type="yellow">COMMUNICATION</Label>
          <Label type="red">ORGANIZATION</Label>
        </ContentBlock>
        <ContentBlock className="Item5" title="TECHNICAL SKILS">
          <Label>HTML</Label>
          <Label>CSS</Label>
          <Label type="yellow">JAVASCRIPT</Label>
          <Label type="yellow">REACT.JS</Label>
        </ContentBlock>
      </div>
      <ContentBlock title="WORK EXPERIENCE">
        <div className="Work_exp_flex">
          <WorkContent
            position="Programmer"
            company="Company"
            date="2018 - present"
            text1="Lorem ipsum dolor"
            text2="Consectetur adipiscing elit"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut
            justo libero. Vestibulum vitae mattis diam. Vivamus eleifend diam
            vel tempor lacinia. Suspendisse non augue.
          </WorkContent>
          <div className="Hr--vertical"></div>
          <WorkContent
            position="Programmer"
            company="Company"
            date="2018 - present"
            text1="Lorem ipsum dolor"
            text2="Consectetur adipiscing elit"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut
            justo libero. Vestibulum vitae mattis diam. Vivamus eleifend diam
            vel tempor lacinia. Suspendisse non augue.
          </WorkContent>
          <div className="Hr--vertical"></div>
          <WorkContent
            position="Programmer"
            company="Company"
            date="2018 - present"
            text1="Lorem ipsum dolor"
            text2="Consectetur adipiscing elit"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut
            justo libero. Vestibulum vitae mattis diam. Vivamus eleifend diam
            vel tempor lacinia. Suspendisse non augue.
          </WorkContent>
        </div>
      </ContentBlock>
    </div>
  );
}

export default App;
