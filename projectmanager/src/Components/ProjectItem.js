import React, { Component } from 'react';

class ProjectItem extends Component {
  deleteProject(id){
      console.log('deleted');
      this.props.onDelete(id);
  }

  render() {
    return (
      <div className="container">
      <ul className="list-group">
      <li className="Project">
       <strong> {this.props.project.title} </strong>: {this.props.project.category} &nbsp; 
       <button className="btn btn-danger" onClick={this.deleteProject.bind(this,this.props.project.id)}> Delete </button>
      </li>
      </ul>
      </div>
    );
  }
}

/*ProjectItem.propTypes = {
  project: React.PropTypes.object,
  onDelete: React.PropTypes.func
}*/

export default ProjectItem;