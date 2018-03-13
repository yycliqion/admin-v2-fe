import React from 'react';
import {Link} from 'react-router-dom';

class TopNav extends React.Component {
    constructor(props) {
        super(props);
    }
    onLogout() {

    }
    render() {
        return (
            <div className="navbar navbar-default top-navbar" role="navigation">
            <div className="navbar-header"> 
                <Link className="navbar-brand" to="/"><b>HAPPY</b>MALL</Link>
            </div>
            <ul className="nav navbar-top-links navbar-right"> 
                <li className="dropdown">
                    <span className="dropdown-toggle" href="javascript:;" >
                        <i className="fa fa-user fa-fw"></i>
                        <span>欢迎， adminxxx</span>
                        <i className="fa fa-caret-down"></i>
                    </span>
                    <ul className="dropdown-menu dropdown-user"> 
                        <li>
                        <a href="#" onClick={() => {this.onLogout()}}>
                            <i className="fa fa-sign-out fa-fw"></i> 
                           <span>退出登录</span>
                        </a>
                        </li>
                    </ul> 
                </li> 
            </ul>
        </div>
        )
    }
}

export default TopNav;