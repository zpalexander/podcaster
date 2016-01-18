/**
 * EpActionBar.spec.js
 *
 * Unit tests for the EpActionBar component
 */
/* Dependencies */
// Libraries and testing utilities
import React from 'react';
import expect from 'expect';
import expectJSX from 'expect-jsx';
import {createRenderer} from 'react-addons-test-utils';
expect.extend(expectJSX);
// Component
import EpisodeInfo from '../../public/components/EpisodeInfo';

/* Mock Props */
const activeEpisodeHandler = () => {};

/* Helpers */
const buildComponent = () => {
    let episode = {
        _id: 'abcdef123456',
        name: '',
        feedName: '',
        pubDate: new Date()
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
        let actualElement = buildComponent();
        expect(actualElement.props.className).toBe(expectedClassname);
    });
});
