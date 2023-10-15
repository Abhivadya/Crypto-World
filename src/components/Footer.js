import { Typography } from 'antd'; 
import {GithubOutlined} from '@ant-design/icons';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
        <Typography.Title level={5} style={{ color: 'white'}}>
            CryptoWorld <br/>            
        </Typography.Title>    
        <p className='author'>...designed by Shiva Abhivadya</p>
        <div style={{textAlign: 'center'}}>
        <Link to='https://github.com/abhivadya' target='_blank'><GithubOutlined /></Link>
        </div>

    </div>
  )
}

export default Footer