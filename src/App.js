import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { SiteList } from '../src/SiteList';
import { MapContainer } from '../src/MapContainer';
import * as firebase from 'firebase/app';
import 'firebase/database';

const App = () => {
  const [siteData, setSiteData] = useState({ sites: '' });
  const [selectedSite, setSelectedSite] = useState(null);

  const moveMap = (e) => {
    setSelectedSite(e.id);
  };

  useEffect(() => {
    const rootRef = firebase.database().ref().child('databases');
    const siteDataRef = rootRef.child('siteData');

    const unsubscribe = siteDataRef.on('value', (snap) => {
      setSiteData(snap.val());
    });

    // Cleanup subscription on unmount
    return () => {
      siteDataRef.off('value', unsubscribe);
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to Camper Mapper</h2>
      </div>
      <div className="View">
        <div className="siteListContainer">
          <SiteList moveMap={moveMap} sites={siteData} />
        </div>
        <div className="mapContainer">
          <MapContainer sites={siteData} selectedSite={selectedSite} />
        </div>
      </div>
    </div>
  );
};

export default App;
