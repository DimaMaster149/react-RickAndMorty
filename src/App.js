import React, { Component } from 'react';

import CharacterList from './components/CharacterList';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <CharacterList />
            </div>
        )
    }
}

export default App;