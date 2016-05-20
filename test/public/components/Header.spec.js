/**
 * Header.spec.js
 *
 * Unit tests for the Header component
 */
/* Dependencies */
// Libraries and testing utilities
import React from 'react';
import expect from 'expect';
import expectJSX from 'expect-jsx';
import {createRenderer} from 'react-addons-test-utils';
expect.extend(expectJSX);
// Component
import Header from '../../../public/components/UI/Header';


/* Helpers */
const buildComponent = (filteredEpisodes = [], activeFeed = '', toggleUnplayed = ()=>{},
    refreshFeeds = ()=>{}, deleteFeed = ()=>{}, feeds = [], refreshFeed = false) => {
    let renderer = createRenderer();
    renderer.render(
        <Header
            filteredEpisodes={filteredEpisodes}
            activeFeed={activeFeed}
            toggleUnplayed={toggleUnplayed}
            refreshFeeds={refreshFeeds}
            deleteFeed={deleteFeed}
            feeds={feeds}
            refreshingFeed={refreshFeed}
        />
    );
    return renderer.getRenderOutput();
};


/* Expected Constants */
const expectedClassname = 'header';


/* Test */
describe('Frontend - Components: Header', () => {

    it('has a classname "' + expectedClassname + '" that matches the component name', () => {
        let actualElement = buildComponent();
        expect(actualElement.props.className).toBe(expectedClassname);
    });

});
