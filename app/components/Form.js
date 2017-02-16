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
        const profileImage = this.state.imageUrl;

        const userName = this.refs.userName.value;
        const userCity = this.refs.userCity.value;
        const userState = this.refs.userState.value;
        const userEmail = this.refs.userEmail.value;
        const additionalInfo = this.refs.additionalInfo.value;

        creds.profileImage = profileImage
        creds.userName = userName;
        creds.userCity = userCity;
        creds.userState = userState;
        creds.userEmail = userEmail;
        creds.additionalInfo = additionalInfo;


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
                <h2 className="missionTitle">Add an Animal</h2>
                <form onSubmit={this.handleCreate.bind(this)}>
                    <div>
                        <input type="text" placeholder="User Name" ref="userName" />
                    </div>
                    <div>
                        <input type="text" placeholder="User City" ref="userCity" />
                    </div>
                    <div>
                        <input type="text" placeholder="User State" ref="userState" />
                    </div>
                    <div>
                        <input type="text" placeholder="User Email" ref="userEmail" />
                    </div>
                    <div>
                        <input type="text" placeholder="Additional Info" ref="additionalInfo" />
                    </div>
                    <input className="fileInput" type="file" onChange={this.handleImageChange.bind(this)} />
                    <div>
                        <input type="submit" value="Add missing pet" />
                    </div>
                </form>
            </div>
        );
    }
});

module.exports = Form;