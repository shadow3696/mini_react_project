import React from "react";
import { Context } from "./testContext";

var interval;

class Time extends React.Component {
  constructor() {
    super();
    this.state = {
      time: 10,
      hour: 0,
      minute: 0,
      second: 0,
      isStart: false
    };
  };

  // GPT
  // componentDidMount() {
  //   console.log("componentDidMount");
  //   this.startInterval();
  // }

  // startInterval = () => {
  //   if (!this.interval) {
  //     this.interval = setInterval(() => {
  //       this.setState((prevState) => {
  //         if (prevState.time === 0) {
  //           clearInterval(this.interval);
  //           this.interval = null;
  //           return { time: 0 };
  //         }
  //         return { time: prevState.time - 1 };
  //       });
  //     }, 1000);
  //   }
  // };

  // stopInterval = () => {
  //   clearInterval(this.interval);
  //   this.interval = null;
  // };

  // resetTimer = () => {
  //   this.setState({ time: 10 });
  // };

  // componentWillUnmount() {
  //   console.log("componentWillUnmount");
  //   this.stopInterval();
  // };

  // start Timer
  // startInterval = () => {
  //   if (this.state.isStart === false) {
  //     this.setState({
  //       isStart: true
  //     });
  //     interval = setInterval(()=>{
  //       this.setState({
  //         second: this.state.second + 1
  //       });
  //       if (this.state.second === 60) {
  //         this.setState({
  //           second: 0,
  //           minute: this.state.minute + 1
  //         });
  //       };
  //       if (this.state.minute === 60) {
  //         this.setState({
  //           minute: 0,
  //           hour: this.state.hour + 1
  //         });
  //       };
  //     }, 1000)
  //   };
  // };

  // add Cotext to classBase components
  static contextType = Context;

  // save and set TIME
  startInterval = ()=>{
    if (this.state.isStart === false) {
      this.setState({
        isStart: true
      });
      interval = setInterval(()=>{
        this.setState({
          second: this.state.second + 1
        });
        if (this.state.second === 60) {
          this.setState({
            second: 0,
            minute: this.state.minute + 1
          });
        };
        if (this.state.minute === 60) {
          this.setState({
            minute: 0,
            hour: this.state.hour + 1
          });
        };
      } , 1000)
    };
  };

  stopInterval = ()=>{
    this.setState({
      isStart: false
    });
    clearInterval(interval);
  };

  resetInterval = ()=>{
    this.stopInterval();
    this.setState({
      hour:0,
      minute:0,
      second:0,
    });
  };

  handleSaveTime = ()=>{
    let newTime = document.querySelector('.timer').innerHTML;
    this.context.setTimeList([...this.context.timeList , newTime]);
  };

  render(){
    let h = this.state.hour;
    let m = this.state.minute;
    let s = this.state.second;
    return(
      <>
        <h2 className="timer" onClick={this.handleSaveTime}>
          {`${h > 9 ? h : "0"+h} : ${m > 9 ? m : "0"+m} : ${s > 9 ? s : "0"+s}`}
        </h2>
        <div className="button_box">
          <span className="action_button btn_start" onClick={this.startInterval}>start</span>
          <span className="action_button btn_stop" onClick={this.stopInterval}>stop</span>
          <span className="action_button btn_reset" onClick={this.resetInterval}>reset</span>
          <span
          className="action_button reset_burtton" 
          onClick={this.props.handleSetIsLight}
          style={{
            background:this.props.isLight ? "white" : "black" ,
            color : this.props.isLight ? "black" : "white" 
          }}
          >
            {this.props.isLight ? "dark" : "light" }
          </span>
        </div>
      </>
    );
  };
};

export default Time;