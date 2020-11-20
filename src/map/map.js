import React, { Component } from "react";
import { DEVICES } from '../devices/devices';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import { FancyPopup } from './fancy-popup/fancy-popup';
const GOOGLE_MAPS_API_KEY = '';



class MapContainer extends Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
    };

    onMarkerClick = (props, marker, e) => {
        console.log(marker.device);
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    }

    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };

    render() {
        var iconGreen = {
            url: process.env.PUBLIC_URL + '/marker-green.png',
            scaledSize: new this.props.google.maps.Size(50, 50), // scaled size
        };
        var iconRed = {
            url: process.env.PUBLIC_URL + '/marker-red.png',
            scaledSize: new this.props.google.maps.Size(50, 50), // scaled size
        };
        const markers = DEVICES.map(
            device => <Marker
                title="Location"
                id={device.ID}
                position={{
                    lat: device.Geometry.Coordinates[0],
                    lng: device.Geometry.Coordinates[1]
                }}
                icon={device.Active ? iconGreen : iconRed}
                onClick={this.onMarkerClick}
                device={device}
            />
        );

        return (
            <Map
                google={this.props.google}
                onClick={this.onMapClicked}
                initialCenter={{
                    lat: 11.517128825114327,
                    lng: 111.86708205553953
                }}
                zoom={5}
            >

                {markers}

                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}>
                        <FancyPopup device={this.state.selectedPlace.device}></FancyPopup>
                </InfoWindow>
            </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: GOOGLE_MAPS_API_KEY
})(MapContainer);