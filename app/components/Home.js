// Include React
var React = require("react");

// Ability to link to other pages
var {Link} = require('react-router');

// Here we include all of the sub-components
var Child = require("./Child");

// Requiring our helper for making API calls
var helpers = require("../utils/helpers");

// Create the Parent Component
var Home = React.createClass({

  // Here we set a generic state associated with the number of clicks
  getInitialState: function() {
    return {}
  },

  //  On load display the number of clicks
  componentDidMount: function() {
    
  },
  // Whenever our component updates, the code inside componentDidUpdate is run
  componentDidUpdate: function(prevState) {
    
  },

  // Here we render the function
  render: function() {
    return (
        <div className="container-fluid">
          {/* Landing Page */}
          <div className= "row">
            <div className= "col s1">
            </div>
            <div className= "col s10">
              <img id="logo" src="images/foundTape.png"/>
              <h2 id="tagline">Find a missing pet. Help others do the same.</h2>
              <div className="center-align">
                <Link to="/find" id="find" className="waves-effect waves-light btn">Find</Link>
                <Link to="/post" id="post" className="waves-effect waves-light btn">Post</Link>
              </div>
            </div>
            <div className= "col s1">
            </div>
          {/* End Row */}
          </div>
        {/* End Container */}
        </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Home;
