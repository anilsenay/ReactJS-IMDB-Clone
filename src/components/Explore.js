import React from 'react'
import ExploreCategory from './ExploreCategory'

const filterCounter = 0

const topMovies2019URL = "https://api.themoviedb.org/3/discover/movie?api_key=ee5e74e39e7bb0a1514fd8909bbd92f8&language=en-US&sort_by=vote_average.desc&page=1&primary_release_year=2019&vote_count.gte=2000&with_original_language=en"
const trendingsURL = "https://api.themoviedb.org/3/trending/movie/week?api_key=ee5e74e39e7bb0a1514fd8909bbd92f8"
const topRatedMoviesURL = "https://api.themoviedb.org/3/discover/movie?api_key=ee5e74e39e7bb0a1514fd8909bbd92f8&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&vote_count.gte=10000&with_original_language=en"
const topRatedSeriesURL = "https://api.themoviedb.org/3/discover/tv?api_key=ee5e74e39e7bb0a1514fd8909bbd92f8&language=en-US&sort_by=vote_average.desc&page=1&vote_count.gte=500&include_null_first_air_dates=false"
const topSeries2019URL = "https://api.themoviedb.org/3/discover/tv?api_key=ee5e74e39e7bb0a1514fd8909bbd92f8&language=en-US&sort_by=vote_average.desc&first_air_date_year=2019&page=1&vote_count.gte=500&include_null_first_air_dates=false"

export default function Explore() {

    return (
        <div className="explore">
            <h1 className="explore-text">Explore</h1>
            <div className="search-filters-bar">
                <input className="form-control search-box" type="text" placeholder="Search" aria-label="Search"></input>
                <span className="filter-counter">0</span>
                <span className="font-weight-bold" style={{margin:"auto",marginLeft:"10px"}}>All Filters</span>
            </div>
            <ExploreCategory title="Trendings" apiURL={trendingsURL}/>
            <ExploreCategory title="Top Movies 2019" apiURL={topMovies2019URL}/>
            <ExploreCategory title="Top Rated Movies" apiURL={topRatedMoviesURL}/>
            <ExploreCategory title="Top TV Series 2019" apiURL={topSeries2019URL}/>
            <ExploreCategory title="Top Rated TV Series" apiURL={topRatedSeriesURL}/>

        </div>
    )
}
