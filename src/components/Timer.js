
import React from 'react';

class Timer extends React.Component{
    constructor(){
        super();

        this.state = {
            isSession: true,
            timerSecond: 0,
            intervalID: 0,
            isPlay: false
        };
        this.play = this.play.bind(this);
        this.decreaseTimer = this.decreaseTimer.bind(this);
        this.stop = this.stop.bind(this);
        this.reset = this.reset.bind(this);
    }

        play(){
        let intervalID = setInterval(this.decreaseTimer,1000);
        this.props.onPlayStopTimer(true);
        this.setState({
        intervalID: intervalID,
        isPlay:true
        });
    }
        decreaseTimer(){
            switch(this.state.timerSecond){
                case 0:
                    if(this.props.timerMinute === 0){
                        if(this.state.isSession){
                            this.setState({
                                isSession: false
                                    });
                                    this.props.toggleInterval(this.state.isSession);
                                } else {
                                    this.setState({
                                        isSession: true
                                    });
                                    this.props.toggleInterval(this.state.isSession);
                                }
                                } else {
                                this.props.updateTimerMinute()
                                this.setState({
                                    timerSecond: 59
                                });
                            }
                    break;
                default: 
                this.setState((prevState) => {
                    return { timerSecond: prevState.timerSecond - 1
                    }
                });
            break;
            }
        }
        stop(){
            clearInterval(this.state.intervalID);
            this.props.onPlayStopTimer(false);
           
        }
        reset(){
            this.stop();
            this.props.reset();
            this.setState({
                timerSecond: 0,
                isSession: true,
                isPlay: false
            });

        }
     
      
    render() {
        return (
            <section > 
                <section className="timer-container"> 
                    <h4>{this.state.isSession === true ? "Session" : "break"}</h4>
                    <span className="timer">{this.props.timerMinute}</span>  
                    <span className="timer">:</span>     
                    <span className="timer">{this.state.timerSecond === 0 ? "00" : this.state.timerSecond < 10 ? "0" + this.state.timerSecond : this.state.timerSecond}</span>     
                </section>
                <section className="timer-actions">
                    <button disabled={this.state.isPlay === true ? "disabled" : "" } onClick={this.play}>Play</button>
                    <button onClick={this.stop}>Stop</button>
                    <button onClick={this.reset}>Refresh</button>
                </section>
            </section>
        );
    }
}

export default Timer;