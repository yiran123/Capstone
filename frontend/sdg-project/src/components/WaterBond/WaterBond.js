import React, { useState, useEffect } from 'react';
import Header from './Header'
import Environmental from './Environmental/index'
import Bottom from './Bottom'


class WaterBond extends React.Component {
	constructor(props) {
    super(props);
    this.state ={
      
      project:{
        
      }
    }
    this.fetchProject = this.fetchProject.bind(this)
	}
	componentWillMount() {
    this.fetchProject();
  }
  fetchProject() {
    fetch(`http://localhost:8000/api/project/${this.props.match.params.id}`)
    .then(response => response.json())
    .then(data =>
      this.setState({project:data})
      )
  }
	render() {
		return (
			<div>
			<Header project={this.state.project}/>
	    	<Environmental project={this.state.project}/>
	    	<Bottom project={this.state.project}/>
	    	</div>
		)
	}
}
export default WaterBond;