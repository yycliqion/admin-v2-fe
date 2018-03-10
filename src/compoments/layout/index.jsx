import React from 'react';
import './index.scss'
class Layout extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="wapper">
                {/*
                <TopNav/>
                <SideNav/>
                */}
                {this.props.children}
            </div>
        )
    }
}

export default Layout;