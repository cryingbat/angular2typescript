import {Action} from '@ngrx/store';
import {ActionTypes} from './counter.actions';

export const initailState = 0;

export function conterReducer(state = initailState, action: Action) {
    switch(action.type) {
        case ActionTypes.Increment:
            return state + 1;
        case ActionTypes.Decrement:
            return state - 1;
        case ActionTypes.Reset:
            return 0;
        default:
            return state;
    }
}