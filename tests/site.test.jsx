import React from 'react';
import {
	renderIntoDocument,
	findRenderedDOMComponentWithClass
} from 'react-dom/test-utils';
import { Site } from '../src/site';
import { expect } from 'chai';


describe('Site', () => {
	it('should render an empty div with "site" class', () => {
		const site = [];

		const component = renderIntoDocument(
			<Site />
		);
		const siteElement = findRenderedDOMComponentWithClass(component, 'site');

		expect(siteElement).to.be.ok;
	});

	it('should render a div with the site text', () => {
		const site = {id: 1, name: 'Hammerwood', price: 10};
		const component = renderIntoDocument(
			<Site
				 	site= {site}
				/>
		);

		const siteElement = findRenderedDOMComponentWithClass(component, 'Name');
		const siteText = siteElement.textContent

		expect(siteText).to.equal('1 : Hammerwood');
	});

	it('should render a div with the site price', () => {
		const site = {id: 1, name: 'Hammerwood', price: 10};
		const component = renderIntoDocument(
			<Site
				 	site={site}
				/>
		);
		const siteElement = findRenderedDOMComponentWithClass(component, 'Price');
		const sitePrice = siteElement.textContent
		expect(sitePrice).to.equal('£10 per night');
	});
});
