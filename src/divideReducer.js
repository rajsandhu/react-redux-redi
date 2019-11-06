const divideReducer = (state = 10000, action) => {
    switch (action.type) {
        case "DIVIDE_BY_TEN": {
            return state / 10;
        }
        default: {
            return state;
        }
    }
};

export default divideReducer;
