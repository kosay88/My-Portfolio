import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import Kosay from '../photos/Kosay.jpg'


class Resume extends Component {
  render() {
    return(
      <div className="resume">
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                id="resume-img"
                src={Kosay}
                alt="avatar"
                style={{height: '300px'}}
                 />
            </div>

            <h2 style={{paddingTop: '1em'}}>Kosay Farag</h2>
            <h4 style={{color: 'grey'}}>Full Stack Web Developer</h4>
            <hr style={{borderTop: '3px solid #000046', width: '55%',}}/>
            <p>I am an ambitious young man from Syria who works well in a team. I have a passion for computer technology and software development. looking forward to build a future in the IT sector In the Netherlands.</p>
            <hr style={{borderTop: '3px solid #000046', width: '55%'}}/>
            <h5>Address</h5>
            <p>2521VL, Den Haag</p>
            <h5>Phone</h5>
            <p>(+31) 610203003</p>
            <h5>Email</h5>
            <p>kosay.faraj.88@gmail.com</p>
            <h5>Web</h5>
            <p>https://kosayportfolio.netlify.app/</p>
            <hr style={{borderTop: '3px solid #000046', width: '55%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>

              <h2>Experience</h2>
            <Experience
              startYear={2010}
              endYear={2014}
              jobName="Interior decoration and design"
              jobDescription="Interior decoration and design for ceilings and walls, Saudi Arabia and Syria"
              />
            <Experience
              startYear={2018}
              endYear={2019}
              schoolName="Deloitte"
              schoolDescription="Internship at Deloitte Rotterdam, from Dec 2018 - May 2019, Tableau, JavaScript, Python/DataCamp"
              />
            <Experience
              startYear={2019}
              endYear={2020}
              jobName="The Hague Tech"
              jobDescription="Event Assistant at The Hague Tech, August 2019 - April 2020, work on events, lunch, bartender"
              />
            <Experience
              startYear={2019}
              endYear={2022}
              jobName="Deerns"
              jobDescription="Junior Developer at Deerns, November 2019 - January 2020, Power Apps, Power BI, JS, PHP, MYSQL, API, Python, Microsoft, shareoints"
              />
            <Experience
              startYear={2023}
              endYear={2025}
              jobName="Erasmus Q-Intelligence"
              jobDescription="Frontend Developer at EQI, January 2023 - January 2025, Angular, TS, SQL/pgAdmin4, Power BI"
              />

              <hr style={{borderTop: '3px solid green'}} />

              <h2>Education</h2>
             <Education
                startYear={2002}
                endYear={2006}
                schoolName="Jamal Alrafe Secondary School"
                schoolDescription="Secondary School, Suwayda, Syria"
                 />
               <Education
                 startYear={2006}
                 endYear={2012}
                 schoolName="University of Aleppo"
                 schoolDescription="Study of Law, University of Aleppo, Syria"
                  />
               <Education
                 startYear={2016}
                 endYear={2018}
                 schoolName="Up2learn Den Haag"
                 schoolDescription="Integration course, Up2learn Den Haag"
                 extraInfo1=". Dutch Language to level B2"
                 extraInfo2=". Knowledge of Dutch Society"
                 extraInfo3=". Orientation On the Dutch Labor Market"
                  />
               <Education
                 startYear={2018}
                 endYear={2019}
                 schoolName="Restart Network"
                 schoolDescription="ICT-bootcamp, Restart Network, Rotterdam, April 2018 - September 2018, PHP, CodeIgniter, JavaScript, React Library, HTML/CSS, bootstraps, API, MYSQL, MongoDB"
                  />
               <Education
                 startYear={2024}
                 schoolName="Language institute | REGINA COELI"
                 schoolDescription="One week, Dutch language B1-B2 level"
                  />

                <hr style={{borderTop: '3px solid green'}} />

              <h2>Skills</h2>
              <Skills
                skill="Angular"
                progress={90}
                />
              <Skills
                skill="Typescript"
                progress={90}
                />
              <Skills
                skill="HTML/CSS"
                progress={80}
                />
              <Skills
                skill="Javascript"
                progress={70}
                />

              <Skills
                skill="NodeJS"
                progress={70}
                />
              <Skills
                skill="React"
                progress={40}
                />
              <Skills
                skill="PHP"
                progress={60}
                />
              <Skills
                skill="Codeigniter"
                progress={60}
                />
              <Skills
                skill="MongoDB/MySQL"
                progress={50}
                />
              <Skills
                skill="Tableau"
                progress={60}
                />
              <Skills
                skill="PowerBI"
                progress={90}
                />
              <Skills
                skill="PowerApps"
                progress={80}
                />
              <Skills
                skill="Tableau"
                progress={60}
                />

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
