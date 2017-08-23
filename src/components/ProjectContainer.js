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

  inlineStyle = (marginBottom) => {
    return{
      marginBottom: marginBottom
    }
  }

  render(){
    const renderIcons = this.renderIcons();
    return(
      <div className="project-container col-lg-3 col-md-3 col-sm-6 col-xs-12" id="project">
        <div className="project-image-container">
          <img src={this.props.image} alt={this.props.title} className="project-image" style={this.props.marginBottom? this.inlineStyle(this.props.marginBottom):null}/>
        </div>
        <div className="project-right">
          <div className="project-title">{this.props.title}</div>
          <section className="project-rest">
          <p className="project-description">{this.props.description}</p>
          <p>Built with: {this.props.stack}</p>
          <p>Deployed with: {this.props.deployment}</p>
          <div className="project-links">
            <a className="link-github button" href={this.props.links.github} target="_blank" rel="noopener noreferrer"> Github </a>
            <a className="link-site button" href={this.props.links.site} target="_blank" rel="noopener noreferrer"> Live </a>
          </div>
          </section>
        </div>
      </div>
    )
  }
}

// <div className="icon-right-container">
//   {renderIcons}
// </div>

// // <div id="project1-image" className="project-image"></div>
// <i className="devicon-javascript-plain colored icon-for-dev"></i>
// <i className="devicon-html5-plain-wordmark colored icon-for-dev"></i>
// <i className="devicon-css3-plain-wordmark colored icon-for-dev"></i>
export default ProjectContainer;


// <div className="col-lg-3 col-md-4 col-sm-12 project-image-container">
//   <img src={this.props.image} alt={this.props.title} className="project-image" style={this.props.marginBottom? this.inlineStyle(this.props.marginBottom):null}/>
// </div>
// <div className="project-right col-lg-9 col-md-8 col-sm-12">
//   <div className="project-title">{this.props.title}</div>
//   <section className="project-rest">
//   <p className="project-description">{this.props.description}</p>
//   <p>Built with: {this.props.stack}</p>
//   <p>Deployed with: {this.props.deployment}</p>
//   <div className="project-links">
//     <a className="link-github button" href={this.props.links.github} target="_blank" rel="noopener noreferrer"> Github </a>
//     <a className="link-site button" href={this.props.links.site} target="_blank" rel="noopener noreferrer"> Live </a>
//   </div>
//   </section>
// </div>
