import { MoreOutlined } from '@ant-design/icons';
import React from 'react';
import './Weather.css';
import weather from '../../Images/weather.png';

const Weather = () => {
    return (
        <div className='weather-container'>
           <div>
           <h2 className='weather-title '>Weather < MoreOutlined className='outline-5' /></h2>
           </div>

            <div className='weather-box'>
                <h2 className='weather-time'>08:21 AM</h2>
                <img className='weather-img' src={weather} alt="" />
                <p className='weather-temp'>Cloudy Sunny, 24°C</p>
            </div>


        </div>
    );
};

export default Weather;