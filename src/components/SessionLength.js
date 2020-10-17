import React from 'react';

function SessionLength(props){
    function increaseSessionLength(){
        if(props.sessionLength === 60){
            return;
        }
        props.increaseSession();
    }

    function decreaseSessionLength(){
        if(props.sessionLength === 1){
            return;
        }
        props.decreaseSession();

    }

    return (
        <section>
            <h4>Session Length</h4>
            <section className="interval-container"> 
                <button disabled={props.isPlay === true ? "disabled" : "" } onClick={decreaseSessionLength}>Down</button>
                <p className="interval-counter">{props.sessionLength}</p>
                <button disabled={props.isPlay === true ? "disabled" : "" } onClick={increaseSessionLength}>Up</button>
            </section>         
        </section> 
    );
}

export default SessionLength;