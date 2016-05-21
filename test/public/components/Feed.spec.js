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
// Component
import Feed from '../../../public/components/UI/Feed';


/* Mocks */
const filterHandler = () => {};


/* Helpers */
const buildComponent = (id = '', name = '', activeFilter = '', pathname = '') => {
    let feed = {
        _id: id,
        name: name
    };

    let renderer = createRenderer();
    renderer.render(
        <Feed
            feed={feed}
            filterHandler={filterHandler}
            activeFilter={activeFilter}
            pathname={pathname}
        />
    );
    return renderer.getRenderOutput();
};


/* Expected Constants */
const expectedClassname = 'feed';


/* Test */
describe('Frontend - Components: Feed', () => {

    it('has a classname "' + expectedClassname + '" that matches the component name', () => {
        let actualElement = buildComponent();
        expect(actualElement.props.className).toContain(expectedClassname);
    });

    it('applies an active class when the feed id matches the filter', () => {
        let id = 'abcdef';
        let name = 'My Feed';
        let actualElement = buildComponent(id, name, id);
        expect(actualElement.props.className).toContain('active');
    });

    it('displays the name of the feed', () => {
        let id = 'abcdef';
        let name = 'My Feed';
        let expectedResult = 'My Feed';
        let actualElement = buildComponent(id, name, id);
        expect(actualElement.props.children.props.children).toEqual(expectedResult);
    });

});
