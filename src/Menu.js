import React, { Component } from 'react';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: false
        }
    }

    mouseEnterHandler = () => {
        this.setState({flag: !this.state.flag})
    };

    mouseMouseLeave = () => {
        this.setState({flag: !this.state.flag})
    };

    render() {
        return (
            <div className="menu" style={{paddingBottom: "50px"}}
                 onMouseEnter={this.mouseEnterHandler.bind(this)}
                 onMouseLeave={this.mouseMouseLeave.bind(this)}>
                <div className="target">{this.props.target}</div>
                <div className="menu__list">
                    { this.state.flag &&  this.props.children}
                </div>
            </div>
        );
    }
}

export default Menu;
