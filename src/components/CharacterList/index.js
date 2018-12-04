import React, { Component } from 'react';
import CharacterView from '../CharacterView'
import Pagination from '../Pagination'
import PropTypes from 'prop-types';
import axios from "axios";

class CharacterList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            characters: []
        };
    }

    fetchCharacters = () => {
        console.log(this.props.match.params.page, 'page');
        axios.get(`https://rickandmortyapi.com/api/character/?page=${this.props.match.params.page}`)
            .then(res => {
                console.log(res.data);
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
        if(this.state.characters.length) {
            return (
                <div className="page">
                    <Pagination/>
                    <div className="list">
                        {this.state.characters.map((item, index) => (
                          <CharacterView
                            key={`item-key-${item.id}`}
                            item={item}
                            />
                            ))}
                     </div>
                </div>
            );
        }
        else {
            return (
                <div>Loading data</div>
            )
        }
    }

}

export default CharacterList;
