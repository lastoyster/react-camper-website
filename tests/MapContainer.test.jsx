import React from 'react'
import {
  renderIntoDocument,
  findRenderedDOMComponentWithClass
} from 'react-dom/test-utils';
import { MapContainer } from '../src/MapContainer';
import { expect } from 'chai';


describe ('MapContainer', () => {
  it('should render an empty div with "map" class', () => {
    const component = renderIntoDocument(
      <MapContainer
        sites={ [] }
        />
    );

    const siteElement = findRenderedDOMComponentWithClass(component, 'map');

    expect(siteElement).to.be.ok;
  });

  it('should render an map in div with "map" class', () => {
    const component = renderIntoDocument(
      <MapContainer
        sites={ [] }
      />
    );

    const siteElement = findRenderedDOMComponentWithClass(component, 'map');

    expect(siteElement).to.be.ok;
  });
});
