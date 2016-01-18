/**
 * EpActionBar.spec.js
 *
 * Unit tests for the EpActionBar component
 */
/* Dependencies */
// Libraries and testing utilities
import React from 'react';
import moment from 'moment';
import expect from 'expect';
import expectJSX from 'expect-jsx';
import {createRenderer} from 'react-addons-test-utils';
expect.extend(expectJSX);
// Component
import EpisodeInfo from '../../public/components/EpisodeInfo';


/* Mock Props */
const activeEpisodeHandler = () => {};


/* Helpers */
const buildComponent = (unplayed, date) => {
    let episode = {
        _id: 'abcdef123456',
        name: 'Test Episode',
        feedName: 'Test Feed',
        unplayed: unplayed,
        pubDate: date
    };

    let renderer = createRenderer();
    renderer.render(
        <EpisodeInfo
            episode={episode}
            activeEpisodeHandler={activeEpisodeHandler}
        />
    );
    return renderer.getRenderOutput();
};


/* Expected Constants */
const expectedClassname = 'episode-info';


/* Test */
describe('Components: EpisodeInfo', () => {

    it('has a classname "' + expectedClassname + '" that matches the component name', () => {
        let actualElement = buildComponent(false, new Date());
        expect(actualElement.props.className).toBe(expectedClassname);
    });

    it('displays the date in the right format', () => {
        let myDate = new Date();
        let expectedResult = moment(myDate).format('ddd, MMMM Do')
        let actualElement = buildComponent(false, new Date());
        let dateWrapper = actualElement.props.children[2];
        expect(dateWrapper.props.children).toBe(expectedResult);
    });

});
