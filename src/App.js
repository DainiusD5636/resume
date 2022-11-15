import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <div className="header-top"></div>
        <div className="header-name">
          <h1>DAINIUS DIČKUS</h1>
          <div className="header-programmer">
            <h3 className="font--white">PROGRAMMER</h3>
          </div>
        </div>
      </header>
      <main>
        <div className="first-flex">
          <div className="padding item1">
            <h2>LINKS</h2>

            <div className="box">
              <hr className="hr--green" />
              <hr className="hr--grey" />
            </div>

            <div>
              <a class="box" href="https://linkedin.com/">
                <img src="in.png" alt="" width="20" height="20" />
                LINKEDIN/username
              </a>

              <a class="box" href="https://twitter.com/">
                <img src="twitter.png" alt="" width="20" height="20" />
                Twitter/@user-handle
              </a>

              <a class="box" href="https://twitter.com/">
                <img src="git.png" alt="" width="20" height="20" />
                GitHub/username
              </a>

              <a class="box" href="https://twitter.com/">
                <img src="dev.png" alt="" width="20" height="20" />
                BLOG/blog-name
              </a>
            </div>
          </div>

          <div className="item2">
            <h2>ABOUT ME</h2>

            <div className="box">
              <hr className="hr--green" />
              <hr className="hr--grey" />
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quo
              corrupti voluptas non, doloribus id tempora, esse doloremque earum
              soluta itaque ratione enim, mollitia vero voluptates ut omnis hic
              culpa commodi porro laudantium! In dolorem aspernatur voluptate,
              quasi quam corporis magni enim repellendus dicta quas dolor minus
              dignissimos tempore maxime.
            </p>
          </div>
        </div>

        <div className="second-flex">
          <div className="padding item3">
            <h2>EDUCATION</h2>

            <div className="box">
              <hr className="hr--green" />
              <hr className="hr--grey" />
            </div>

            <div>
              <p>SCHOOL NAME</p>
              <p>2009-2013</p>
              <p>Degree</p>
            </div>

            <div className="box2">
              <hr className="hr--short" />
            </div>

            <div>
              <p>SCHOOL NAME</p>
              <p>2009-2013</p>
              <p>Degree</p>
            </div>
          </div>

          <div className="padding item4">
            <h2>PERSONAL SKILLS</h2>

            <div className="box">
              <hr className="hr--green" />
              <hr className="hr--grey" />
            </div>

            <div>
              <div className="label">TEAMWORK</div>
              <div className="label label--yellow">COMMUNICATION</div>
              <div className="label label--red">ORGANIZATION</div>
            </div>
          </div>

          <div className="item5">
            <h2>TECHNICAL SKILS</h2>

            <div className="box">
              <hr className="hr--green" />
              <hr className="hr--grey" />
            </div>

            <div>
              <div className="label">HTML</div>
              <div className="label">CSS/SCSS</div>
              <div className="label label--yellow">JAVASCRIPT</div>
              <div className="label label--yellow">REACT.JS</div>
            </div>
          </div>
        </div>

        <div>
          <h2>WORK EXPERIECE</h2>
          <div className="box">
            <hr className="hr--green" />
            <hr className="hr--grey" />
          </div>

          <div className="work_exp_flex">
            <div className="jobs">
              <div className="text-center">
                <p>JOB POSITION</p>
                <p>Company</p>
                <p>2018-present</p>
              </div>

              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
                consequatur asperiores ut, sint architecto debitis.
              </p>
              <ul>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum.</li>
              </ul>
            </div>

            <div className="hr--vertical"></div>

            <div className="jobs">
              <div className="text-center">
                <p>JOB POSITION</p>
                <p>Company</p>
                <p>2018-present</p>
              </div>

              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
                consequatur asperiores ut, sint architecto debitis.
              </p>

              <ul>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum.</li>
              </ul>
            </div>

            <div className="hr--vertical"></div>

            <div className="jobs">
              <div className="text-center">
                <p>JOB POSITION</p>
                <p>Company</p>
                <p>2018-present</p>
              </div>

              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
                consequatur asperiores ut, sint architecto debitis.
              </p>
              <ul>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum.</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <hr className="hr--grey" />

      <footer className="text-center">
        <div className="lyg">
          <div className="label--black font--white">ADRESAS</div>
          <p>Imaginary St. 52,</p>
          <p>Kings Landing, Westeros</p>
        </div>

        <div className="lyg">
          <div className="label--black font--white">CONTACT</div>
          <a href="tel:4545554545">+3704563244 </a>
          <a href="mailto: dainius.dickus@gmail.com" target="_blank">
            email@gmail.com
          </a>
        </div>

        <div className="lyg">
          <div className="label--black font--white">SOCIAL</div>
          <a href="https://linkedin.com/" target="_blank">
            {" "}
            LINKEIN/username{" "}
          </a>
          <a href="https://twitter.com/" target="_blank">
            Twitter/@user-handle
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
