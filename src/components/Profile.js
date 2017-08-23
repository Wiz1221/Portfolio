import React, { Component } from 'react';

import ProfilePic from '../Assets/portfolio-profile-pic.jpg';

import './Profile.css'

class Profile extends Component{
  render(){
    return(
      <div className="profile-container">
        <h2 className="header">About Me</h2>
        <div className="col-sm-12 col-md-3 col-lg-4">
          <img src={ProfilePic} className="profile-image"/>
        </div>
        <div className="profile-description col-sm-12 col-md-8 col-lg-8">
          <div className="profile-description-header">
            Hello! Nice to meet you!
          </div>
          <p className="profile-description-content">
            <br></br>
            I'm Geok Yan, a Web Developer.
            <br></br>
            <br></br>
            As a ex-Mathematics teacher, I have found affinity in Web Development,
            as it provides me with tools to make my ideas come to life. At the same time,
            develop products that make a difference in the world.
            <br></br>
            <br></br>
            I enjoy exploring new technologies and loves to engage in challenging ideas.
            <br></br>
            <br></br>
            In my free time, I like to play video games, read novels and teach Mathematics.
            My dream is build an App that will make Mathematics fun and engaging.
          </p>
          <nav>
          <p>Find me at : </p>
          <ul>
            <li>
              <a className="icon" href="https://www.linkedin.com/in/geok-yan-pek-44574a82/" target="_blank">
                <i className="fa fa-linkedin fa-2x"></i>
              </a>
            </li>
            <li>
              <a className="icon" href="https://github.com/Wiz1221" target="_blank">
                <i className="fa fa-github fa-2x"></i>
              </a>
            </li>
            <li>
              <a className="icon" href="#" target="_blank">
                <i className="fa fa-file fa-2x"></i>
              </a>
            </li>
          </ul>
          </nav>
        </div>
      </div>
    )
  }
}

export default Profile
