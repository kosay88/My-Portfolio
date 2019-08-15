import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';
import paint1 from '../photos/paint1.jpg'
import paint2 from '../photos/paint2.jpg'
import paint3 from '../photos/paint3.jpg'
import paint4 from '../photos/paint4.jpg'
import paint5 from '../photos/paint5.jpg'
import football1 from '../photos/football1.jpg'
import football2 from '../photos/football2.jpg'
import gym1 from '../photos/gym1.jpg'
import gym2 from '../photos/gym2.jpg'
import game1 from '../photos/game1.jpg'
import game2 from '../photos/game2.jpg'
import game3 from '../photos/game3.jpg'
import cook1 from '../photos/cook1.jpg'
import cook2 from '../photos/cook2.jpg'

class About extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if(this.state.activeTab === 0){
      return(
        <div className="hobbies">
          <h2>drawing and painting</h2>
          <img
            id="hobbie-img"
            src={paint1}
            alt="hobbies"
            style={{height: '300px'}}
          />
          <img
            id="hobbie-img"
            src={paint2}
            alt="hobbies"
            style={{height: '300px'}}
          />
          <img
            id="hobbie-img"
            src={paint3}
            alt="hobbies"
            style={{height: '300px'}}
          />
          <img
            id="hobbie-img"
            src={paint4}
            alt="hobbies"
            style={{height: '300px'}}
          />
          <img
            id="hobbie-img"
            src={paint5}
            alt="hobbies"
            style={{height: '300px'}}
          />

          <br></br>
          <h2>football</h2>
          <img
            id="hobbie-img"
            src={football1}
            alt="hobbies"
            style={{height: '300px'}}
          />
          <img
            id="hobbie-img"
            src={football2}
            alt="hobbies"
            style={{height: '300px'}}
          />

          <br></br>
          <h2>Gym</h2>
          <img
            id="hobbie-img"
            src={gym1}
            alt="hobbies"
            style={{height: '300px'}}
          />
          <img
            id="hobbie-img"
            src={gym2}
            alt="hobbies"
            style={{height: '300px'}}
          />

          <br></br>
          <h2>Video games</h2>
          <img
            id="hobbie-img"
            src={game1}
            alt="hobbies"
            style={{height: '300px'}}
          />
          <img
            id="hobbie-img"
            src={game2}
            alt="hobbies"
            style={{height: '300px'}}
          />
          <img
            id="hobbie-img"
            src={game3}
            alt="hobbies"
            style={{height: '300px'}}
          />


          <br></br>
          <h2>Cooking</h2>
          <img
            id="hobbie-img"
            src={cook1}
            alt="hobbies"
            style={{height: '300px'}}
          />
          <img
            id="hobbie-img"
            src={cook2}
            alt="hobbies"
            style={{height: '300px'}}
          />

        </div>
      )
    }
  }

  render() {
    return(

    <div className="about-me">
      <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
        <Tab className="techTabs">Hobbies</Tab>
        <Tab className="techTabs">about me</Tab>
      </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="hobbies">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
    </div>
    )
  }
}

export default About;
