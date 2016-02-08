/**
 * NewFeedForm.js
 *
 * Form for registering
 * a new feed
 */
/* Dependencies */
// Library
import React, { Component/*, PropTypes*/ } from 'react';

/* Component Definition */
class AddFeedForm extends Component {
    constructor(props) {
        super(props);
    };

    handleAddFeed() {

    };


    render() {
        return (
            <div className='add-feed-form'>
                <p>Enter the URL for your feed</p>
                <input
                    type='text'
                    className='new-feed-url'
                />
                <div
                    onClick={this.handleAddFeed()}
                    className='new-feed-button'
                >
                    Add Feed
                </div>
            </div>
        );
    };

};

/* Prop Types */
AddFeedForm.propTypes = {

};

export default AddFeedForm;
