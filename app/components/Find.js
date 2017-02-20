// Include React
var React = require("react");

var ReactDOM = require("react-dom");
var AnimalList = require("./AnimalList");
// Ability to link to other pages
var {Link} = require('react-router');


// Create the Parent Component
var Find = React.createClass({

  // Here we set a generic state 
  getInitialState: function() {
    return {
      animals: [],
      dropdown: "all"
    }
  },

  select: function(item){         
    this.setState({             
      dropdown: item
    })     
  },

  componentDidMount: function() {
    var element = ReactDOM.findDOMNode(this.refs.drop)

    $(document).ready(function() {
      $(".dropdown-button").dropdown({ hover: false });
    });
    fetch('/api/animals', {                  
      headers: {        
        'content-type': 'application/json',
        'accept': 'application/json'      
      }     
    }).then((response) => response.json()).then((results) => {
      console.log(results);
      this.setState({
        animals: results
      })       
      });
    
  },

  // Here we render the function
  render: function() {
    const filteredAnimals = this.state.animals.filter((pet) =>{ 
      return this.state.dropdown === "all" || pet.animalType.toLowerCase() === this.state.dropdown || pet.animalGender.toLowerCase() === this.state.dropdown 
    });

    return (
        <div id="container" className="container-fluid">
          {/* Animal Type Dropdown */}


            <ul id="dropdown1" className="dropdown-content">
              <li  id="option1" ref="animal" value="all" onClick={this.select.bind(null, "all")}>ALL</li>
              <li  id="option2" ref="animal" value="dog" onClick={this.select.bind(null, "dog")}>DOG</li>
              <li  id="option3" ref="animal" value="cat" onClick={this.select.bind(null, "cat")}>CAT</li>
            </ul>
             <ul id="dropdown2" className="dropdown-content">
              <li  id="option1" ref="animal" value="all" onClick={this.select.bind(null, "all")}>ALL</li>
              <li  id="option2" ref="animal" value="male" onClick={this.select.bind(null, "male")}>MALE</li>
              <li  id="option3" ref="animal" value="female" onClick={this.select.bind(null, "female")}>FEMALE</li>
            </ul>
            <nav>
              <div id="navbar" className= "nav-wrapper">
                <a href="/" id="navlogo" className="brand-logo">FOUND</a>
                <ul className="right hide-on-med-and-down" ref="drop"> 
                  <li><a className="dropdown-button" data-activates="dropdown2">ANIMAL GENDER<i className="material-icons right">arrow_drop_down</i></a></li>
                  <li><a className="dropdown-button" data-activates="dropdown1">ANIMAL TYPE<i className="material-icons right">arrow_drop_down</i></a></li>
                </ul>
              </div>
            </nav>
            <AnimalList animals={filteredAnimals}/>
              

        {/* End Container */}
        </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Find;
