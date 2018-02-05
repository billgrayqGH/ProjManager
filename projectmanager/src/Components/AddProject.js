import React, { Component } from 'react';
import uuid from 'uuid';

class AddProject extends Component {

constructor(){
    super();
    this.state = {
        newProject: {}
    }
}

 static defaultProps = {
     categories: ['Web Design', 'Web Development', 'Mobile Development']
 }
 

 handleSubmit(e){
    //console.log(this.refs.title.value);
    if(this.refs.title.value === ''){
        alert('title is required');
    } else{
        this.setState({newProject:{
            id: uuid.v4(),
            title: this.refs.title.value,
            category: this.refs.category.value
        }}, function(){
           // console.log(this.state);
           this.props.addProject(this.state.newProject);
        });
    }
    e.preventDefault();
 }

  render() {
 let categoryOptions = this.props.categories.map(category => {
     return <option key = {category} value={category}>{category}</option>
 });

    return (
      <div className="container" style={{border: '2px solid #e0e0d1'}}>
       <h3>Add Project</h3>
       <form className="form-horizontal" onSubmit={this.handleSubmit.bind(this)}>
           <div className="form-group">
               <label htmlFor="title" className="col-sm-2 control-label"> Title: </label>
               <div className="col-sm-10">
               <input type="text"  className="form-control" name="title" ref="title" style={{width: 300}} />
           </div>
           </div>
           <br />
           <div className="form-group">
           <div className="col-sm-10">
               <label className="col-sm-2 control-label"> Category: </label>
               <div className="col-sm-10">
               <select className="form-control" style={{width: 325}} ref="category">
               {categoryOptions}
               </select>
               </div>
           </div>
           </div>
           <br />
           <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <button type="submit" className="btn btn-success">Add Todo</button>
              </div>
            </div>
       </form>
      </div>
    );
  }
}

/*AddProject.propTypes = {
    categories: React.PropTypes.array,
    addProject: React.PropTypes.func
  }*/

export default AddProject;
