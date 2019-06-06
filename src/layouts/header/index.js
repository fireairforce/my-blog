import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu,Icon } from 'antd';
import './index.less';

function Header(){
    const [current,setCurrent] = useState('mail'); 
    return(
        <div className="layout-header">
            <div className="layout-header-container">
              <Link to='/home'>
                  <div className="layout-header-container-logo">
                    <img src="http://wdlj.zoomdong.xin/blog/touxiang.jpg" alt="logo"/>
                  </div>
                  <div className="layout-header-container-word">
                    <p className="word-color">zoomdong's blog</p>
                  </div>
              </Link>
                <div className="layout-header-container-nav">
                  <Menu onClick={(e)=>{setCurrent(e.key)}} selectedKeys={[current]} mode="horizontal">
                    <Menu.Item key="home">
                      <Link to='/home'>
                        <Icon 
                        type="home" 
                        theme="twoTone" 
                        />
                        首页
                      </Link>
                    </Menu.Item>
                   
                    <Menu.Item key="catalog">
                      <Link to='/catalog'>
                      <Icon 
                        type="mail" 
                        theme="twoTone" 
                        twoToneColor="#52c41a"
                      />
                        存档
                      </Link>  
                    </Menu.Item>
                    <Menu.Item key="link">
                      <Link to='/link'>
                      <Icon type="star" theme="twoTone"/>
                        友链
                      </Link> 
                    </Menu.Item>
                    <Menu.Item key="about">
                      <Link to='/about'>
                      <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96"/>
                        关于
                      </Link>  
                    </Menu.Item>
                  </Menu>
                </div>
            </div>   
        </div>
    )
}

export default Header;