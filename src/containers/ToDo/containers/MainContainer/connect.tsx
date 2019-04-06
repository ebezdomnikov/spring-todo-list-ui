import { connect } from 'react-redux';
import {hasDoneItems, hasUnDoneItems} from "../../utils/getters";
import {bindActionCreators} from "redux";
import {default as actions} from "../../actions";

const mapStateToProps = (state: Object, ownProps: any): Object => {
    return {
        hasDoneItems: hasDoneItems(state),
        hasUnDoneItems: hasUnDoneItems(state),
    }
};

const mapDispatchToProps = (dispatch: any): Object => ({
    actions: bindActionCreators(actions as any, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps);

