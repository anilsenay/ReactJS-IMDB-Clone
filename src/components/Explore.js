import React, {useState, useEffect} from 'react'
import ExploreCategory from './ExploreCategory'
import axios from 'axios'
import { Link } from 'react-router-dom'

//const filterCounter = 0

const topMovies2019URL = "https://api.themoviedb.org/3/discover/movie?api_key=ee5e74e39e7bb0a1514fd8909bbd92f8&language=en-US&sort_by=vote_average.desc&page=1&primary_release_year=2019&vote_count.gte=2000&with_original_language=en"
const trendingsURL = "https://api.themoviedb.org/3/trending/movie/week?api_key=ee5e74e39e7bb0a1514fd8909bbd92f8"
const topRatedMoviesURL = "https://api.themoviedb.org/3/discover/movie?api_key=ee5e74e39e7bb0a1514fd8909bbd92f8&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&vote_count.gte=10000&with_original_language=en"
const topRatedSeriesURL = "https://api.themoviedb.org/3/discover/tv?api_key=ee5e74e39e7bb0a1514fd8909bbd92f8&language=en-US&sort_by=vote_average.desc&page=1&vote_count.gte=500&include_null_first_air_dates=false"
const topSeries2019URL = "https://api.themoviedb.org/3/discover/tv?api_key=ee5e74e39e7bb0a1514fd8909bbd92f8&language=en-US&sort_by=vote_average.desc&first_air_date_year=2019&page=1&vote_count.gte=500&include_null_first_air_dates=false"

export default function Explore() {

    const [searchText, setSearchText] = useState("")
    const [searchedMovies, setSearchedMovies] = useState([])
    const [isSearched, setIsSearched] = useState(false)

    const handleChange = (event) =>{
        if(event.target.value !== searchText){
            setSearchText(event.target.value)
            setIsSearched(true)
        }
    }

    useEffect(() => {
        if(isSearched !== false)
            getData()
    })

    const getData = async () => {
        const films = await axios.get("https://api.themoviedb.org/3/search/multi?api_key=ee5e74e39e7bb0a1514fd8909bbd92f8&language=en-US&query="+searchText+"&page=1&include_adult=false")
        const tempArray = []
        films.data.results.splice(0,20).map(film => {
            film.poster_path !== undefined && film.poster_path !== null ? tempArray.push(film) : void(0)
            return true;
        })
        if(tempArray.length !== searchedMovies){
            setSearchedMovies(tempArray)
            setIsSearched(false)
        }
    }
    console.log(searchedMovies)
    return (
        <div className="explore">
            <h1 className="explore-text">Explore</h1>
            <div className="search-filters-bar">
                <input className="form-control search-box" type="text" placeholder="Search" aria-label="Search" onChange={handleChange}></input>
                <span className="filter-counter">0</span>
                <span className="font-weight-bold" style={{margin:"auto",marginLeft:"10px",cursor:"pointer"}}>All Filters</span>
            </div>
            {
                searchText.length === 0 ? 
                (
                <div>
                    <ExploreCategory title="Trendings" apiURL={trendingsURL} type="movie" link="trendings"/>
                    <ExploreCategory title="Top Movies 2019" apiURL={topMovies2019URL} type="movie" link="top-movies-2019"/>
                    <ExploreCategory title="Top Rated Movies" apiURL={topRatedMoviesURL} type="movie" link="top-rated-movies"/>
                    <ExploreCategory title="Top TV Series 2019" apiURL={topSeries2019URL} type="tv" link="top-series-2019"/>
                    <ExploreCategory title="Top Rated TV Series" apiURL={topRatedSeriesURL} type="tv" link="top-rated-series"/>
                </div>
                )
                :
                (
                <div className="row explore-row">
                    {
                        searchedMovies.map(film => {
                            return(
                                <div key={film.id}>
                                    <Link to={`/details/${film.media_type}/${film.id}`}>
                                        <img src={`https://image.tmdb.org/t/p/w200`+film.poster_path} className = "explore-image" alt=""/>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
                )
            }
            

        </div>
    )
}
