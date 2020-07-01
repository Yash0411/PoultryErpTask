import * as ActionTypes from './ActionTypes';

export const Costumers = (state = { isLoading: true,
    errMess: null,
    costumers:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COSTUMERS:
            return {...state, isLoading: false, errMess: null, costumers: action.payload};

        case ActionTypes.COSTUMERS_FAILED:
            return {...state, isLoading: true, errMess: null, dishes: []}

        case ActionTypes.COSTUMERS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};