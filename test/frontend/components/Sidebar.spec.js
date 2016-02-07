/**
 * Feed.spec.js
 *
 * Unit tests for the Feed component
 */
/* Dependencies */
// Libraries and testing utilities
import React from 'react';
import expect from 'expect';
import expectJSX from 'expect-jsx';
import {createRenderer} from 'react-addons-test-utils';
expect.extend(expectJSX);
// Constants
import { SHOW_ALL } from '../../../public/constants/Filters';
// Component
import Sidebar from '../../../public/components/Sidebar';


/* Mocks */
const setActiveFeed = () => {};


/* Helpers */
const buildComponent = (feeds = [], activeFeed = SHOW_ALL) => {
    let renderer = createRenderer();
    renderer.render(
        <Sidebar feeds={feeds}
            filter={activeFeed}
            setActiveFeed={setActiveFeed}
        />
    );
    return renderer.getRenderOutput();
};


/* Expected Constants */
const expectedClassname = 'sidebar';


/* Test */
describe('Frontend - Components: Sidebar', () => {

    it('has a classname "' + expectedClassname + '" that matches the component name', () => {
        let actualElement = buildComponent();
        expect(actualElement.props.className).toContain(expectedClassname);
    });

    it('has a button for adding a new feed', () => {
        let actualElement = buildComponent();
        expect(actualElement.props.children[0].props.className).toEqual('add-feed');
    });

    it('should display a message if there are no feeds', () => {
        let actualElement = buildComponent([], SHOW_ALL);
        expect(actualElement.props.children[1].props.children).toEqual('No feeds');
    });

    it('should display the feeds if there are any', () => {
        let feeds = [
            {
                id: '12345678',
                name: 'My Feed'
            }
        ];
        let actualElement = buildComponent(feeds);
        expect(actualElement.props.children[1].props.children[1][0].key).toEqual(feeds[0].id);
    });

});
