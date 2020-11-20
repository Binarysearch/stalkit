import React, { Component } from "react";
import './style.css';

export class FancyPopup extends Component {

    constructor() {
        super();
    }

    render(){

        const d = {
            "ID": "thsOfugG",
            "Name": "device_0",
            "Active": false,
            "Geometry": {
                "Type": "Point",
                "Coordinates": [-3.1002761187152714, -44.73816434283549]
            },
            "Share": "https://stlk.it/thsOfugG",
            "Date": "2019-06-18T22:15:37+02:00",
            "Temperature": 8.11,
            "Battery": 0.31
        };

        const { device } = this.props;
        
        return (
            <div className='popup-container'>
                <h2>{device.Name}</h2>
                <div><strong>Id: </strong> <span>{device.ID}</span></div>
                <div><strong>Active: </strong> <span>{device.Active}</span></div>
                <div><strong>Share: </strong> <span>{device.Share}</span></div>
                <div><strong>Date: </strong> <span>{device.Date}</span></div>
                <div><strong>Temperature: </strong> <span>{device.Temperature}</span></div>
                <div><strong>Battery: </strong> <span>{device.Battery}</span></div>
            </div>
        );
    }
}