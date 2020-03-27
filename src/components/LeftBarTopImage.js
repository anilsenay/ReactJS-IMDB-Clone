import React, { Component } from 'react'
import axios from 'axios'
import YouTube from '@u-wave/react-youtube'

export default class LeftBarTopImage extends Component {

    state = {
        filmVideo : "",
    }

    componentDidMount=  async () => {
        const data = await axios.get(`https://api.themoviedb.org/3/movie/${this.props.id}/videos?api_key=ee5e74e39e7bb0a1514fd8909bbd92f8&language=en-US`)
        if(data.data.results[0].site === "YouTube")
            this.setState({ filmVideo: data.data.results[0].key})
    }
    
    render() {
        return (
            <div className="top-photo-container">
                <YouTube className="top-photo"
                    video={this.state.filmVideo}
                    width="100%"
                />
            </div>
        )
    }
}
