import React, { Component } from 'react';
import axios from "axios";
import { Link } from "react-router-dom"

class Pagination extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pages:[]
        };
    }

    fetchPages = () => {
        axios.get(`https://rickandmortyapi.com/api/character/`)
            .then(response => {
                const pagesNum = response.data.info.pages;
                const pagesArray = [];
                for(let i=0; i<pagesNum; i++){
                    pagesArray[i] = i+1;
                }
                this.setState(state => ({
                    pages: pagesArray
                }))
            })
            .catch(e => {
                console.warn(`Errors with API: ${e.code} ${e.message}`);
            });
    }

    componentDidMount() {
        this.fetchPages();
    }

    render() {
        if(this.state.pages.length) {
            return (
                <div >
                    <div >
                        {this.state.pages.map((item, index) => (
                            <a href={`/characters/page/`+item} key={item}> {item}  </a>
                        ))}
                    </div>
                </div>
            );
        }
        else {
            return (
                <div>Loading pages</div>
            )
        }
    }

}

export default Pagination;
