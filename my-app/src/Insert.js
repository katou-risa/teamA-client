import React, { Component } from 'react';

class Insert extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <form action="/" method="post">

                <div className="container">

                    <div className="form-group">
                        <label>カテゴリー</label>
                        <input type="text" name="category" className="form-control" />
                    </div>

                </div>

                <div className="container">

                    <div className="form-group">
                        <label>金額</label>
                        <input type="text" name="price" className="form-control" />
                    </div>
                    <input type="submit" />



                </div>
            </form>


        );
    }
}

export default Insert;