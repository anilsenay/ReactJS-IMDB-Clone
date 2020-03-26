import React, { Component } from 'react'
import axios from 'axios'

export default class LeftBarTopImage extends Component {

    state = {
        filmTitle : "",
        filmUrl : ""
    }

    componentDidMount(){
        axios.get("https://api.themoviedb.org/3/movie/popular?api_key=ee5e74e39e7bb0a1514fd8909bbd92f8&language=en-US&page=1").then(obj => {
            this.setState({filmTitle: obj.data.results.splice(0,1)[0].original_title, filmUrl: "https://image.tmdb.org/t/p/w500"+obj.data.results.splice(0,1)[0].backdrop_path})
        })
    }

    render() {
        return (
            <div className="top-photo-container">
                <img src={this.state.filmUrl} className="top-photo" alt={this.state.filmTitle}/>
            </div>
        )
    }
}
