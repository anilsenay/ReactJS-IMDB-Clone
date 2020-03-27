import React, { useState, useEffect } from 'react'
import axios from 'axios'
import YouTube from '@u-wave/react-youtube'
import FilmCast from './FilmCast'

export default function FilmDetails(props) {

    const [filmData, setFilmData] = useState([])
    const [filmVideo, setFilmVideo] = useState("")
    const [filmGenres, setFilmGenres] = useState("")
    const [filmTime, setFilmTime] = useState("")
    const [filmDate, setFilmDate] = useState("")

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
        const data = await axios.get(`https://api.themoviedb.org/3/movie/${props.id}?api_key=ee5e74e39e7bb0a1514fd8909bbd92f8&language=en-US`)
        setFilmData(data.data)
        const genres = []
        data.data.genres.splice(0,2).map(genre => {
            return genres.push(genre.name)
        })
        setFilmGenres(genres)
        setFilmTime(convertTime(data.data.runtime))
        setFilmDate(convertDate(data.data.release_date))
    }

    const getFilmVideo = async () => {
        const data = await axios.get(`https://api.themoviedb.org/3/movie/${props.id}/videos?api_key=ee5e74e39e7bb0a1514fd8909bbd92f8&language=en-US`)
        if(data.data.results[0].site === "YouTube")
            setFilmVideo(data.data.results[0].key)
    }

    const convertTime = (minute) => {
        let hours = parseInt(minute / 60)
        let minutes = minute % 60
        return hours + "h " + minutes + "min"
    }

    const convertDate = (releaseDate) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        let date = releaseDate.split("-")
        return date[2] + " " + months[date[1] - 1] + " " + date[0]
    }

    return (
        <div className="film-details">
            <h1 className="explore-text">{filmData.title} 
                <span className="film-details-year">{`(${filmData.release_date ? filmData.release_date.substring(0,4) : ""})`}</span>
            </h1>
            <div className="film-details-subtext">
                <span style={{color: "#ffd701", fontSize: "25px"}}><i className="fas fa-star"></i></span>
                <span className="film-details-subtext-text">{filmData.vote_average}/10</span>
                <span style={{margin: "0px 10px", fontSize: "14pt"}}>|</span>
                <span>{filmTime}</span>
                <span style={{margin: "0px 10px", fontSize: "14pt"}}>|</span>
                <span>{ filmGenres[0] + ", " + filmGenres[1] }</span>
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
            <FilmCast id={filmData.id}/>
        </div>
    )
}
