import React from 'react'
import NavBar from './NavBar/NavBar';
import LeftBar from './LeftBar';
import ListFilms from './ListFilms'

export default function List(props) {

    const lists = {
        "trendings" : ["https://api.themoviedb.org/3/trending/movie/week?api_key=ee5e74e39e7bb0a1514fd8909bbd92f8", "Trendings", "movie"],
        "top-movies-2019" : ["https://api.themoviedb.org/3/discover/movie?api_key=ee5e74e39e7bb0a1514fd8909bbd92f8&language=en-US&sort_by=vote_average.desc&page=1&primary_release_year=2019&vote_count.gte=2000&with_original_language=en", "Top Movies 2019", "movie"],
        "top-rated-movies" : ["https://api.themoviedb.org/3/discover/movie?api_key=ee5e74e39e7bb0a1514fd8909bbd92f8&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&vote_count.gte=10000&with_original_language=en", "Top Rated Movies", "movie"],
        "top-rated-series" : ["https://api.themoviedb.org/3/discover/tv?api_key=ee5e74e39e7bb0a1514fd8909bbd92f8&language=en-US&sort_by=vote_average.desc&page=1&vote_count.gte=500&include_null_first_air_dates=false", "Top Rated Series", "tv"],
        "top-series-2019" : ["https://api.themoviedb.org/3/discover/tv?api_key=ee5e74e39e7bb0a1514fd8909bbd92f8&language=en-US&sort_by=vote_average.desc&first_air_date_year=2019&page=1&vote_count.gte=100&include_null_first_air_dates=false", "Top Series 2019", "tv"],
        "popular" : ["https://api.themoviedb.org/3/movie/popular?api_key=ee5e74e39e7bb0a1514fd8909bbd92f8&language=en-US&page=1", "Popular", "movie"],
        "now-playing" : ["https://api.themoviedb.org/3/movie/now_playing?api_key=ee5e74e39e7bb0a1514fd8909bbd92f8&language=en-US&page=1", "Now Playing", "movie"],
        "coming-soon" : ["https://api.themoviedb.org/3/movie/upcoming?api_key=ee5e74e39e7bb0a1514fd8909bbd92f8&language=en-US&page=1&region=us", "Coming Soon", "movie"]
    }

    const url = lists[props.match.params.listType][0]
    const title = lists[props.match.params.listType][1]
    const type = lists[props.match.params.listType][2]
    
    return (
        <div className="container container-custom">
            <NavBar/>
            <div className="row row-custom">
                <div className="col-md-auto">
                <LeftBar />
                </div>
                <div className="col">
                    <div className="explore">
                        <h1 className="explore-text">{title}</h1>
                    </div>
                    <ListFilms url={url} type={type}/>
                </div>
            </div>
        </div>
    )
}
