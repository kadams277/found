import React, { Component } from 'react';

var Animal = React.createClass({
	render: function(){
        return (
                <div id="card1" className="card sticky-action">
                <div className="card-image waves-effect waves-block waves-light">
                  <img className="activator" src={this.props.image} style={{width: 300, height: 300}}/>
                </div>
                <div className="card-content">
                  <span  id="petTitle" className="card-title activator">{this.props.gender} {this.props.type}<i className="material-icons right">more_vert</i></span>
                  <p><a href="#" id="location">{this.props.city}, {this.props.state}</a></p>
                </div>
                <div className="card-action">
                  <a id="emailLink" href= {"mailto:" + this.props.email}>This is my pet!</a>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">{this.props.gender} {this.props.type}<i className="material-icons right">close</i></span>
                  <p>Type: {this.props.type}</p>
                  <p>Gender: {this.props.gender}</p>
                  <p>Main Color Grouping: {this.props.color}</p>
                  <p>Size: {this.props.size}</p>
                  <p>Notes: {this.props.info}</p>
                  <p>Contact Name: {this.props.username}</p>
                  <p>Contact Email: {this.props.email}</p>
                </div>
              </div>
              )
	}
});

module.exports = Animal;