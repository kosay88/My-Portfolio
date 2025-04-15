import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project Calculator*/}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >MernStack/ Calculator</CardTitle>
            <CardText>
            this is simple project for a Calculator that i made in addition to learn how to build a Full MernStack app. React, Express and Mongodb.
            </CardText>
            <CardActions border>
              <a href="https://github.com/kosay88/MernStak" target="_blank">GitHub</a>
              <a href="https://aquacalculator.000webhostapp.com/TheCalculator.html" target="_blank">Live Demo</a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project TicTacToe*/}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >TicTacToe</CardTitle>
            <CardText>
            funny game, building the famuse game TicTacToe useing react!
            </CardText>
            <CardActions border>
              <a href="https://github.com/kosay88/TicTacToe" target="_blank">GitHub</a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project naturefoundation*/}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >naturefoundation</CardTitle>
            <CardText>
            this project for a nonprofit Organization called Work with Nature, that collect donation to protect the rain forest in Costa Rica, React, Express and Mongodb.
            </CardText>
            <CardActions border>
              <a href="https://github.com/kosay88/naturefoundation" target="_blank">GitHub</a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

        </div>
      )

    } else if(this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* Project Hospice*/}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://grafxflow.co.uk/storage/app/uploads/public/5ac/bc5/791/thumb_666_266_0_0_0_auto.png) center / cover'}} >Hospice</CardTitle>
            <CardText>
            This project was to build a full website for a non profitable organization called 'Hospice Stichting NordHolland' located in Amsterdam, using CodeIgniter framework, MySql, Mamp.
            </CardText>
            <CardActions border>
              <a href="https://github.com/kosay88/CodeIgniter" target="_blank">GitHub</a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          </div>
      )

    } else if(this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          {/* Project Todo-app*/}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTjwLc6tNy_uSjt-bn7SnQeLIvtUxd156BZEdcFRItAijRwMNc) center / cover'}} >Todo-app</CardTitle>
            <CardText>
            creating basic todo list using nod js!
            </CardText>
            <CardActions border>
              <a href="https://github.com/kosay88/Todo-app" target="_blank">GitHub</a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

        </div>
      )

    } else if(this.state.activeTab === 3) {
      return (
        <div><h1>Still no projects uploaded in PHP</h1></div>
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab className="techTabs">React</Tab>
          <Tab className="techTabs">CodeIgniter</Tab>
          <Tab className="techTabs">JS/Nod jS</Tab>
          <Tab className="techTabs">PHP</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
