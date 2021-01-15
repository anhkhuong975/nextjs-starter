import {ActionTypesTestB} from "../type";

export class TestBAction {
    public static counter = () => (dispatch) => {
        dispatch({
            type: ActionTypesTestB.COUNTER,
            payload: undefined,
        });
    }
}
