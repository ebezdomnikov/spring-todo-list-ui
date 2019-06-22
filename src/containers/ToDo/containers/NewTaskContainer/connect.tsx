import { connect } from "react-redux";
import get from "lodash/get";
import { bindActionCreators } from "redux";
import { default as actions } from "../../actions";

const mapStateToProps = (state: Object, ownProps: any): Object => {
    return {};
};

const mapDispatchToProps = (dispatch: any): Object => ({
    actions: bindActionCreators(actions as any, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
);
