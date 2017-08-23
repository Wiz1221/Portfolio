import React, { Component } from 'react';

class ProjectContainer extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  renderIcons = () => {
    let elementsToRender = []
    this.props.icons.forEach((elem,index) => {
      elementsToRender.push(
                <i className={elem + " colored icon-for-dev"} key={index}></i>
      )
    })
    return elementsToRender
  }

  onClick = () => {
    this.props.whichProjectClicked(this.props.id)
  }

  render(){
    const renderIcons = this.renderIcons();
    return(
      <div className="project-container row" id="project">
        <div className="col-lg-3 col-md-4 col-sm-12 project-image-container">
          <img src={this.props.image} className="project-image"/>
        </div>
        <div className="project-rest col-lg-9 col-md-8 col-sm-12">
          <div className="project-title">{this.props.title}</div>
          <div className="project-description">{this.props.description}</div>
          <div className="icon-right-container">
            {renderIcons}
          </div>
          <div className="project-links">
            <a className="link-github" href={this.props.links.github}> Github </a>
            <a className="link-site" href={this.props.links.site}> Live </a>
          </div>
        </div>
      </div>
    )
  }
}

// // <div id="project1-image" className="project-image"></div>
// <i className="devicon-javascript-plain colored icon-for-dev"></i>
// <i className="devicon-html5-plain-wordmark colored icon-for-dev"></i>
// <i className="devicon-css3-plain-wordmark colored icon-for-dev"></i>
export default ProjectContainer;
