import React, { Component } from 'react';

const style1 = { width: "810px", height: "450px" };
class Piechart extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (

            <div id="piechart" style={style1}  ></div>

        )
    }
}

export default Piechart;



// style="width: 810px; height: 450px;"