/**
 * AddFeed.js
 *
 * Add Feed view container
 */

/* Dependencies */
// Libraries
import React, { Component/*, PropTypes*/ } from 'react';
// Components
import AddFeedForm from '../components/AddFeed/AddFeedForm';

class AddFeed extends Component {
    constructor(props) {
        super(props);
    };


    render() {
        return (
            <div className='add-feed'>
                <AddFeedForm />
            </div>
        );
    };
};

AddFeed.propTypes = {

};

export default AddFeed
