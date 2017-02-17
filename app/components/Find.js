// Include React
var React = require("react");

// Ability to link to other pages
var {Link} = require('react-router');

// Create the Parent Component
var Find = React.createClass({

  // Here we set a generic state associated with the number of clicks
  getInitialState: function() {
    return {
      animals: []
    }
  },

  //  On load display the number of clicks
  componentDidMount: function() {
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
    const renderAnimals = () => {
     return this.state.animals.map(function(pet, index) {
        return (
                <div id="card1" className="card sticky-action">
                <div className="card-image waves-effect waves-block waves-light">
                  <img className="activator" src={pet.animalPicture} style={{width: 300, height: 300}}/>
                </div>
                <div className="card-content">
                  <span  id="petTitle" className="card-title activator">{pet.animalGender} {pet.animalType}<i className="material-icons right">more_vert</i></span>
                  <p><a href="#" id="location">{pet.userCity}, {pet.userState}</a></p>
                </div>
                <div className="card-action">
                  <a id="emailLink" href= {"mailto:" + pet.userEmail}>This is my pet!</a>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">{pet.animalGender} {pet.animalType}<i className="material-icons right">close</i></span>
                  <p>Type: {pet.animalType}</p>
                  <p>Gender: {pet.animalGender}</p>
                  <p>Main Color Grouping: {pet.animalColorGrouping}</p>
                  <p>Size: {pet.animalSize}</p>
                  <p>Notes: {pet.additionalInfo}</p>
                  <p>Contact Name: {pet.userName}</p>
                  <p>Contact Email: {pet.userEmail}</p>
                </div>
              </div>
              )
        })
    }
    return (
        <div id="container" className="container-fluid">
          {/* Landing Page */}

            {/* Navbar */}
            <nav className="z-depth-0">
              <div  id="navbar" className="nav-wrapper">
                <a href="/" id="navLogo" className="brand-logo left">FOUND</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li><a id="login" className="waves-effect waves-light btn">LOGIN</a></li>
                </ul>
              </div>
            </nav>
              {renderAnimals()}
              

        {/* End Container */}
        </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Find;
