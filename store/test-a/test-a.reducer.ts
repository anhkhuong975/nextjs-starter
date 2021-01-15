import {ActionTestA, ActionTypesTestA, StateTestA} from "../type";

const initStateTestA: StateTestA = {
    count: 9,
}
export function TestAReducer(
    state: StateTestA = initStateTestA,
    action: ActionTestA
) {
    switch (action.type) {
        case ActionTypesTestA.COUNTER:
            return {...state, count: state.count * 2};
        default:
            return state;
    }
}
