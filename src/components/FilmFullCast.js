import React from 'react'

export default function FilmFullCast(props) {
    return (
        <div className="film-full-casts">
            {
                (props.cast.cast).map(person => {
                    return(
                        <div className="film-full-cast">
                            {
                                person.profile_path === null || person.profile_path === undefined ?
                                <img src={`https://via.placeholder.com/100x150/?text=No Photo`} className = "cast-image" alt=""/>
                                :
                                <img src={`https://image.tmdb.org/t/p/w200`+person.profile_path} className = "cast-image" alt=""/>
                            }
                            <span>{person.name}</span>
                            <span style={{color:"gray", fontSize:"10pt", fontWeight:"bold"}}>as</span>
                            <span style={{color:"gray", fontSize:"10pt"}}>{person.character}</span>
                        </div>
                        )
                })
            }
        </div>
    )
}
