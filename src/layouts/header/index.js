import { Link,withRouter } from 'react-router-dom';
import { Menu,Icon } from 'antd';
import { Popover } from 'antd-mobile';
import { useState } from 'react';
import Texty from 'rc-texty';
import 'rc-texty/assets/index.css';
import './index.less';

const Item = Popover.Item;

function Header(props){
    const [ visible,setVisible ] = useState(false);
    return(
        <div className="layout-header">
            <div className="layout-header-container">
              <Link to='/home'>
                  <div className="layout-header-container-logo">
                    <img src="http://wdlj.zoomdong.xin/blog/touxiang.jpg" alt="logo"/>
                  </div>
                  <div className="layout-header-container-word">
                    <p className="word-color"><Texty>zoomdong's blog</Texty></p>
                  </div>
              </Link>
                <div className="layout-header-container-nav">
                  <Menu selectedKeys={[props.location.pathname.slice(1)]} mode="horizontal">
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
                <div className="layout-header-container-navM">
                    <Popover 
                      overlayClassName="fortest"
                      visible={visible}
                      overlay={[
                        (<Item key="home" value="home">首页</Item>),
                        (<Item key="catalog" value="catalog">存档</Item>),
                        (<Item key="link" value="link" >友链 </Item>),
                        (<Item key="about" value="about">关于</Item>),
                      ]}
                      align={{
                        overflow: { adjustY: 0, adjustX: 0 },
                        offset: [0, 5],
                      }}
                      onVisibleChange={()=>{setVisible(true)}}
                      onSelect={(e)=>{
                        props.history.push(`/${e.props.value}`)
                      }}
                    >
                     <Icon type="bars" className="icon-style"/>
                   </Popover>
                </div>
            </div>   
            
        </div>
    )
}

export default withRouter(Header);