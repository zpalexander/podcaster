/**
 * AddFeed.js
 *
 * Add Feed view container
 */

/* Dependencies */
// Libraries
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// Actions
import * as AddFeedActions from '../actions/addFeed';
// Components
import AddFeedForm from '../components/AddFeed/AddFeedForm';


/* Component Definition*/
class AddFeed extends Component {
    constructor(props) {
        super(props);
    };


    render() {
        const { addFeed, dispatch } = this.props;
        const { newFeedName, newFeedURL, newFeedCategory, isAdding } = addFeed;
        let addFeedActions = bindActionCreators(AddFeedActions, dispatch);
        let { handleAddFeedInput, addNewFeed} = addFeedActions;

        return (
            <div className='add-feed'>
                <AddFeedForm
                    newFeedName={newFeedName}
                    newFeedURL={newFeedURL}
                    newFeedCategory={newFeedCategory}
                    isAdding={isAdding}
                    handleAddFeedInput={handleAddFeedInput}
                    addNewFeed={addNewFeed}
                />
            </div>
        );
    };
};


/* Prop Types */
AddFeed.propTypes = {
    addFeed: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
};



function mapStateToProps(state) {
    return {
        addFeed: state.addFeed
    }
};


export default connect(
    mapStateToProps
)(AddFeed);
