import React from 'react';
import './TodaySale.css';
import { Pie } from '@ant-design/plots';
import { Button } from 'antd';
import { MoreOutlined } from '@ant-design/icons';


const data = [
    {
      type: 'TV',
      value: 50,
    },
    {
      type: 'Laptop',
      value: 25,
    },
    {
      type: 'Other',
      value: 25,
    }
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: 'inner',
      offset: '-50%',
    //   content: '{value}',
      style: {
        textAlign: 'center',
        fontSize: 12,
      },
    },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
        // content: 'AntV\nG2Plot',
      },
    },
  };

const TodaySale = () => {
    return (
        <div>
            
             <div className='today-sale'>
             <div>
                <h2 className='s-title'>Sales Chart <MoreOutlined className='outline-3'/></h2>
                <p className='sale-t'>Todays Sale</p>
                <h2 className='s-title'>156</h2>
                
            </div>
             <Pie style={{height:"150px"}} className='pie-chart' {...config} />
             <div>
             <Button className='btn' type="link">
        See details
      </Button>
             </div>
             </div>
        </div>
    );
};

export default TodaySale;