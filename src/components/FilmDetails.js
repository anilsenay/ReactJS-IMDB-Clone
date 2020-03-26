import React, { useState, useEffect } from 'react'
import NavBar from './NavBar/NavBar';
import LeftBar from './LeftBar';
import Explore from './Explore';
import Details from './Details';

export default function FilmDetails(props) {

    return (
        <div className="container container-custom">
            <NavBar/>
            <div className="row row-custom">
                <div className="col-md-auto">
                    <LeftBar />
                </div>
                <div className="col">
                    <Details id={props.match.params.id} type={props.match.params.type}/>
                </div>
            </div>
        </div>
    )
}
