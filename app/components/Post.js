// Include React
var React = require("react");

// Ability to link to other pages
var {Link} = require('react-router');

// Create the Parent Component
var Post = React.createClass({

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
            <h1>I really really hate React</h1>
          {/* End Row */}
          </div>
        {/* End Container */}
        </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Post;
