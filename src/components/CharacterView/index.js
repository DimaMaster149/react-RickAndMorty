import React, { Component } from 'react';
import PropTypes from 'prop-types';



class CharacterView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {item} = this.props;
        return (
            <div className="block">
                <img className="block__image" src={item.image} alt=""/>
                <div className="block__text"> Status: {item.status}</div>
                <div className="block__text">Species: {item.species}</div>
                <div className="block__text">Gender: {item.gender}</div>
                <div className="block__text">Origin: {item.origin.name}</div>
                <div className="block__text">Last location: {item.location.name}</div>
            </div>
        )
    }
}
// CharacterView.propTypes = {
//     item: PropTypes.object
// };
export default CharacterView;