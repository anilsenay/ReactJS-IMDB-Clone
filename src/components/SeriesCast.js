import React, { useEffect, useState } from 'react'
import axios from 'axios'
import FilmFullCast from './FilmFullCast'

export default function SeriesCast(props) {

    const [seriesCast, setSeriesCast] = useState([])
    const [filmStars, setFilmStars] = useState([])
    const [getDetails, setGetDetails] = useState(false)
    const [isButtonClicked, setButtonClicked] = useState(false)

    useEffect(() => {
        if(seriesCast.length === 0){
            getData()
        }
        //if movie changed
        if(parseInt(seriesCast.id) !== parseInt(props.id)){
            getData()
        }
        //if we got movie data absolutely
        if(getDetails){
            getCrew()
            setGetDetails(false)
        }
    })

    const getData = async () => {
        const data = await axios.get(`https://api.themoviedb.org/3/tv/${props.id}/credits?api_key=ee5e74e39e7bb0a1514fd8909bbd92f8`)
        setSeriesCast(data.data)
        setGetDetails(true)
    }

    const getCrew = () => {
        const stars = []

        seriesCast.cast.map(person => {
            stars.push(person.name)
        })

        setFilmStars(stars.splice(0,3))
    }

    return (
        <div>
            <div className="stars">
                <span style={{fontWeight: "bold"}}>Stars: </span>
                {filmStars.join(", ")}
            </div>
            <span className="see-all-cast" onClick={() => {setButtonClicked(!isButtonClicked)}}>
                    {isButtonClicked ? `Hide All Cast` : `See All Cast`} <i className="fas fa-angle-double-right" style={{color: "grey", fontSize:"10pt"}}></i>
            </span>
            {
                isButtonClicked ? 
                    <FilmFullCast cast={seriesCast}/>
                    :
                    ""
            }
        </div>
    )
}
