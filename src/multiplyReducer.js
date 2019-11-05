const multiplyReducer = (state = 1, action) => {
  switch (action.type) {
    case "MULTIPLY_BY_TEN": {
      return state * 10;
    }
    default: {
      return state;
    }
  }
};

export default multiplyReducer;
