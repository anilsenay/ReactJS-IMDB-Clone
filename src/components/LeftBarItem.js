import React, { useState } from 'react'


export default function LeftBarItem(props) {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <div className={`left-bar-item ${isOpen ? "left-bar-item-open" : ""}`}>
                <div style={{cursor:"pointer"}} onClick={() => setIsOpen(!isOpen)}>
                    <span className="left-bar-item-text">{props.text}</span>
                    <span className={`plus float-right ${isOpen ? "text-white" : ""}`}>{isOpen ? "–" : "+"}</span>
                </div>
                {isOpen ? 
                <div>
                    <div className="left-bar-film">
                        <img src="https://picsum.photos/id/10/40/40" className="left-bar-film-image"/>
                        <div className="left-bar-film-info">
                            <span style={{fontWeight:"bold"}}>The Lion King</span>
                            <span style={{color:"grey"}}>$537.3M</span>
                        </div>
                        <span className="imdb-rating">7.8</span>
                    </div>
                    <div className="left-bar-film">
                        <img src="https://picsum.photos/id/12/40/40" className="left-bar-film-image"/>
                        <div className="left-bar-film-info">
                            <span style={{fontWeight:"bold"}}>The Lion King</span>
                            <span style={{color:"grey"}}>$537.3M</span>
                        </div>
                        <span className="imdb-rating">7.8</span>
                    </div>
                    <div className="left-bar-film">
                        <img src="https://picsum.photos/id/20/40/40" className="left-bar-film-image"/>
                        <div className="left-bar-film-info">
                            <span style={{fontWeight:"bold"}}>The Lion King</span>
                            <span style={{color:"grey"}}>$537.3M</span>
                        </div>
                        <span className="imdb-rating">7.8</span>
                    </div>
                    <div className="left-bar-film">
                        <img src="https://picsum.photos/id/30/40/40" className="left-bar-film-image"/>
                        <div className="left-bar-film-info">
                            <span style={{fontWeight:"bold"}}>The Lion King</span>
                            <span style={{color:"grey"}}>$537.3M</span>
                        </div>
                        <span className="imdb-rating">7.8</span>
                    </div>
                    <div className="left-bar-film">
                        <img src="https://picsum.photos/id/10/40/40" className="left-bar-film-image"/>
                        <div className="left-bar-film-info">
                            <span style={{fontWeight:"bold"}}>The Lion King</span>
                            <span style={{color:"grey"}}>$537.3M</span>
                        </div>
                        <span className="imdb-rating">7.8</span>
                    </div>
                    <span className="more-result-text">MORE RESULT</span>
                </div> : null}
            </div>
        </div>
    )
}
