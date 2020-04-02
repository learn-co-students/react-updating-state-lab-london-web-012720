import React from 'react'

export default class DigitalClicker extends React.Component{

  constructor(){
    super();

    this.state = {
      timesClicked: 0
    }
  }

  handelClick = () =>{

    this.setState(previusState => {
      return {
        timesClicked: previusState.timesClicked + 1
      }
      
    }, () => console.log(this.state.timesClicked))


  }

  render(){
    return(
    <button onClick={this.handelClick}>{this.state.timesClicked}</button>
    )
  }
}
