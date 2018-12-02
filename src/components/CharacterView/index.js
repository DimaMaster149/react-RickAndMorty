import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

class CharacterView extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
            item: PropTypes.object
    }
// TODO: Обертку Роутер, по нажатию переходить на отдельную страницу персонажа по айди и передавать туда персонажа
    render() {
        const {item} = this.props;
        return (
            
            <div className="block">
                <Link to={`/characters/`+item.id}>
                    <div>
                        <img className="block__image" src={item.image} alt=""/>
                        <div className="block__text"> Status: {item.status}</div>
                        <div className="block__text">Species: {item.species}</div>
                        <div className="block__text">Gender: {item.gender}</div>
                        <div className="block__text">Origin: {item.origin.name}</div>
                        <div className="block__text">Last location: {item.location.name}</div>
                    </div>
                </Link>
            </div>
        )
    }
}

export default CharacterView;