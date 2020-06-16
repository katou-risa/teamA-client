import React, { Component } from 'react';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <h1>家計簿アプリ</h1>
            </div>
        );
    }
}

export default Header;

// const className2 = { color: "bg-info" };
// * <h1 style={className2} >家計簿アプリ</h1> */ }