import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function LeftBarItem(props) {

    const [isOpen, setIsOpen] = useState(false)
    const [films, setFilms] = useState([])

    useEffect(() => {
        if(films.length === 0)
            getData()
    })

    const getData = async () => {
        const films = await axios.get(props.films)
        setFilms(films.data.results.splice(0,5))
    }

    return (
        <div>
            <div className={`left-bar-item ${isOpen ? "left-bar-item-open" : ""}`}>
                <div style={{cursor:"pointer"}} onClick={() => setIsOpen(!isOpen)}>
                    <span className="left-bar-item-text">{props.text}</span>
                    <span className={`plus float-right ${isOpen ? "text-white" : ""}`}>{isOpen ? "–" : "+"}</span>
                </div>
                {isOpen ? 
                <div>
                    {
                        films.map(film => {
                            return (
                                    <Link key={film.original_title} to={`/details/movie/${film.id}`}>
                                        <div className="left-bar-film">
                                        
                                            <div style={{margin:"auto"}}>
                                                <img src={`https://image.tmdb.org/t/p/w200`+film.poster_path} className="left-bar-film-image" alt={film.original_title}/>
                                            </div>
                                            <div className="left-bar-film-info">
                                                <span className="left-bar-film-title">{film.original_title}</span>
                                                <span style={{color:"grey"}}>{`${film.release_date}`}</span>
                                            </div>
                                            <span className="imdb-rating">{film.vote_average}</span>
                                        
                                        </div>
                                    </Link>
                            )
                        })
                    }
                    <Link to={`/lists/${props.link}`}>
                        <span className="more-result-text">MORE RESULT</span>
                    </Link>
                </div> : null}
            </div>
        </div>
    )
}
