import React from 'react';
import './Alert.css';
import { Alert } from 'antd';


const onClose = (e) => {
  console.log(e, 'I was closed.');
};
 

const AlertPart = () => {
 
      
    return (
       <div>
        <h2 className='sales-title'>Redgreen Sales</h2>
         <div className='alert-info'>
              <Alert
              
      message="Notification"
      description="You dont have enough stock for the next campaign."
      type="warning"
      closable
      onClose={onClose}


      
    />

        </div>

       </div>
        );
   
};

export default AlertPart;