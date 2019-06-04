import { Link } from 'react-router-dom';
import { Menu,Icon } from 'antd';
import './index.less'

function Header(){
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

                </div>
            </div>   
        </div>
    )
}

export default Header;