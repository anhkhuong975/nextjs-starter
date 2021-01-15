import React from "react";
import {ActionTestA, StateTestA} from "../../store/type";
import {bindActionCreators, Dispatch} from "redux";
import {connect} from "react-redux";
import {TestAAction} from "../../store/test-a/test-a.action";
interface State {
    count: number,
}
export class TestA extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h5>component a</h5>
                <button onClick={this.props.counter}>counter of A</button>
                <div>Count: {this.props.count}</div>
            </div>
        );
    }
}
const mapStateToProps = (state: StateTestA) => ({
    count: state.count,
});

const mapDispatchToProps = (dispatch: Dispatch<ActionTestA>) =>
    bindActionCreators({ counter: TestAAction.counter }, dispatch);

type Props = ReturnType<typeof mapStateToProps> &
    ReturnType<typeof mapDispatchToProps>;

export default connect(mapStateToProps, mapDispatchToProps)(TestA);
