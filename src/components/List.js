import React from 'react'
import NavBar from './NavBar/NavBar';
import LeftBar from './LeftBar';
import ListFilms from './ListFilms'

export default function List(props) {

    const filmURLs = {
        "trendings" : "https://api.themoviedb.org/3/trending/movie/week?api_key=ee5e74e39e7bb0a1514fd8909bbd92f8",
        "top-movies-2019" : "https://api.themoviedb.org/3/discover/movie?api_key=ee5e74e39e7bb0a1514fd8909bbd92f8&language=en-US&sort_by=vote_average.desc&page=1&primary_release_year=2019&vote_count.gte=2000&with_original_language=en",
        "top-rated-movies" : "https://api.themoviedb.org/3/discover/movie?api_key=ee5e74e39e7bb0a1514fd8909bbd92f8&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&vote_count.gte=10000&with_original_language=en",
        "top-rated-series" : "https://api.themoviedb.org/3/discover/tv?api_key=ee5e74e39e7bb0a1514fd8909bbd92f8&language=en-US&sort_by=vote_average.desc&page=1&vote_count.gte=500&include_null_first_air_dates=false",
        "top-series-2019" : "https://api.themoviedb.org/3/discover/tv?api_key=ee5e74e39e7bb0a1514fd8909bbd92f8&language=en-US&sort_by=vote_average.desc&first_air_date_year=2019&page=1&vote_count.gte=100&include_null_first_air_dates=false"
    }
    const listTitles = {
        "trendings" : "Trendings",
        "top-movies-2019" : "Top Movies 2019",
        "top-rated-movies" : "Top Rated Movies",
        "top-rated-series" : "Top Rated Series",
        "top-series-2019" : "Top Series 2019"
    }

    const url = filmURLs[props.match.params.listType]
    const title = listTitles[props.match.params.listType]

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
                    <ListFilms url={url}/>
                </div>
            </div>
        </div>
    )
}