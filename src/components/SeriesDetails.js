import React, { useState, useEffect } from 'react'
import axios from 'axios'
import YouTube from '@u-wave/react-youtube'
import SeriesCast from './SeriesCast'

export default function SeriesDetails(props) {

    const [filmData, setFilmData] = useState([])
    const [filmVideo, setFilmVideo] = useState("")
    const [filmGenres, setFilmGenres] = useState("")
    const [filmTime, setFilmTime] = useState("")
    const [filmDate, setFilmDate] = useState("")
    const [creators, setCreators] = useState([])

    useEffect(() => {
        if(filmData.length === 0){
            getData()
            getFilmVideo()
        }
        //if movie changed
        if(parseInt(filmData.id) !== parseInt(props.id))
            getData()
            getFilmVideo()
    })

    const getData = async () => {
        const data = await axios.get(`https://api.themoviedb.org/3/${props.type}/${props.id}?api_key=ee5e74e39e7bb0a1514fd8909bbd92f8&language=en-US`)
        setFilmData(data.data)
        const genres = []
        data.data.genres.splice(0,2).map(genre => {
            genres.push(genre.name)
        })
        setFilmGenres(genres)
        setFilmTime(convertTime(data.data.episode_run_time))
        setFilmDate(convertDate(data.data.first_air_date))
        const creators = []
        data.data.created_by.splice(0,3).map(person => {
            creators.push(person.name)
        })
        setCreators(creators)
    }

    const getFilmVideo = async () => {
        const data = await axios.get(`https://api.themoviedb.org/3/${props.type}/${props.id}/videos?api_key=ee5e74e39e7bb0a1514fd8909bbd92f8&language=en-US`)
        if(data.data.results[0].site === "YouTube")
            setFilmVideo(data.data.results[0].key)
    }

    const convertTime = (minute) => {
        minute = minute[0]
        let hours = parseInt(minute / 60)
        let minutes = minute % 60
        if(hours !== 0)
            return hours + "h " + minutes + "min"
        else
            return minutes + "min"
    }

    const convertDate = (releaseDate) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        let date = releaseDate.split("-")
        return date[2] + " " + months[date[1] - 1] + " " + date[0]
    }

    return (
        <div className="film-details">
            <h1 className="explore-text">{filmData.original_name} 
                <span className="film-details-year">
                    {
                        `(
                        ${(filmData.first_air_date) ? (filmData.first_air_date).substring(0,4) : ""}
                        – 
                        ${filmData.in_production ? "" : (filmData.last_air_date) ? filmData.last_air_date.substring(0,4): ""}
                        )`
                    }
                </span>
            </h1>
            <div className="film-details-subtext">
                <span style={{color: "#ffd701", fontSize: "25px"}}><i className="fas fa-star"></i></span>
                <span className="film-details-subtext-text">{filmData.vote_average}/10</span>
                <span style={{margin: "0px 10px", fontSize: "14pt"}}>|</span>
                <span>{filmTime}</span>
                <span style={{margin: "0px 10px", fontSize: "14pt"}}>|</span>
                <span>{ filmGenres.length > 0 ? filmGenres.join(", ") : "" }</span>
                <span style={{margin: "0px 10px", fontSize: "14pt"}}>|</span>
                <span>{filmDate}</span>
            </div>
            <div className="film-details-media">            
                <img src={`https://image.tmdb.org/t/p/w200`+filmData.poster_path} className = "explore-image m-0" alt=""/>
                <YouTube className="film-details-video"
                    video={filmVideo}
                    width="477px"
                    height="268px"
                />
            </div>

            <div className="film-details-overview">{filmData.overview}</div>
            <div className="film-cast-short">
                <span style={{fontWeight: "bold"}}>Creators: </span>
                {creators.join(", ")}
                <SeriesCast id={filmData.id}/>
            </div>
            

        </div>
    )
}
