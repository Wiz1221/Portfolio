import React, { Component } from 'react';
import './App.css';
// import './background.css';

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
      projectClicked: false,
      whichProjectClicked: 0,
      projectInfo: [
        {
          title: "Survive Zombie World",
          image: ZombieImage,
          icons: ["devicon-javascript-plain", "devicon-html5-plain-wordmark", "devicon-css3-plain-wordmark"],
          description: "This is a turn-based strategy game, where users have to explore the map, discover the story hidden behind and kill/avoid Zombies. Players have to strategize their movements and hide in houses in time before a dark veil covers the screen during specific turns.",
          links: {
            github: "https://github.com/Wiz1221/Survive-Zombie-World",
            site: "https://wiz1221.github.io/Survive-Zombie-World/"
          }
        },{
          title: "MathWars",
          image: MathWarsImage,
          icons: ["devicon-nodejs-plain-wordmark", "devicon-express-original-wordmark", "devicon-mongodb-plain-wordmark", "devicon-jquery-plain-wordmark"],
          description: "MathWars is a question and answer forum site. The special part is that users can choose to input Math Symbols, simpily by pressing a button.",
          links: {
            github: "https://github.com/Wiz1221/Mathwars",
            site: "https://pure-ridge-10154.herokuapp.com/"
          }
        },{
          title: "Food-Awesome",
          image: FoodAwesomeImage,
          icons: ["devicon-react-original-wordmark", "devicon-nodejs-plain-wordmark", "devicon-mongodb-plain-wordmark", "devicon-amazonwebservices-plain-wordmark"],
          description: "Food-Awesome is a food review site. The Administrator can add restraurants and users add and manage their reviews",
          links: {
            github: "https://github.com/dheamariesta/food-awesome",
            site: "http://35.167.239.209:3001/"
          }
        },{
          title: "ClinicQueueSG",
          image: ClinicQueueImage,
          icons: ["devicon-react-original-wordmark", "devicon-nodejs-plain-wordmark", "devicon-mongodb-plain-wordmark", "devicon-amazonwebservices-plain-wordmark"],
          description: "A one-stop site to see real-time live queue situation for over 900 clinics in Singapore",
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
                          whichProjectClicked={this.whichProjectClicked} />
      )
    })
  }


  render() {
    const projectArray = this.renderEachProject()
    const style = {
      height: 100+"vh",
      width: 100+"vw"
    }
    return (
      <div className="App">
        <canvas className="canvas" style={style}></canvas>
        <div className="landing-container">
          <div className="landing-content-container">
            <h1 className="name">Pek Geok Yan</h1>
            <h3 className="title">Web Developer</h3>
          </div>
          <div className="arrow animated infinite wobble"></div>
        </div>
        <div className="content-container">
          <h3 className="header">Recent Projects</h3>
          {projectArray}
        </div>
        <Profile/>
      </div>
    );
  }

  // componentDidMount(){
  //   var canvas = document.getElementsByClassName('canvas');
  //   var context;
  //   var screenH;
  //   var screenW;
  //   var stars = [];
  //   var fps = 50;
  //   var colors = ["rgba(255, 255, 255,", "rgba(255, 227, 77,", "rgba(99, 136, 255,"]
  //   var numStars = 400;
  //
  //     // Calculate the screen size
  //   	screenH = window.innerHeight;
  //   	screenW = window.innerWidth;
  //
  //     //
  //   	// // Fill out the canvas
  //   	// canvas.attr('height', screenH);
  //   	// canvas.attr('width', screenW);
  //   	context = canvas[0].getContext('2d');
  //
  //   	// Create all the stars
  //   	for(var i = 0; i < numStars; i++) {
  //   		var x = Math.round(Math.random() * screenW);
  //   		var y = Math.round(Math.random() * screenH);
  //   		var length = 1 + Math.random() * 2;
  //   		var opacity = Math.random();
  //       var whichColor = Math.floor(Math.random() * 3);
  //
  //   		// Create a new star and draw
  //   		var star = new Star(x, y, length, opacity, colors[whichColor]);
  //
  //   		// Add the the stars array
  //   		stars.push(star);
  //   	}
  //
  //   	setInterval(animate, 1000 / fps);
  //
  //   /**
  //    * Animate the canvas
  //    */
  //   function animate() {
  //   	context.clearRect(0, 0, screenW, screenH);
  //   	stars.forEach((star,index) => {
  //   		star.draw(context);
  //   	})
  //   }
  //
  //   /**
  //    * Star
  //    *
  //    * @param int x
  //    * @param int y
  //    * @param int length
  //    * @param opacity
  //    */
  //   function Star(x, y, length, opacity, color) {
  //   	this.x = parseInt(x);
  //   	this.y = parseInt(y);
  //   	this.length = parseInt(length);
  //   	this.opacity = opacity;
  //   	this.factor = 1;
  //   	this.increment = Math.random() * .03;
  //     this.color = color;
  //   }
  //
  //   /**
  //    * Draw a star
  //    *
  //    * This function draws a start.
  //    * You need to give the contaxt as a parameter
  //    *
  //    * @param context
  //    */
  //   Star.prototype.draw = function() {
  //   	// context.rotate((Math.PI * 1 / 10));
  //
  //   	// Save the context
  //   	context.save();
  //
  //   	// move into the middle of the canvas, just to make room
  //   	context.translate(this.x, this.y);
  //
  //   	// Change the opacity
  //   	if(this.opacity > 1) {
  //   		this.factor = -1;
  //   	}
  //   	else if(this.opacity <= 0) {
  //   		this.factor = 1;
  //
  //   		this.x = Math.round(Math.random() * screenW);
  //   		this.y = Math.round(Math.random() * screenH);
  //   	}
  //
  //   	this.opacity += this.increment * this.factor;
  //
  //   	context.beginPath()
  //   	for (var i = 5; i--;) {
  //   		context.lineTo(0, this.length);
  //   		context.translate(0, this.length);
  //   		context.rotate((Math.PI * 2 / 10));
  //   		context.lineTo(0, - this.length);
  //   		context.translate(0, - this.length);
  //   		context.rotate(-(Math.PI * 6 / 10));
  //   	}
  //   	context.lineTo(0, this.length);
  //   	context.closePath();
  //
  //   	// context.fillStyle = "rgba(255, 255, 200, " + this.opacity + ")";
  //     context.fillStyle = this.color + this.opacity + ")";
  //   	context.shadowBlur = 5;
  //   	context.shadowColor = this.color;
  //
  //   	context.fill();
  //
  //   	context.restore();
  // }

// }
}

export default App;
