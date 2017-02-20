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
    // const renderAnimals = () => {
    //  return this.state.animals.map(function(pet, index) {
    //     return (
    //             <div id="card1" className="card sticky-action">
    //             <div className="card-image waves-effect waves-block waves-light">
    //               <img className="activator" src={pet.animalPicture} style={{width: 300, height: 300}}/>
    //             </div>
    //             <div className="card-content">
    //               <span  id="petTitle" className="card-title activator">{pet.animalGender} {pet.animalType}<i className="material-icons right">more_vert</i></span>
    //               <p><a href="#" id="location">{pet.userCity}, {pet.userState}</a></p>
    //             </div>
    //             <div className="card-action">
    //               <a id="emailLink" href= {"mailto:" + pet.userEmail}>This is my pet!</a>
    //             </div>
    //             <div className="card-reveal">
    //               <span className="card-title grey-text text-darken-4">{pet.animalGender} {pet.animalType}<i className="material-icons right">close</i></span>
    //               <p>Type: {pet.animalType}</p>
    //               <p>Gender: {pet.animalGender}</p>
    //               <p>Main Color Grouping: {pet.animalColorGrouping}</p>
    //               <p>Size: {pet.animalSize}</p>
    //               <p>Notes: {pet.additionalInfo}</p>
    //               <p>Contact Name: {pet.userName}</p>
    //               <p>Contact Email: {pet.userEmail}</p>
    //             </div>
    //           </div>
    //           )
        
    //     })
    // }

    const filteredAnimals = this.state.animals.filter((pet) =>{ 
      return this.state.dropdown === "all" || pet.animalType.toLowerCase() === this.state.dropdown 
    });

    return (
        <div id="container" className="container-fluid">
          {/* Landing Page */}

            {/* Navbar */}
            {/*<nav className="z-depth-0">
              <div  id="navbar" className="nav-wrapper">
                <a href="/" id="navLogo" className="brand-logo left">FOUND</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li><a id="login" className="waves-effect waves-light btn">LOGIN</a></li>
                </ul>
              </div>
            </nav>*/}



            <ul id="dropdown1" className="dropdown-content">
              <li ref="animal" value="all" onClick={this.select.bind(null, "all")}>All</li>
              <li ref="animal" value="dog" onClick={this.select.bind(null, "dog")}>Dog</li>
              <li ref="animal" value="cat" onClick={this.select.bind(null, "cat")}>Cat</li>
            </ul>
            <nav>
              <div className="nav-wrapper">
                <a href="#!" className="brand-logo">Logo</a>
                <ul className="right hide-on-med-and-down" ref="drop"> 
                  <li><a className="dropdown-button" data-activates="dropdown1">Animal Type<i className="material-icons right">arrow_drop_down</i></a></li>

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
