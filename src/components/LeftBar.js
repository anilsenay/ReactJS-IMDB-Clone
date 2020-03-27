import React, {useEffect, useState} from 'react'
import LeftBarItem from './LeftBarItem'
import LeftBarTopImage from './LeftBarTopImage'
import axios from 'axios'

export default function LeftBar() {

    const nowPlayingUrl = "https://api.themoviedb.org/3/movie/now_playing?api_key=ee5e74e39e7bb0a1514fd8909bbd92f8&language=en-US&page=1"
    const comingSoonUrl = "https://api.themoviedb.org/3/movie/upcoming?api_key=ee5e74e39e7bb0a1514fd8909bbd92f8&language=en-US&page=1&region=us"
    const popularUrl = "https://api.themoviedb.org/3/movie/popular?api_key=ee5e74e39e7bb0a1514fd8909bbd92f8&language=en-US&page=1"

    const [isGetPopular, setGetPopular] = useState(false)
    const [id, setId] = useState("")

    useEffect(() => {
        if(isGetPopular === false)
            getData()
    })

    const getData = async () => {
        const films = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=ee5e74e39e7bb0a1514fd8909bbd92f8&language=en-US&page=1")
        setId(films.data.results.splice(0,1)[0].id)
        if(id.length !== 0){
            setGetPopular(true)
        }
    }

    return (
        <div className="leftbar">

            {
                id.length !== 0 ? <LeftBarTopImage id={id}/> : ""
            }
        
            <LeftBarItem text="Popular" films={popularUrl} link="popular"/>
            <LeftBarItem text="Now Playing" films={nowPlayingUrl} link="now-playing"/>
            <LeftBarItem text="Coming Soon" films={comingSoonUrl} link="coming-soon"/>

        </div>
    )
}