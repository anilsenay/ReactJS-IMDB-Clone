import React, { useEffect, useState } from 'react'
import axios from 'axios'
import FilmFullCast from './FilmFullCast'

export default function FilmCast(props) {

    const [filmCast, setFilmCast] = useState([])
    const [filmDirector, setFilmDirector] = useState([])
    const [filmWriter, setFilmWriter] = useState([])
    const [filmStars, setFilmStars] = useState([])
    const [getDetails, setGetDetails] = useState(false)
    const [isButtonClicked, setButtonClicked] = useState(false)

    useEffect(() => {
        if(filmCast.length === 0){
            getData()
        }
        //if movie changed
        if(parseInt(filmCast.id) !== parseInt(props.id)){
            getData()
        }
        //if we got movie data absolutely
        if(getDetails){
            getCrew()
            setGetDetails(false)
        }
    })

    const getData = async () => {
        const data = await axios.get(`https://api.themoviedb.org/3/movie/${props.id}/credits?api_key=ee5e74e39e7bb0a1514fd8909bbd92f8`)
        setFilmCast(data.data)
        setGetDetails(true)
    }

    const getCrew = () => {
        const stars = []
        const directors = []
        const writers = []

        filmCast.crew.map(person => {
            if(person.job === "Director")
                return directors.push(person.name)
            if(person.job === "Screenplay" || person.job === "Writer")
                return writers.push(person.name)
            return true;
        })
        filmCast.cast.map(person => {
            return stars.push(person.name)
        })
        setFilmDirector(directors)
        setFilmWriter(writers)
        setFilmStars(stars.splice(0,3))
    }

    return (
        <div className="film-cast-short">
            <div className="director">
                <span style={{fontWeight: "bold"}}>Director: </span>
                {filmDirector.join(", ")}
            </div>
            <div className="writers">
                <span style={{fontWeight: "bold"}}>Writers: </span>
                {filmWriter.join(", ")}
            </div>
            <div className="stars">
                <span style={{fontWeight: "bold"}}>Stars: </span>
                {filmStars.join(", ")}
            </div>
            <span className="see-all-cast" onClick={() => {setButtonClicked(!isButtonClicked)}}>
                    {isButtonClicked ? `Hide All Cast` : `See All Cast`} <i className="fas fa-angle-double-right" style={{color: "grey", fontSize:"10pt"}}></i>
            </span>
            {
                isButtonClicked ? 
                    <FilmFullCast cast={filmCast}/>
                    :
                    ""
            }
        </div>
    )
}
