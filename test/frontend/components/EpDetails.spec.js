/**
 * EpDetails.spec.js
 *
 * Unit tests for the EpDetails component
 */
/* Dependencies */
// Libraries and testing utilities
import React from 'react';
import expect from 'expect';
import expectJSX from 'expect-jsx';
import {createRenderer} from 'react-addons-test-utils';
expect.extend(expectJSX);
// Component
import EpDetails from '../../../public/components/UI/EpDetails';


/* Helpers */
const buildComponent = (episode = {}, detailsClasses = '') => {
    let renderer = createRenderer();
    renderer.render(
        <EpDetails episode={episode}
            detailsClasses={detailsClasses}
        />
    );
    return renderer.getRenderOutput();
};


/* Expected Constants */
const expectedClassname = 'episode-details';


/* Test */
describe('Frontend - Components: EpDetails', () => {

    it('has a classname "' + expectedClassname + '" that matches the component name', () => {
        let actualElement = buildComponent();
        expect(actualElement.props.className).toContain(expectedClassname);
    });

});
