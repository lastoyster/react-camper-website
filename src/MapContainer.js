import React, {
  Component
} from 'react';
import {
  Gmaps,
  Marker
} from 'react-gmaps';
const params = {
  v: '3.exp',
  key: process.env.REACT_APP_GMAPS_API_KEY
};

export class MapContainer extends Component {
    constructor() {
    super();
    this.state = {
        siteData: {},
        coords: {
            latitude: 54.7115618,
            longitude: -6.0656706
        },
        zoom: {
            value: 6
        },
        selectedSite: null,
    };
}

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: false,
      streetViewControl: false
    });
  }

  centerMap() {
    this.map.setCenter({
          lat: this.lat,
          lng: this.lng
        })
  }

  componentDidUpdate(nextProps) {
    const newSite = this.props.selectedSite !== nextProps.selectedSite
    if (newSite){
      this.setState({
        coords: {
          latitude: Object.values(this.props.sites.sites)[this.props.selectedSite].latitude,
          longitude: Object.values(this.props.sites.sites)[this.props.selectedSite].longitude
        },
        zoom: {
          value: 10
        },
      })
    }
  }

  render() {
    const data = this.props.sites.sites
    const createMarkers = Object.values(data).map((data, index) =>
      <Marker key={index}
        lat={data.latitude}
        lng={data.longitude}
        onClick={this.centerMap}
        />
    );

    return (
      <div className='map'>
        <Gmaps id='gmaps'
        width={'70vw'}
        height={'80vh'}
        lat={this.state.coords.latitude}
        lng={this.state.coords.longitude}
        zoom={this.state.zoom.value}
        loadingMessage={'Map Loading'}
        params={params}
        onMapCreated={this.onMapCreated}>
        { createMarkers }
        </Gmaps>
      </div>
    );
  };

};
