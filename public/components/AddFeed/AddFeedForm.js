/**
 * NewFeedForm.js
 *
 * Form for registering
 * a new feed
 */
/* Dependencies */
// Library
import React, { Component, PropTypes } from 'react';
// Constants
import { NEW_FEED_NAME, NEW_FEED_URL, NEW_FEED_CATEGORY } from '../../constants/FieldNames';

/* Component Definition */
class AddFeedForm extends Component {
    constructor(props) {
        super(props);
    };


    onFieldChange(handleFieldChange, e) {
        let name = e.target.name;
        let value = e.target.value;
        handleFieldChange(name, value);
    };

    renderAddButton(isAdding, addNewFeed, newFeedName, newFeedURL, newFeedCategory) {
        let content = false;
        if (isAdding) {
            content = (
                <div className='new-feed-button'>
                    <div className="loader"></div>
                </div>
            );
        } else {
            content = (
                <div
                    onClick={addNewFeed.bind(this, newFeedName, newFeedURL, newFeedCategory)}
                    className='new-feed-button'
                >
                    Add Feed
                </div>
            );
        }
        return content;
    };


    render() {
        const { newFeedName, newFeedURL, newFeedCategory, isAdding, handleAddFeedInput, addNewFeed } = this.props;
        const addButton = this.renderAddButton(isAdding, addNewFeed, newFeedName, newFeedURL, newFeedCategory);

        return (
            <div className='add-feed-form'>
                <p>Add a new feed to your list</p>
                <input
                    type='text'
                    value={newFeedName}
                    name={NEW_FEED_NAME}
                    className='new-feed-url'
                    placeholder='Name your new feed'
                    onChange={this.onFieldChange.bind(this, handleAddFeedInput)}
                />
                <input
                    type='text'
                    value={newFeedURL}
                    name={NEW_FEED_URL}
                    className='new-feed-url'
                    placeholder='Enter a URL'
                    onChange={this.onFieldChange.bind(this, handleAddFeedInput)}
                />
                <input
                    type='text'
                    value={newFeedCategory}
                    name={NEW_FEED_CATEGORY}
                    className='new-feed-url'
                    placeholder='Give your feed a category'
                    onChange={this.onFieldChange.bind(this, handleAddFeedInput)}
                />
                {addButton}
            </div>
        );
    };

};

/* Prop Types */
AddFeedForm.propTypes = {
    newFeedName: PropTypes.string.isRequired,
    newFeedURL: PropTypes.string.isRequired,
    newFeedCategory: PropTypes.string.isRequired,
    isAdding: PropTypes.bool.isRequired,
    handleAddFeedInput: PropTypes.func.isRequired,
    addNewFeed: PropTypes.func.isRequired
};

/* Default Export */
export default AddFeedForm;
