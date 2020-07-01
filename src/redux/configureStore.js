import {createStore, combineReducers, applyMiddleware } from 'redux';
import { Costumers} from './costumers';
import {Payments} from './payments';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createForms } from 'react-redux-form';
import { InitialFeedback, Payment } from './forms';
import { costumers } from '../shared/costumers';
import { payments } from '../shared/payment';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            Costumers:costumers,
            Payments:payments,
            ...createForms({
                costumer: InitialFeedback,
                payment:Payment
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}