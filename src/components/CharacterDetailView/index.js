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

    fetchCharacters = () => {
        axios.get('https://rickandmortyapi.com/api/character/?page=1')
            .then(res => {
                const characters = res.data.results;
                const item = characters.find(character => character.id == this.props.match.params.id);
                this.setState(state => ({
                    character: item
                }))
                console.log(this.state.character);
            })
            .catch(e => {
                console.warn(`Errors with API: ${e.code} ${e.message}`);
            });
            
    }

    componentDidMount() {
        this.fetchCharacters();
    }

    render() {
        const {character} = this.state;
        return (
            <div className="block">
                <img className="block__image" src={character.image} alt=""/>
                <div className="block__text"> Status: {character.status}</div>
                <div className="block__text">Species: {character.species}</div>
                <div className="block__text">Gender: {character.gender}</div>
                <Link to={`/characters`} class="back"> Back </Link>
            </div>
        )
    }
}

export default CharacterDetailView;