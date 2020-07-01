import * as ActionTypes from './ActionTypes';

export const Payments = (state = { errMess: null, payments:[]}, action) => {
  switch (action.type) {
    case ActionTypes.ADD_PAYMENTS:
      return {...state, errMess: null, payments: action.payload};

    case ActionTypes.PAYMENTS_FAILED:
      return {...state, errMess: action.payload};

    case ActionTypes.ADD_PAYMENTS:
        var payment = action.payload;
        payment.id = state.payments.length;
        payment.date = new Date().toISOString();
        return { ...state, payments: state.payments.concat(payment)};

    default:
      return state;
  }
};