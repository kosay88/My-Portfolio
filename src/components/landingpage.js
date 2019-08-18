import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Kosay2 from '../photos/Kosay2.JPG'

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={Kosay2}
              alt="Me"
              className="avatar-img"
              style={{height: '300px'}}
              />
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

            <hr/>

          <p>HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Express | PHP | Codeigniter | MySQL | MongoDB | Tableau</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/kosay-farag-994486160/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/kosay88" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* E-mail */}
          <a href="mailto:kosay.faraj.88@gmail.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-envelope-o" aria-hidden="true" />
          </a>
          {/* Youtube */}
          <a href="https://www.youtube.com/channel/UCdLT7LZdMX0HHG2V884XpPQ?view_as=subscriber" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-youtube-square" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;

{/* https://www.hackerrank.com/kosay_faraj_88?hr_r=1 */}
