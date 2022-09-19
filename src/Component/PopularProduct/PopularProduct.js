import { MoreOutlined } from '@ant-design/icons';
import React from 'react';
import Sale from '../Sale/Sale';
import './PopularProduct.css';

const PopularProduct = () => {
    return (
       <div className='portion-container'>
         <div className='product-container'>
            <h2 className='product-title'>Most Popular Product <MoreOutlined className='outline-2' /></h2>


            <div className='box-container'>

            <div className='product-box'>
                <h2 className='product-name'>TV</h2>
            </div>
                
            <div>
                <p>OnePlus TV 44 Inch</p>
                <p className='sale-percent'>10% Increase</p>
            </div>

            <div className='sale-quantity'>
                <p>5K</p>
            </div>

            </div>
            <div className='box-container'>

            <div className='product-box'>
                <h2 className='product-name'>MB</h2>
            </div>
                
            <div>
                <p>UMI Smartphone</p>
                <p className='sale-percent'>17% Increase</p>
            </div>

            <div className='sale-quantity'>
                <p>4.5K</p>
            </div>

            </div>
            <div className='box-container'>

            <div className='product-box'>
                <h2 className='product-name'>JP</h2>
            </div>
                
            <div>
                <p>Chuwi Laptop</p>
                <p className='sale-percent'>20% Increase</p>
            </div>

            <div className='sale-quantity'>
                <p>2K</p>
            </div>

            </div>
            <div className='box-container'>

            <div className='product-box'>
                <h2 className='product-name'>JP</h2>
            </div>
                
            <div>
                <p>Oneplut TV Y1G</p>
                <p className='sale-percent'>1% Increase</p>
            </div>

            <div className='sale-quantity'>
                <p>1.5K</p>
            </div>

            </div>
            <div className='box-container'>

            <div className='product-box'>
                <h2 className='product-name'>JP</h2>
            </div>
                
            <div>
                <p>Earphone</p>
                <p className='sale-percent'><span className='color'>-1% Increase</span></p>
            </div>

            <div className='sale-quantity'>
                <p>1.4K</p>
            </div>

            </div>
            <div className='box-container'>

            <div className='product-box'>
                <h2 className='product-name'>JP</h2>
            </div>
                
            <div>
                <p>Charger</p>
                <p className='sale-percent'><span className='color'>-5% Increase</span></p>
            </div>

            <div className='sale-quantity'>
                <p>1.3K</p>
            </div>

            </div>
            <div className='box-container'>

            <div className='product-box'>
                <h2 className='product-name'>JP</h2>
            </div>
                
            <div>
                <p>Cable</p>
                <p className='sale-percent'><span className='color'>-50% Increase</span></p>
            </div>

            <div className='sale-quantity'>
                <p>1.2K</p>
            </div>

            </div>
            <div className='box-container'>

            <div className='product-box'>
                <h2 className='product-name'>JP</h2>
            </div>
                
            <div>
                <p>Electric Car</p>
                <p className='sale-percent'><span className='color'>-5% Increase</span></p>
            </div>

            <div className='sale-quantity'>
                <p>900</p>
            </div>

            </div>
            <div className='box-container'>

            <div className='product-box'>
                <h2 className='product-name'>JP</h2>
            </div>
                
            <div>
                <p>ERP Software</p>
                <p className='sale-percent'>5% Increase</p>
            </div>

            <div className='sale-quantity'>
                <p>870</p>
            </div>

            </div>
            <div className='box-container'>

            <div className='product-box'>
                <h2 className='product-name'>JP</h2>
            </div>
                
            <div>
                <p>Attendance System</p>
                <p className='sale-percent'>6% Increase</p>
            </div>

            <div className='sale-quantity'>
                <p>720</p>
            </div>

            </div>



        </div>
        <Sale></Sale>
       </div>
    );
};

export default PopularProduct;