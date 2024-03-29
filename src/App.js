import React from "react";
import { connect } from "react-redux";

function App({ countReducer, multiplyReducer, divideReducer, dispatch }) {
  return (
    <div>
      <button onClick={() => dispatch({ type: "COUNT_UP" })}>
        increase by 1
      </button>
      <button onClick={() => dispatch({ type: "COUNT_DOWN" })}>
        decrease by 1
      </button>
      <div>{countReducer}</div>
      <button onClick={() => dispatch({ type: "MULTIPLY_BY_TEN" })}>
        multiply by 10
      </button>
      <div>{multiplyReducer}</div>
        <button onClick={() => dispatch({ type: "DIVIDE_BY_TEN" })}>
            divide by 10
        </button>
        <div>{divideReducer}</div>
    </div>
  );
}

const mapsStateToProps = ({ countReducer, multiplyReducer }) => ({
  countReducer,
  multiplyReducer
});

export default connect(mapsStateToProps)(App);
