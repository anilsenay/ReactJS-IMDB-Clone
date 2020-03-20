import React from 'react'
import LeftBarItem from './LeftBarItem'

const openingThisWeek = []
const nowPlaying = []

export default function LeftBar() {
    return (
        <div className="leftbar">
            <img src="https://picsum.photos/seed/picsum/300/200" className="top-photo"/>
            <LeftBarItem text="Opening This Week" films={openingThisWeek}/>
            <LeftBarItem text="Now Playing" films={nowPlaying}/>
        </div>
    )
}
