import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://media-exp1.licdn.com/dms/image/C4E03AQEq88bm1U1qeA/profile-displayphoto-shrink_400_400/0?e=1596672000&v=beta&t=YI8Biky5RH4P5Ud3-6ppGzKonw3lp876KB_6Zfua4Tc"
                className="avatar-img2"
                style={{ height: "200px" }}
              />
            </div>

            <h2 style={{ paddingTop: "2em" }}>Anthony Robles</h2>
            <h4 style={{ color: "grey" }}>Real Estate Evaluator II</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              Experienced Appraiser with a demonstrated history of working in
              the government administration industry not only, but also an Aspiring Web Developer 
              passionate and driven to develop websites that will bring solutions to life to solve client needs. 
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>2350 SW 27th Ave</p>
            <p>Miami FL, 33145</p>
            <h5>Phone</h5>
            <p>(786) 752-1487</p>
            <h5>Email</h5>
            <p>robles305@gmail.com</p>
            <h5>Web</h5>
            <p>
              <a
                href="https://github.com/Arobl034"
                rel="noopener noreferrer"
                target="_blank"
              >
                Arobl034
              </a>
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2019}
              endYear={2020}
              schoolName="University of Miami"
              schoolDescription="Coding Boot Camp Certificate of Completion"
            />

            <Education
              startYear={2012}
              endYear={2014}
              schoolName="Florida International University"
              schoolDescription="Bachelor of Business Administration"
            />

            <Education
              startYear={2011}
              endYear={2012}
              schoolName="Miami Dade College"
              schoolDescription="Associate in Arts"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Experience</h2>

            <Experience
              startYear={2019}
              endYear={2020}
              jobName="Full Stack Web Developer"
              jobDescription="Classroom experience, where I have learned the fundamentals of front-end and back-end development."
            />

            <Experience
              startYear={2015}
              endYear={2020}
              jobName="Real Estate Evaluator II"
              jobDescription="Real Estate Evaluator with a decade of successful experience in data gathering of various kinds of Real Estate for purpose of Ad Valorem taxation. Specialize in assessing large and complex structures in accordance with accepted appraisal methods, techniques, departmental procedures and legal requirements governing tax assessment."
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills</h2>
            <Skills skill="javascript" progress={60} />
            <Skills skill="HTML/CSS" progress={80} />
            <Skills skill="NodeJS" progress={70} />
            <Skills skill="React" progress={65} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
