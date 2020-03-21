import React, { Component } from 'react'
import axios from 'axios'

export default class ExploreCategory extends Component {
    constructor(props){
        super(props)
        this.state = {
            movies: []
        }
    }

    componentDidMount() {
    axios.get(this.props.apiURL)
        .then(obj => {
        const movies = obj.data.results.splice(0,4);
        this.setState({ movies });
        })
    }

    render() {
        console.log(this.state.movies)
        return (
            <div className="explore-category">
                <span className="explore-title">{this.props.title}</span>
                <div className="row explore-row">
                    {
                        this.state.movies.map(film => {
                            return(
                                <div key={film.title} class="">
                                    <img src={`https://image.tmdb.org/t/p/w200`+film.poster_path} className = "explore-image" alt=""/>
                                </div>
                            )
                        })
                    }
                    
                </div>
                <a href="/" style={{fontSize: "13pt", margin:"10px -5px", display: "inherit"}}>
                    See All {this.props.title} <i class="fas fa-angle-double-right" style={{color: "grey", fontSize:"10pt"}}></i>
                </a>
            </div>
        )
    }
}
