import React from 'react';
import TopNav from 'components/topnav/index.jsx';
import SideNav from 'components/sidenav/index.jsx';

import './theme.scss';
import './index.scss';

class Layout extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="wrapper">
                <TopNav/>
                <SideNav/>
                {this.props.children}
            </div>
        )
    }
}

export default Layout;