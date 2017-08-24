import React, { Component } from 'react';
import './App.css';
import './animation.css';

import Profile from '../Profile';
import ProjectContainer from '../ProjectContainer';

import ZombieImage from '../../Assets/Zombie4.png';
import MathWarsImage from '../../Assets/MathWars2.png';
import FoodAwesomeImage from '../../Assets/food-awesome.png';
import ClinicQueueImage from '../../Assets/ClinicQueue_Color.png';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      intervalId:0,
      style: {
        height: 100+"vh",
        width: 100+"vw"
      },
      projectInfo: [
        {
          title: "Survive Zombie World",
          image: ZombieImage,
          icons: ["devicon-javascript-plain", "devicon-html5-plain-wordmark", "devicon-css3-plain-wordmark"],
          stack: "HTML5, CSS3, Javascript",
          deployment: "Github",
          description: "A turn-based Zombie strategy game. Explore the map, discover the story, kill/avoid Zombies. Strategize your movements when night comes.",
          links: {
            github: "https://github.com/Wiz1221/Survive-Zombie-World",
            site: "https://wiz1221.github.io/Survive-Zombie-World/"
          }
        },{
          title: "MathWars",
          image: MathWarsImage,
          icons: ["devicon-nodejs-plain-wordmark", "devicon-express-original-wordmark", "devicon-mongodb-plain-wordmark", "devicon-jquery-plain-wordmark"],
          stack: "NodeJS, Express, MongoDB, jQuery, AJAX, MathJax.",
          deployment: "Heroku",
          description: "A question and answer forum site. Input Math symbols by simply pressing a button. Manage your questions and answers.",
          links: {
            github: "https://github.com/Wiz1221/Mathwars",
            site: "https://mathwars.herokuapp.com/"
          }
        },{

          title: "Food-Awesome",
          image: FoodAwesomeImage,

          icons: ["devicon-react-original-wordmark", "devicon-nodejs-plain-wordmark", "devicon-mongodb-plain-wordmark", "devicon-amazonwebservices-plain-wordmark"],
          stack: "MongoDB, Express, ReactJS, NodeJS, Redux, AJAX.",
          deployment: "Amazon Web Services (AWS - EC2)",
          description: "A food review site built with MERN stack. Vote your favourite review.",
          links: {
            github: "https://github.com/dheamariesta/food-awesome",
            site: "http://food-awesome.review"
          }
        },{
          marginTop: -10,
          title: "ClinicQueueSG",
          image: ClinicQueueImage,
          icons: ["devicon-react-original-wordmark", "devicon-nodejs-plain-wordmark", "devicon-mongodb-plain-wordmark", "devicon-amazonwebservices-plain-wordmark"],
          stack: "MongoDB, Express, ReactJS, NodeJS, Redux, Socket.io, Google-map-react, Twilio.",
          deployment: "Amazon Web Services (AWS - EC2)",
          description: "One-stop site to see live queue situation for over 900 clinics in Singapore. Post pictures of queue, write comment and subscribe to a clinic to receive SMS.",
          links: {
            github: "https://github.com/Wiz1221/ClinicQueue-redux-frontend",
            site: "https://clinicq.sg"
          }
        }
      ]
    }
  }

  renderEachProject = () => {
    return this.state.projectInfo.map((elem,index) => {
      return(
        <ProjectContainer key={index}
                          id={index}
                          title={elem.title}
                          image={elem.image}
                          icons={elem.icons}
                          description={elem.description}
                          links={elem.links}
                          stack={elem.stack}
                          deployment={elem.deployment}
                          marginTop={elem.marginTop} />
      )
    })
  }


  scrollStep = () => {
    let windowHeight = window.innerHeight
    // window.scrollY returns the number of pixels that the document is currently scrolled vertically.
    if (window.scrollY >= windowHeight) {
        clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.scrollY + 20);
  }

  scrollToTop = () => {
    let intervalId = setInterval(this.scrollStep.bind(this), 16.66);
    this.setState({ intervalId: intervalId });
  }


  render() {
    const projectArray = this.renderEachProject()

    return (
      <div className="App">
        <canvas id="canvas" style={this.state.style}></canvas>
        <div className="landing-container">
          <div className="landing-content-container">
            <h1 className="name">Pek Geok Yan</h1>
            <h3 className="title">Web Developer</h3>
          </div>

            <div className="arrow animated infinite wobble" onClick={ () => { this.scrollToTop(); }}></div>

        </div>
        <div className="content-container">
          <h3 className="header">Recent Projects</h3>
          {projectArray}
        </div>
        <Profile/>
      </div>
    );
  }
}

export default App;
