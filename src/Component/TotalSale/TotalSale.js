import React from 'react';
import './TotalSale.css';
import { DatePicker, Space } from 'antd';
import moment from 'moment';
import { Line } from '@ant-design/plots';
import TodaySale from '../TodaySale/TodaySale';
import PopularProduct from '../PopularProduct/PopularProduct';
import { MoreOutlined } from '@ant-design/icons';

const data = [
    {
      "item": 0,
      "scales": "1JT"
    },
    {
      "item": 7,
      "scales": "2JT"
    },
    {
      "item": 14,
      "scales": "3JT"
    },
    {
      "item": 21,
    //   "scales": 4
    },
    {
      "item": 28,
    //   "scales": 5
    }
  
  ]
  const config = {
    data,
    padding: 'auto',
    xField: 'item',
    yField: 'scales',
    xAxis: {
    //   type: 'timeCat',
      tickCount: 5,
    },
    smooth: true,
}


const dateFormat = 'YYYY-MM-DD';
const TotalSale = () => {
    return (
       <div>
        <div className='container'>
         <div className='sale-container'>
       <div className='date-picker'>
       <h2 className='total-sale-title'>Total Sale</h2>
        <Space className='date-set' direction="vertical" size={12}>
<DatePicker defaultValue={moment('2022-08-08', dateFormat)}  />
</Space>
<MoreOutlined className='outline-4' />
       </div>


    <div className='chart-details'>
    <div>
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


<div className='chart-info'>
      
<Line {...config} />
</div>
    </div>



    </div>
    <div>
        <TodaySale></TodaySale>
    </div>
   
    </div>
    <PopularProduct></PopularProduct>
       </div>
     
    );
};

export default TotalSale;