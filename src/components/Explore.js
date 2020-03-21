import React from 'react'

const filterCounter = 0

export default function Explore() {

    return (
        <div className="explore">
            <h1 className="explore-text">Explore</h1>
            <div className="search-filters-bar">
                <input className="form-control search-box" type="text" placeholder="Search" aria-label="Search"></input>
                <span className="filter-counter">0</span>
                <span className="font-weight-bold" style={{margin:"auto",marginLeft:"10px"}}>All Filters</span>
            </div>

        </div>
    )
}
