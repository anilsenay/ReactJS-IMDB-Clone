import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function LeftBarItem(props) {

    const [isOpen, setIsOpen] = useState(false)
    const [films, setFilms] = useState([])

    useEffect(() => {
        axios.get(props.films).then(obj => {
                setFilms(obj.data.results.splice(0,5))
        })
    })

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
                                <div className="left-bar-film">
                                    <div style={{margin:"auto"}}>
                                        <img src={`https://image.tmdb.org/t/p/w200`+film.poster_path} className="left-bar-film-image"/>
                                    </div>
                                    <div className="left-bar-film-info">
                                        <span style={{fontWeight:"bold"}}>{film.original_title}</span>
                                        <span style={{color:"grey"}}>$537.3M</span>
                                    </div>
                                    <span className="imdb-rating">{film.vote_average}</span>
                                </div>
                            )
                        })
                    }
                    
                    <span className="more-result-text">MORE RESULT</span>
                </div> : null}
            </div>
        </div>
    )
}
