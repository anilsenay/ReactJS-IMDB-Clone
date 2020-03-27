import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class ListFilms extends Component {
    constructor(props){
        super(props)
        this.state = {
            movies: []
        }
    }

    componentDidMount = async () => {
        const movies = await axios.get(this.props.url)
        this.setState({
            movies: movies.data.results
        })
    }
    componentDidUpdate = async () => {
        const movies = await axios.get(this.props.url)
        this.setState({
            movies: movies.data.results
        })
    }
    
    render() {
        return (
            <div className="explore-category">
                <span className="explore-title">{this.props.title}</span>
                <div className="row explore-row">
                    {
                        this.state.movies.map(film => {
                            if(film.poster_path !== null && film.poster_path !== undefined){
                                return(
                                <div key={Math.random()}>
                                    <Link to={`/details/${this.props.type}/${film.id}`}>
                                        <img src={`https://image.tmdb.org/t/p/w200`+film.poster_path} className = "explore-image" alt=""/>
                                    </Link>
                                </div>
                                )
                            }
                        })
                    }
                    
                </div>
                
            </div>
        )
    }
}
