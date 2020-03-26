import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class ExploreCategory extends Component {
    constructor(props){
        super(props)
        this.state = {
            movies: []
        }
    }

    componentDidMount = async () => {
        const movies = await axios.get(this.props.apiURL)
        this.setState({
            movies: movies.data.results.splice(0,4)
        })
    }
    
    render() {
        return (
            <div className="explore-category">
                <span className="explore-title">{this.props.title}</span>
                <div className="row explore-row">
                    {
                        this.state.movies.map(film => {
                            return(
                                <div key={Math.random()}>
                                    <Link to={`/details/${this.props.type}/${film.id}`}>
                                        <img src={`https://image.tmdb.org/t/p/w200`+film.poster_path} className = "explore-image" alt=""/>
                                    </Link>
                                </div>
                            )
                        })
                    }
                    
                </div>
                <a href="/" style={{fontSize: "13pt", margin:"10px -5px", display: "inherit"}}>
                    See All {this.props.title} <i className="fas fa-angle-double-right" style={{color: "grey", fontSize:"10pt"}}></i>
                </a>
            </div>
        )
    }
}
