import React from 'react';
import './Alert.css';
import { Alert } from 'antd';
import TotalSale from '../TotalSale/TotalSale';


const onClose = (e) => {
  console.log(e, 'I was closed.');
};
 

const AlertPart = () => {
 
      
    return (
       <div>
        <h2 className='sale-title'>Redgreen Sales</h2>
         <div className='alert-info'>
              <Alert className='alert-p'
              
      message="Notification"
      description="You dont have enough stock for the next campaign."
      type="warning"
      closable
      onClose={onClose}
      
      />

        </div>
        <TotalSale></TotalSale>
       </div>
        );
   
};


export default AlertPart;