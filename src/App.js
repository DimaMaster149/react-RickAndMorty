import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import CharacterList from './components/CharacterList';
import CharacterDetailView from './components/CharacterDetailView';
import Pagination from './components/Pagination'

class App extends Component {

    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Route exact path="/characters/page/:page" render = {props => <CharacterList {...props}/>}/>
                        <Route exact path="/characters/character/:id" render={ props => <CharacterDetailView {...props}/>}/>
                    </div>
                </Router>
            </div>
        )
    }
}

export default App;
