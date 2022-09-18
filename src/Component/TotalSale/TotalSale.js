import React from 'react';
import './TotalSale.css';
import { DatePicker, Space } from 'antd';
import moment from 'moment';


const dateFormat = 'YYYY-MM-DD';
const TotalSale = () => {
    return (
        <div className='sale-container'>
           <div className='date-picker'>
           <h2>Total Sale</h2>
            <Space direction="vertical" size={12}>
    <DatePicker defaultValue={moment('2022-08-08', dateFormat)}  />
    </Space>
           </div>

           <div>
                <p className='sale-item'>TV</p>
                <h2 className='sales-quantity'>600.000</h2>
            
           </div>

           <div>
                <p className='sale-item'>Laptop</p>
                <h2 className='sales-quantity'>1.200.000</h2>
           </div>

           <div>
                <p className='sale-item'>Others</p>
                <h2 className='sales-quantity'>210.287</h2>
           </div>



        </div>
    );
};

export default TotalSale;