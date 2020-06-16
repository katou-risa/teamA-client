import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Piechart2 from '../public/index.html';
import Piechart from './Piechart';
// import Piechart from "./Piechart"
// import Header from "./Header"

// function render() {
//     fetch('http://localhost:3001/api/consumption')
//         .then(res => res.json())
//         .then(data => {
//             // <Piechart2 data={data} />,

//         }


//         );
// }
ReactDOM.render(
    <App />,
    document.getElementById('root')
);

