import React from 'react'
import NavBar from './NavBar/NavBar';
import LeftBar from './LeftBar';
import FilmDetails from './FilmDetails';
import SeriesDetails from './SeriesDetails'

export default function Details(props) {

    return (
        <div className="container container-custom">
            <NavBar/>
            <div className="row row-custom">
                <div className="col-md-auto">
                    <LeftBar />
                </div>
                <div className="col">
                    {
                        (props.match.params.type === "movie") ?
                        <FilmDetails id={props.match.params.id} type={props.match.params.type}/>
                        :
                        <SeriesDetails id={props.match.params.id} type={props.match.params.type}/>
                    }
                </div>
            </div>
        </div>
    )
}
