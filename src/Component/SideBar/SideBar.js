import React from 'react';
import './SideBar.css';
import dashboard from '../../Images/dashboard.svg';
import map from '../../Images/map.svg';
import menu1 from '../../Images/menu1.svg';
import menu2 from '../../Images/menu2.svg';
import settings from '../../Images/settings.svg';
import account from '../../Images/account.svg';
import help from '../../Images/help.svg';

const SideBar = () => {
    return (
        <div className='menu-container'>
           <div>
           <h2 className='title'>MENU</h2>
            <div className='common-p a'> 
            <img src={dashboard} alt="" />
            <p>Dashboard</p>
            </div>

           <div className='common-p'>
            <img src={map} alt="" />
           <p>Maps</p>
           </div>

            <div className='common-p'>
            <img src={menu1} alt="" />
            <p>Menu</p>
            </div>

            <div className='common-p'>
            <img src={menu2} alt="" />
            <p>Menu</p>
            </div>
           </div>
           <div>
           <div>
           <h2 className='title'>OTHERS</h2>
            <div className='common-p'> 
            <img src={settings} alt="" />
            <p>Settings</p>
            </div>

           <div className='common-p'>
            <img src={account} alt="" />
           <p>Accounts</p>
           </div>

            <div className='common-p'>
            <img src={help} alt="" />
            <p>Helps</p>
            </div>

           </div>

           </div>

        </div>
    );
};

export default SideBar;