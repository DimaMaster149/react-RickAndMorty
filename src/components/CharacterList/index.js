import React, { Component } from 'react';
import axios from 'axios';
import CharacterView from '../CharacterView';

class CharacterList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            characters: []
        };
    }

    fetchCharacters = () =>{
        axios.get('https://rickandmortyapi.com/api/character/?page=1')
            .then(res => {
                const characters = res.data.results;
                this.setState(state => ({
                    characters: state.characters.concat(characters)
                }))
            })
            .catch(e => {
                console.warn(`Errors with API: ${e.code} ${e.message}`);
            });
    }

    componentDidMount() {
        this.fetchCharacters();
    }

    render() {
        return (
            <div className="page">
                <div className="list">
                    {this.state.characters.map((item, index) => (
                    <CharacterView
                        key={`item-key-${item.id}`}
                        item={item}
                    />
                        ))}
                </div>
            </div>
        )
    }

}

export default CharacterList;