import React, { useState, useEffect } from 'react'
import axios from 'axios'
import YouTube from '@u-wave/react-youtube'
import SeriesCast from './SeriesCast'

export default function SeriesDetails(props) {

    const [seriesData, setSeriesData] = useState([])
    const [seriesVideo, setSeriesVideo] = useState("")
    const [seriesGenres, setSeriesGenres] = useState("")
    const [seriesTime, setSeriesTime] = useState("")
    const [seriesDate, setSeriesDate] = useState("")
    const [creators, setCreators] = useState([])

    useEffect(() => {
        if(seriesData.length === 0){
            getData()
            getSeriesVideo()
        }
        //if movie changed
        if(parseInt(seriesData.id) !== parseInt(props.id))
            getData()
            getSeriesVideo()
    })

    const getData = async () => {
        const data = await axios.get(`https://api.themoviedb.org/3/tv/${props.id}?api_key=ee5e74e39e7bb0a1514fd8909bbd92f8&language=en-US`)
        setSeriesData(data.data)
        const genres = []
        data.data.genres.splice(0,2).map(genre => {
            return genres.push(genre.name)
        })
        setSeriesGenres(genres)
        setSeriesTime(convertTime(data.data.episode_run_time))
        setSeriesDate(convertDate(data.data.first_air_date))
        const creators = []
        data.data.created_by.splice(0,3).map(person => {
            return creators.push(person.name)
        })
        setCreators(creators)
    }

    const getSeriesVideo = async () => {
        const data = await axios.get(`https://api.themoviedb.org/3/${props.type}/${props.id}/videos?api_key=ee5e74e39e7bb0a1514fd8909bbd92f8&language=en-US`)
        if(data.data.results[0].site === "YouTube")
            setSeriesVideo(data.data.results[0].key)
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
            <h1 className="explore-text">{seriesData.original_name} 
                <span className="film-details-year">
                    {
                        `(
                        ${(seriesData.first_air_date) ? (seriesData.first_air_date).substring(0,4) : ""}
                        – 
                        ${seriesData.in_production ? "" : (seriesData.last_air_date) ? seriesData.last_air_date.substring(0,4): ""}
                        )`
                    }
                </span>
            </h1>
            <div className="film-details-subtext">
                <span style={{color: "#ffd701", fontSize: "25px"}}><i className="fas fa-star"></i></span>
                <span className="film-details-subtext-text">{seriesData.vote_average}/10</span>
                <span style={{margin: "0px 10px", fontSize: "14pt"}}>|</span>
                <span>{seriesTime}</span>
                <span style={{margin: "0px 10px", fontSize: "14pt"}}>|</span>
                <span>{ seriesGenres.length > 0 ? seriesGenres.join(", ") : "" }</span>
                <span style={{margin: "0px 10px", fontSize: "14pt"}}>|</span>
                <span>{seriesDate}</span>
            </div>
            <div className="film-details-media">            
                <img src={`https://image.tmdb.org/t/p/w200`+seriesData.poster_path} className = "explore-image m-0" alt=""/>
                <YouTube className="film-details-video"
                    video={seriesVideo}
                    width="477px"
                    height="268px"
                />
            </div>

            <div className="film-details-overview">{seriesData.overview}</div>
            <div className="film-cast-short">
                <span style={{fontWeight: "bold"}}>Creators: </span>
                {creators.join(", ")}
                <SeriesCast id={seriesData.id}/>
            </div>
            

        </div>
    )
}
