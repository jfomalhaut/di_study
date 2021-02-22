const initialState = {
    count: 0,
};


const CounterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREASEMENT': {
            return {
                ...state,
                count: state.count + 1
            };
        }
        default: {
            return state;
        }
    }
};

export default CounterReducer;