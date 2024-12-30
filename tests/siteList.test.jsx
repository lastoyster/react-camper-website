import React from 'react';
import {
	renderIntoDocument,
	findRenderedDOMComponentWithClass,
	scryRenderedDOMComponentsWithClass
} from 'react-dom/test-utils';
import { SiteList } from '../src/siteList';
import { Site } from '../src/site';
import { expect } from 'chai';

describe('SiteList', () => {
	it('should render a div with "siteList" class', () => {
		const nosites = []
		const component = renderIntoDocument(
			<SiteList
				sites={nosites}
				/>
		);
		const siteListElement = findRenderedDOMComponentWithClass(component, 'siteListContainter');

		expect(siteListElement).to.be.ok
	});

	it('should render a Site component for each item', () => {
		const sitesData = [{id: 1, name: 'Hammerwood', price: 10},
									{id: 2, name: 'Downe', price: 5},
									{id: 3, name: 'Frylands', price: 20}];

		const component = renderIntoDocument(
			<SiteList
				sites={sitesData}
			/>
		);
		const sitesElement = scryRenderedDOMComponentsWithClass(component, 'site');
		expect(sitesElement.length).to.equal(3);
	});
});
