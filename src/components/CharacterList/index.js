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

    componentDidMount() {
        axios.get('https://rickandmortyapi.com/api/character/?page=1')
            .then(res => {
                console.log(res.data.results);
                let characters = res.data.results;
                this.setState(state => ({
                    characters: this.state.characters.concat(characters)
                }))
            })
            .catch(e => {
                console.warn(`Errors with API: ${e.code} ${e.message}`);
            });
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