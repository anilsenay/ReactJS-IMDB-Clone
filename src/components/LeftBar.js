import React, { useEffect, useState } from 'react'
import axios from 'axios'
import LeftBarItem from './LeftBarItem'

export default function LeftBar() {

    // const [comingSoon, setComingSoon] = useState([])
    // const [nowPlaying, setNowPlaying] = useState([])
    // const [popular, setPopular] = useState([])

    // const comingSoon = []
    // const nowPlaying = []
    // const popular = []
    // const allArray = []

    const nowPlayingUrl = "https://api.themoviedb.org/3/movie/now_playing?api_key=ee5e74e39e7bb0a1514fd8909bbd92f8&language=en-US&page=1"
    const comingSoonUrl = "https://api.themoviedb.org/3/movie/upcoming?api_key=ee5e74e39e7bb0a1514fd8909bbd92f8&language=en-US&page=1&region=us"
    const popularUrl = "https://api.themoviedb.org/3/movie/popular?api_key=ee5e74e39e7bb0a1514fd8909bbd92f8&language=en-US&page=1"

    // useEffect(() => {
    //     // if(comingSoon.length === 0 || nowPlaying.length === 0 || popular.length === 0){
    //     //     axios.get(nowPlayingUrl, {
    //     //         params: {
    //     //             language: 'en-US',
    //     //             page: 1
    //     //         }
    //     //     }).then(obj => {
    //     //         setNowPlaying(obj.data.results.splice(0,5))
    //     //     })

    //     //     axios.get(popularUrl, {
    //     //         params: {
    //     //             language: 'en-US',
    //     //             page: 1
    //     //         }
    //     //     }).then(obj => {
    //     //         //setPopular(obj.data.results.splice(0,5))
    //     //     })

    //     //     axios.get(comingSoonUrl, {
    //     //         params: {
    //     //             language: 'en-US',
    //     //             page: 1,
    //     //             region: 'us'
    //     //         }
    //     //     }).then(obj => {
    //     //         const tempArray = []
    //     //         (obj.data.results).map(item => {
    //     //             const date1 = new Date(item.release_date)
    //     //             const date2 = new Date()
    //     //             const diffTime = Math.abs(date2 - date1);
    //     //             const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    //     //             (diffDays <= 7 && comingSoon.length < 5) ? tempArray.push(item) : void(0)
    //     //         })
    //     //         //setComingSoon(tempArray)
    //     //     })
    //     // }
    //     const nowPlayingReq = axios.get(nowPlayingUrl)
    //     const comingSoonReq = axios.get(comingSoonUrl)
    //     const popularReq = axios.get(popularUrl)

    //     axios.all([nowPlayingReq, comingSoonReq, popularReq]).then(axios.spread((...responses) => {
    //         const nowPlayingReq = responses[0]
    //         const comingSoonReq = responses[1]
    //         const popularReq = responses[2]  

    //         setNowPlaying(...nowPlayingReq.data.results)
    //         setPopular(...popularReq.data.results)
    //         setComingSoon(...comingSoonReq.data.results)
    //     })).catch(errors => {
    //         // react on errors.
    //     })
    // })
    return (
        <div className="leftbar">
            <img src="https://picsum.photos/seed/picsum/300/200" className="top-photo"/>
        
            <LeftBarItem text="Popular" films={popularUrl}/>
            <LeftBarItem text="Now Playing" films={nowPlayingUrl}/>
            <LeftBarItem text="Coming Soon" films={comingSoonUrl}/>

        </div>
    )
}
