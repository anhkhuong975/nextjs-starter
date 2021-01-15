import {ActionTypesTestA} from "../type";

export class TestAAction {
    public static counter = () => (dispatch) => {
        dispatch({
            type: ActionTypesTestA.COUNTER,
            payload: undefined,
        });
    }
}
