var React = require("react");

var Form = React.createClass({
getInitialState: function() {
            return {
            file: '',
            imageUrl: '',
            savedImage: ''
        }
    },
    handleImageChange: function(e){
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imageUrl: reader.result
            })
        }
        reader.readAsDataURL(file)
    },
   
    handleCreate: function(event) {
        event.preventDefault();

        const creds = {};

        const userName = this.refs.userName.value;
        const userCity = this.refs.userCity.value;
        const userState = this.refs.userState.value;
        const userEmail = this.refs.userEmail.value;
        const animalType = this.refs.animalType.value;
        const animalGender = this.refs.animalGender.value;
        const animalColorGrouping = this.refs.animalColorGrouping.value;
        const animalSize = this.refs.animalSize.value;
        const additionalInfo = this.refs.additionalInfo.value;
        const profileImage = this.state.imageUrl;

        creds.userName = userName;
        creds.userCity = userCity;
        creds.userState = userState;
        creds.userEmail = userEmail;
        creds.animalType = animalType;
        creds.animalGender = animalGender;
        creds.animalColorGrouping = animalColorGrouping;
        creds.animalSize = animalSize;
        creds.additionalInfo = additionalInfo;
        creds.profileImage = profileImage

        // if (title.length > 0) {
        //     this.refs.title.value = '';
        //     creds.title = title;
        // } else {
        //     alert('Be Sure Enter Mission Title');
        // }

        // if (description.length > 0) {
        //     this.refs.description.value = '';
        //     creds.description = description;
        // } else {
        //     alert('Be Sure Enter Mission Description');
        // }

        // if(selection){
        //     creds.selection = selection;
        //     this.setState({
        //         selection: ''
        //     })
        // }

        this.props.AddAnimal(creds);
    },
    render: function() {
        return (
            <div>
                <div className="row center-align">
                    <div className="col s12">
                        <h2 id="formTitle" className="missionTitle">ADD AN ANIMAL</h2>
                    </div>
                </div>
                <form onSubmit={this.handleCreate.bind(this)}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="animalType" type="text" className="validate" ref="animalType"/>
                            <label for="animalType">What kind of animal did you find? Dog or cat?</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="animalGender" type="text" className="validate" ref="animalGender" />
                            <label for="animalGender">Is the animal male or female?</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="animalColor" type="text" className="validate" ref="animalColorGrouping" />
                            <label for="animalColor">What is the animal's main color grouping?</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="animalSize" type="text" className="validate" ref="animalSize" />
                            <label for="animalSize">What size is the animal? Large, medium, or small?</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="userCity" type="text" className="validate" ref="userCity" />
                            <label for="userCity">In what city did you find this animal?</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="userState" type="text" className="validate" ref="userState" />
                            <label for="userState">In what state did you find this animal?</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="userName" type="text" className="validate" ref="userName" />
                            <label for="userName">What is your name?</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="userEmail" type="text" className="validate" ref="userEmail" />
                            <label for="userEmail">What is your email address?</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="additonalInfo" type="text" className="validate" ref="additionalInfo" />
                            <label for="additionalInfo">Any additional info you'd like to add?</label>
                        </div>
                        <div className="col s6">
                            <div className="file-field input-field">
                                <div id="image" className="btn">
                                    <span>Upload a picture of the found animal</span>
                                    <input type="file" onChange={this.handleImageChange.bind(this)}/>
                                </div>
                            </div> 
                            <input  id="add" className="btn" type="submit" value="Add" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <input  id="add" className="btn" type="submit" value="Add" />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
});

module.exports = Form;