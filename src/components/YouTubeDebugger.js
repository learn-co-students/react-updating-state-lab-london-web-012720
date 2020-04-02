// Code YouTubeDebugger Component Here
import React, { Component } from "react";

export default class YouTubeDebugger extends Component {
  constructor() {
    super();
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: "1080p"
        }
      }
    };
  }

  handleClick = () => {
    this.setState(previousState => {
      return {
        settings: {
          ...this.state.settings,
          bitrate: 12
        }
      };
    });
  };

  handleResChange = () => {
    this.setState(previousState => {
      return {
        settings: {
          ...this.state.settings,
          video: {
            resolution: "720p"
          }
        }
      };
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick} className="bitrate">
          Bitrate
        </button>
        <button onClick={this.handleResChange} className="resolution">
          Resolution
        </button>
      </div>
    );
  }
}
