import { Button, DatePicker, Space } from 'antd';
import React from 'react';
import './Sale.css';
import moment from 'moment';
import car from '../../Images/car.jpg'
import { MoreOutlined } from '@ant-design/icons';

const dateFormat = 'YYYY-MM-DD';

const Sale = () => {
    return (
        <div className='sales-container'>
            <h2 className='sales-title'>Sale < MoreOutlined className='outline' /></h2>

       <div className='date-position'>
       <div>
            <p className='sale-heading'>Monthly Sales</p>
            <h2 className='sale-number'>918</h2>

        </div>    
        <div className='date-picker'>
        <Space direction="vertical" size={12}>
<DatePicker defaultValue={moment('2022-09-21', dateFormat)}  />
</Space>
        </div>

       </div>

       <div className='information-box'>

            <div className='img-box'>
            <img style={{width:"50px" , height:"30px"}} src={car} alt="" />
            </div>
                
            <div>
                <p>Chuwi Laptop</p>
                <p className='client-information'>21/09/2022 - Israfil Arif</p>
            </div>

            <div>
            <Button className='sales-btn' type="link">
        Details
      </Button>
            </div>

            </div>
       <div className='information-box'>

            <div className='img-box'>
            <img style={{width:"50px" , height:"30px"}} src={car} alt="" />
            </div>
                
            <div>
                <p>OnePlus TV</p>
                <p className='client-information'>20/09/2022 - Debashish D. Dev</p>
            </div>

            <div>
            <Button className='sales-btn' type="link">
        Details
      </Button>
            </div>

            </div>
       <div className='information-box'>

            <div className='img-box'>
            <img style={{width:"50px" , height:"30px"}} src={car} alt="" />
            </div>
                
            <div>
                <p>UMI Phone</p>
                <p className='client-information'>16/09/2022 - JSajib Hossain</p>
            </div>

            <div>
            <Button className='sales-btn' type="link">
        Details
      </Button>
            </div>

            </div>
           <div>
           <Button className='show-btn' type="link">
        Show more
      </Button>
           </div>

        </div>
    );
};

export default Sale;