import React from 'react';

const Site = ({ site, moveMap }) => {
  const sendDetails = () => {
    if (site && site.siteid) {
      moveMap({ id: site.siteid });
    }
  };

  if (!site) {
    return <div className="site"></div>;
  }

  return (
    <div className="site">
      <li key={site.siteid}>
        <div className="Name">{site.name}</div>
        <div className="Price">£{site.price} per night</div>
        <button
          id={site.siteid}
          className="Button"
          onClick={sendDetails}
        >
          Show on map
        </button>
      </li>
    </div>
  );
};

export default Site;
