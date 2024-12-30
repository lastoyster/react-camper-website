import React from 'react';
import Site from './Site';

const SiteList = ({ sites, moveMap }) => {
  const data = sites?.sites || {}; // Safely access `sites.sites`

  if (!data || Object.keys(data).length === 0) {
    return <div className="siteListContainer"></div>;
  }

  const sitesList = Object.values(data).map((site, index) => (
    <Site key={index} site={site} moveMap={moveMap} />
  ));

  return (
    <div className="siteListContainer">
      <ul>{sitesList}</ul>
    </div>
  );
};

export default SiteList;
