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
          description: "This is a turn-based strategy game, where users have to explore the map, discover the story hidden behind and kill/avoid Zombies. Players have to strategize their movements and hide in houses in time before a dark veil covers the screen during specific turns.",
          links: {
            github: "https://github.com/Wiz1221/Survive-Zombie-World",
            site: "https://wiz1221.github.io/Survive-Zombie-World/"
          }
        },{
          title: "MathWars",
          image: MathWarsImage,
          icons: ["devicon-nodejs-plain-wordmark", "devicon-express-original-wordmark", "devicon-mongodb-plain-wordmark", "devicon-jquery-plain-wordmark"],
          stack: "NodeJS, Express, MongoDB, jQuery, MathJax.",
          deployment: "Heroku",
          description: "MathWars is a question and answer forum site. Users input Math symobl by simply pressing a button. Questions will be stored in database and rendered to Math form using MathJax. Users can also manage their own questions and answers.",
          links: {
            github: "https://github.com/Wiz1221/Mathwars",
            site: "https://mathwars.herokuapp.com/"
          }
        },{
          marginBottom: 10,
          title: "Food-Awesome",
          image: FoodAwesomeImage,

          icons: ["devicon-react-original-wordmark", "devicon-nodejs-plain-wordmark", "devicon-mongodb-plain-wordmark", "devicon-amazonwebservices-plain-wordmark"],
          stack: "MongoDB, Express, ReactJS, NodeJS, Redux.",
          deployment: "Amazon Web Services (AWS - EC2)",
          description: "Our first try in ReactJS, Food-Awesome is a food review site. The Administrator can add restraurants and users add and manage their reviews on those restraurants.",
          links: {
            github: "https://github.com/dheamariesta/food-awesome",
            site: "http://food-awesome.review"
          }
        },{
          title: "ClinicQueueSG",
          image: ClinicQueueImage,
          icons: ["devicon-react-original-wordmark", "devicon-nodejs-plain-wordmark", "devicon-mongodb-plain-wordmark", "devicon-amazonwebservices-plain-wordmark"],
          stack: "MongoDB, Express, ReactJS, NodeJS, Redux, Socket.io, Google-map-react, Twilio.",
          deployment: "Amazon Web Services (AWS - EC2)",
          description: "A one-stop site to see real-time live queue situation for over 900 clinics in Singapore. Instead of clicking 17 times to see information of all clinics from the various polyclinic groups, such as NHG and SingHealth, our site allow users to simply hover over the icons on the map to see queue info. Users can also post pictures and comment on the current queue in each clinic or choose to subscribe to a clinic and receive a SMS when the clinic have updates on latest queue situation.",
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
                          marginBottom={elem.marginBottom} />
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
            <h3 className="title">Full Stack Developer</h3>
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
