/**
 * Header.spec.js
 *
 * Unit tests for the Header component
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
import Header from '../../../public/components/Header';


/* Helpers */
const buildComponent = () => {

    let renderer = createRenderer();
    renderer.render(
        <Header />
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
