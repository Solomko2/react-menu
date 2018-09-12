import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './Menu';
import Test from './Test';
import Test2 from './Test2';

const menuMock = [
    {value: 'item1', label: 'Item 1'},
    {value: 'item2', label: 'Item 2'},
    {value: 'item3', label: 'Item 3'}
];

const ChildMenu = ({value}) => {
    switch (value) {
        case 'item1':
            return <Test />;
        case 'item2':
            return <Test2 />;
        default:
            return '2'
    }
};

class MenuList  extends Component {
    render() {
        return this.props.data.map(({label, value}, i) => {
            return (
                <div>
                    <Menu key={label} target={label}>
                        <ChildMenu value={value} />
                    </Menu>
                </div>
            )
        })
    };
};

class App extends Component {
    constructor() {
        super();
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <div>
              <MenuList data={menuMock} />
          </div>
      </div>
    );
  }
}

export default App;
