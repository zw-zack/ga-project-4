import React from "react";
import { connect } from "react-redux";
import store from "../../config/store";

function Timer(props) {
  function timerDown() {
    function timerDownInterval() {
      store.getState().timer.timer = store.getState().timer.timer - 1;
      store.dispatch({
        type: "TIMER_DOWN",
        payload: {
          timer: store.getState().timer.timer
        }
      });

      if (store.getState().timer.timer < 0) {
        alert("you lost!");
        clearInterval(timerInterval);
      }
    }
    var timerInterval = setInterval(timerDownInterval, 1000);
  }

  window.onload = function() {
    timerDown();
  };

  return (
    <div
      className="timer"
      style={{
        position: "relative",
        top: "100px",
        color: "white",
        margin: "0 auto",
        textAlign: "center",
        zIndex: "5"
      }}
    >
      Timer: {store.getState().timer.timer}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    ...state.timer
  };
}

export default connect(mapStateToProps)(Timer);
