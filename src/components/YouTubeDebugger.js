import React from 'react'

export default class YouTubeDebugger extends React.Component{

  constructor(){
    super();
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

handleBitrate = () =>{

  this.setState({
     settings: {
       ...this.state.settings,
       bitrate: 12
     }
  }, () => console.log(this.state.settings.bitrate))
}

handleResolution = () =>{

  this.setState({
    settings: {
      ...this.state.settings,
      video: {
        resolution: '720p'
      }
    }
  })
}



  render(){
    return(
      <div> <button className='bitrate' onClick={this.handleBitrate}>{this.state.settings.bitrate} Bitrate</button>
    <button className="resolution" onClick={this.handleResolution}>Resolution {this.state.settings.video.resolution}</button>
    </div>
   
    )
  }
}
