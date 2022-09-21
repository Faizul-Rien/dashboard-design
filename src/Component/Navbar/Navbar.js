import { DownOutlined, SearchOutlined } from '@ant-design/icons';
import { Button,Input} from 'antd';
import React from 'react';
import bell from '../../Images/bell.svg';
import man from '../../Images/man.png';
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className='navbar'>
             <h2 className='nav'><Button className='logo' shape="circle">L</Button>LOOGO</h2>
             <div className='search-input'>
             <Input className='search' placeholder="Search " icon= {<SearchOutlined />} /> 

             </div>
             <div className='notification'>
                <img src={bell} alt="" />
                <img src={man} alt="" />
                <Button type="text" className='nav-btn'>Faizul<DownOutlined className='down-outline'/></Button>
             </div>
             
        </div>
    );
};

export default Navbar;