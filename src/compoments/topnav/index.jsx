import React from 'react';
import {Link} from 'react-router-dom';

import MUtil from 'utils/mm.jsx'
import User from 'services/user-service.jsx';

const _mm = new MUtil();
const _user = new User();

class TopNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: _mm.getStorage('userInfo').username || ''

        }
    }
    onLogout() {
        _user
            .logout()
            .then(res => {
                _mm.removeStorage('userInfo')
                // this.props.history.push('/login');
                window.location.href = '/login';
            }, errMsg => {
                _mm.errorTips(errMsg);
            });
    }
    render() {
        return (
            <div className="navbar navbar-default top-navbar" role="navigation">
                <div className="navbar-header">
                    <Link className="navbar-brand" to="/">
                        <b>HAPPY</b>MMALL</Link>
                </div>
                <ul className="nav navbar-top-links navbar-right">
                    <li className="dropdown">
                        <span className="dropdown-toggle" href="javascript:;">
                            <i className="fa fa-user fa-fw"></i>
                            {this.state.username
                                ? <span>欢迎， {this.state.username}</span>
                                : <span>欢迎您</span>
}
                            <i className="fa fa-caret-down"></i>
                        </span>
                        <ul className="dropdown-menu dropdown-user">
                            <li>
                                <a
                                    href="#"
                                    onClick={() => {
                                    this.onLogout()
                                }}>
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