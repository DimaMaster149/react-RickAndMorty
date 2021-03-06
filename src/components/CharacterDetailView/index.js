import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
class CharacterDetailView extends Component {

  constructor(props) {
      super(props);

      this.state = {
        character: {}
    };
  }

    fetchCharacter = () => {
        axios.get(`https://rickandmortyapi.com/api/character/${this.props.match.params.id}`)
            .then(response => {
                this.setState(state => ({
                    character: response.data
                }))
                console.log(this.state.character);
            })
            .catch(e => {
                console.warn(`Errors with API: ${e.code} ${e.message}`);
            });

    }

    returnBack = () =>{
      this.props.history.goBack();
    }

    componentDidMount() {
      console.log(this.props.location);
        this.fetchCharacter();
    }

    render() {
        const {character} = this.state;
        return (
            <div className="block">
                <img className="block__image" src={character.image} alt=""/>
                <div className="block__text"> Status: {character.status}</div>
                <div className="block__text">Species: {character.species}</div>
                <div className="block__text">Gender: {character.gender}</div>
                <button onClick={this.returnBack}> Back </button>
            </div>
        )
    }
}

export default CharacterDetailView;
