import * as counter from './constants';


const increment = (value) => {
    return {
        type: counter.INC,
        value: value
    }
}

const decrement = (value) => {
    return {
        type: counter.DEC,
        value: value
    }
}

const checkingDecrement = (value) => {
    return (dispatch, getState) => {
        if (getState().counter.count > 0) {
            dispatch(decrement(value));
        }
    }
}

export { increment, decrement, checkingDecrement };
