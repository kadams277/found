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
      this.setState({
        animals: results
      })       
      });
    
  },

  // Here we render the function
  render: function() {
    console.log(this.state.animals);
    return (
        <div id="container" className="container-fluid">
          {/* Landing Page */}

            {/* Navbar */}
            <nav className="z-depth-0">
              <div  id="navbar" className="nav-wrapper">
                <a href="#" id="navLogo" className="brand-logo left">FOUND</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li><a id="login" className="waves-effect waves-light btn">LOGIN</a></li>
                </ul>
              </div>
            </nav>

              <div id="card1" className="card sticky-action">
                <div className="card-image waves-effect waves-block waves-light">
                  <img className="activator" src="images/puppy.jpg"/>
                </div>
                <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
                  <p><a href="#">This is a link</a></p>
                </div>
                <div className="card-action">
                  <a href="#">This is a link</a>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                  <p>Here is some more information about this product that is only revealed once clicked on.</p>
                </div>
              </div>

              <div id="card1" className="card sticky-action">
                <div className="card-image waves-effect waves-block waves-light">
                  <img className="activator" src="images/puppy.jpg"/>
                </div>
                <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
                  <p><a href="#">This is a link</a></p>
                </div>
                <div className="card-action">
                  <a href="#">This is a link</a>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                  <p>Here is some more information about this product that is only revealed once clicked on.</p>
                </div>
              </div>

              <div id="card1" className="card sticky-action">
                <div className="card-image waves-effect waves-block waves-light">
                  <img className="activator" src="images/puppy.jpg"/>
                </div>
                <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
                  <p><a href="#">This is a link</a></p>
                </div>
                <div className="card-action">
                  <a href="#">This is a link</a>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                  <p>Here is some more information about this product that is only revealed once clicked on.</p>
                </div>
              </div>


        {/* End Container */}
        </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Find;
