import {ActionTestB, ActionTypesTestB, StateTestB} from "../type";

const initStateTestB: StateTestB = {
    count: 9,
}
export function TestBReducer(
    state: StateTestB = initStateTestB,
    action: ActionTestB
) {
    switch (action.type) {
        case ActionTypesTestB.COUNTER:
            return {...state, count: state.count * 2 + 1};
        default:
            return state;
    }
}
