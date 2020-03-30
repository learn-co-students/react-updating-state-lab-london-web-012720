import React, { Component } from "react";

class YouTubeDebugger extends Component {
  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: "1080p"
      }
    }
  };
  bitrateOnClick = () => {
    this.setState({
      errors: [],
      user: null,
      settings: {
        bitrate: 12,
        video: {
          resolution: this.state.settings.video.resolution
        }
      }
    });
  };
  resolutionOnClick = () => {
    this.setState({
      errors: [],
      user: null,
      settings: {
        bitrate: this.state.settings.bitrate,
        video: {
          resolution: "720p"
        }
      }
    });
  };
  render() {
    return (
      <React.Fragment>
        <button className="bitrate" onClick={this.bitrateOnClick}>
          {this.state.settings.bitrate}
        </button>
        <button className="resolution" onClick={this.resolutionOnClick}>
          {this.state.settings.video.resolution}
        </button>
      </React.Fragment>
    );
  }
}

export default YouTubeDebugger;
