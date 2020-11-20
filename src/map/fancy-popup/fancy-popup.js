import React, { Component } from "react";
import './style.css';
import '@fortawesome/fontawesome-free/css/all.css';

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
        const activeIconClass = device.Active ? 'on' : 'off';
        const date = (device.Date).split('T')[0];
        const time = (device.Date).split('T')[1].split('+')[0];
        const batteryLevelIcon = getBatteryLevelIcon(device.Battery);
        const normalizedTemperature = Math.max(Math.min(device.Temperature / 30, 1), 0);
        const thermometerLevelIcon = getThermometerLevelIcon(normalizedTemperature);
        const bRed = device.Battery * 255;
        const bGreen = (1 - device.Battery) * 255;
        
        const tRed =  normalizedTemperature * 255;
        const tBlue = (1 - normalizedTemperature) * 255;

        const batteryStyle = {
            color: `rgb(${bGreen},${bRed}, 0)`
        }
        const thermometerStyle = {
            color: `rgb(${tRed},0,${tBlue})`
        }

        return (
            <div className='popup-container'>
                <h2><i className={'fas fa-power-off ' + activeIconClass}></i> {device.Name}</h2>
                <a href={device.Share} className='share-button'><i className="fas fa-share-alt"></i></a>
                <div className='popup-body'>
                    <div className='data-item'><i className="far fa-calendar-alt"></i> <span>{date}</span></div>
                    <div className='data-item'><i className="far fa-clock"></i> <span>{time}</span></div>
                    <div className='data-item'><i className={"fas fa-thermometer-" + thermometerLevelIcon} style={thermometerStyle}></i> <span>{device.Temperature + ' C'}</span></div>
                    <div className='data-item'><i className={"fas fa-battery-" + batteryLevelIcon} style={batteryStyle}></i> <span>{device.Battery * 100 + '%'}</span></div>
                </div>
            </div>
        );
    }
}

function getThermometerLevelIcon(level) {
    if (level < 0.1) {
        return 'empty';
    } else if (level < 0.3) {
        return 'quarter';
    } else if (level < 0.6) {
        return 'half';
    } else if (level < 0.8) {
        return 'three-quarters';
    } else {
        return 'full';
    }
}

function getBatteryLevelIcon(level) {
    if (level < 0.1) {
        return 'empty';
    } else if (level < 0.3) {
        return 'quarter';
    } else if (level < 0.6) {
        return 'half';
    } else if (level < 0.8) {
        return 'three-quarters';
    } else {
        return 'full';
    }
}