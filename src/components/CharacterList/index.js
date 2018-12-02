import React, { Component } from 'react';
import CharacterView from '../CharacterView'
import PropTypes from 'prop-types';

class CharacterList extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
            characters: PropTypes.array
    }

    render() {
        if(this.props.characters.length) {
            return (
                <div className="page">
                    <div className="list">
                        {this.props.characters.map((item, index) => (
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
