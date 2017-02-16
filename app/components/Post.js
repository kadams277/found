// Include React
var React = require("react");

var Router = require("react-router");

// Ability to link to other pages
var {Link} = require('react-router');

var Form = require("./Form");

// Create the Parent Component
var Post = React.createClass({

  // Here we set a generic state associated with the number of clicks
  getInitialState: function() {
    return {}
  },

  handleNewData: function (creds) {     
    const newAnimal = {       
      userName: creds.userName,       
      userCity: creds.userCity,       
      userState: creds.userState,       
      userEmail: creds.userEmail,     
      animalPicture: creds.profileImage,
      additionalInfo: creds.additionalInfo   
    }     
    fetch('/api/postAnimal', {      
      method: 'post',       
      body: JSON.stringify(newAnimal),      
      headers: {        
        'content-type': 'application/json',
        'accept': 'application/json'      
      }     
    }).then((response) => { 
    console.log(response);   
      Router.browserHistory.push('/find');      
      });
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
            <Form AddAnimal={this.handleNewData.bind(this)}/>
          {/* End Row */}
          </div>
        {/* End Container */}
        </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Post;
