import React, { Component } from 'react'; 
import Animal from './Animal';

var AnimalList = React.createClass({
    render: function() {
        const { animals } = this.props;
        
        var renderAnimals = () => {
            return animals.map((pet, index) => {
                return (
                    <Animal
                        image={pet.animalPicture}
                        gender={pet.animalGender}
                        type={pet.animalType}
                        city={pet.userCity}
                        state={pet.userState}
                        email={pet.userEmail}
                        color={pet.animalColorGrouping}
                        size={pet.animalSize}
                        info={pet.additionalInfo}
                        username={pet.userName}
                        key={index}
                    />
                );
            });
        }
        return (
            <div>
                {renderAnimals()}
            </div>
        );
    } 
});

module.exports = AnimalList