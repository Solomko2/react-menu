import React, { Component } from 'react';

class Menu extends Component {
    render() {
        return (
            <div className="menu">
                <div className="target">{this.props.target}</div>
                <div className="menu__list">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Menu;
