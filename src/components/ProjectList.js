import React, { Component } from 'react';

class ProjectList extends Component{
  constructor(props){
    super(props);
    this.state={
      description:{
        project1: "Inspired by RPG and Zombies, "
      }
    }
  }



  render(){
    return(
      <div className="project-list-container">
        <div className="project-list-left">
          <div className="project-list-view-container"></div>

        </div>
        <div className="project-view-right">
          <div className="project-view-image"></div>
          <div className="project-description-container">

          </div>
        </div>
      </div>
    )
  }
}

export default ProjectList;
