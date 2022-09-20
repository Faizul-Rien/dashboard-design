import { LeftOutlined, MoreOutlined, RightOutlined } from '@ant-design/icons';
import React from 'react';
import './Weather.css';
import weather from '../../Images/weather.png';
import { Button } from 'antd';

const Weather = () => {
    return (
        <div className='weather-container'>
           <div>
           <h2 className='weather-title '>Weather < MoreOutlined className='outline-5' /></h2>
           </div>
           <h2 className='weather-time'>08:21 AM <Button className='weatherDate-btn' type="text">Wed, 21 September 2022 <LeftOutlined className="left-side-down" /><RightOutlined className='right-side-down' /></Button></h2>
            <div className='weather-timeline'>
            <div>
               
                
                <img className='weather-img' src={weather} alt="" />
                <p className='weather-temp'>Cloudy Sunny, 24°C</p>
            </div>

                <div className='timeline'>
                    <p>10:00 AM</p>
                    <p>01:00 PM</p>
                    <p>04:00 PM</p>
                    <p>05:00 PM</p>
                    <p>08:00 PM</p>

                </div>

                <div className='temperature'>
                    <p>Light Rain, 27°C</p>
                    <p>Cloudy Sunny, 27°C</p>
                    <p>Cloudy, 27°C</p>
                    <p>Cloudy, 25°C</p>
                    <p>Cloudy, 25°C</p>

                </div>

            </div>


        </div>
    );
};

export default Weather;