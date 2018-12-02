import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import CharacterList from './components/CharacterList';
import CharacterDetailView from './components/CharacterDetailView';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            characters: []
        };
    }

    fetchCharacters = () => {
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
            <div>
                <Router>
                    <div>
                        <Route exact path="/characters" render = {() => <CharacterList characters={this.state.characters} />}/> 
                        <Route path="/characters/:id" render={ props => <CharacterDetailView {...props}/>}/> 
                    </div>
                </Router>
            </div>
        )
    }
}

export default App;