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
          <h2>Bicycles</h2>
          <img
            id="hobbie-img"
            src={race1}
            alt="hobbies"
            style={{height: '300px'}}
          />
          <img
            id="hobbie-img"
            src={race2}
            alt="hobbies"
            style={{height: '300px'}}
          />
             
        <br></br>
          <h2>Swiming</h2>
          <img
            id="hobbie-img"
            src={swim}
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
    } else if (this.state.activeTab === 1){
      return(
      <div className = "myStory">
        <h3>Hello,<br></br><br></br>
My name is Kosay I'm from Syria.<br></br>
When I was a little kid just like any other kid i played football and video games, and here where I discovered my passion for computers.<br></br>
But what I liked the most is drawing and painting, Because it allows me to create beautiful things and opens the door for my imagination.<br></br>
Then I grow up to see the war taking over my country.<br></br>
So I left to Saudi Arabia and worked there in interior decoration.<br></br>
Which I really liked because it has an artistic and creative sides.<br></br>
But I didn't find myself there for my values aren't aligned with the values in Saudi Arabia.<br></br>
But they are in a line with the values here.<br></br>
That’s why I came to the Netherland. to have a new start.<br></br>
So the first thing I did was studying Dutch.<br></br>
Then I found an ICT boot camp called "Restart Network" and joined the program.<br></br>
Although it was difficult for me to enter this new world of programing.<br></br>
On the other hand it was very interesting because it allows me to use technology to create new things which affect people's life and can make them happy.<br></br>
Then I did my internship at Deloitte as a part of the program, and there I learned new things and improved my skills in working with a team, plus I got the chance of meeting new people and extending my connection network.<br></br>
Looking back makes me realize how this program changed my life and the way I think.<br></br>
and now after entering the world of technology.<br></br>
I want to keep going forward.<br></br>
To learn more and more.<br></br>
To make products that other people likes and makes a good impact on the society.<br></br>
And most importantly improve myself as a person and as a developer.<br></br><br></br>
Thank you!
<hr></hr>
     </h3>
      </div>)
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
