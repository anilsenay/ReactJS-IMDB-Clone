import React, { Component } from 'react'

export default class ExploreCategory extends Component {
    render() {
        return (
            <div className="explore-category">
                <span className="explore-title">{this.props.title}</span>
                <div className="row explore-row">
                    <div class="">
                        <img src="https://image.tmdb.org/t/p/w300/kqjL17yufvn9OVLyXYpvtyrFfak.jpg" className = "explore-image" alt=""/>
                    </div>
                    <div class="">
                        <img src="https://image.tmdb.org/t/p/w300/kqjL17yufvn9OVLyXYpvtyrFfak.jpg" className = "explore-image" alt=""/>
                    </div>
                    <div class="">
                        <img src="https://image.tmdb.org/t/p/w300/kqjL17yufvn9OVLyXYpvtyrFfak.jpg" className = "explore-image" alt=""/>
                    </div>
                    <div class="">
                        <img src="https://image.tmdb.org/t/p/w300/kqjL17yufvn9OVLyXYpvtyrFfak.jpg" className = "explore-image" alt=""/>
                    </div>
                </div>
                <a href="/" style={{fontSize: "13pt", margin:"15px -5px", display: "inherit"}}>
                    See All Trendings <i class="fas fa-angle-double-right" style={{color: "grey", fontSize:"10pt"}}></i>
                </a>
            </div>
        )
    }
}
