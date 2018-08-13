import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';

class Control extends Component {
    constructor(props) {
        super(props);
            this.state = {
            }
            this.handleAdd = this.handleAdd.bind(this)
    }


    handleAdd(){
        this.props.onClickAdd();
    }

    render() {
        return (
            <div className="row">
                {/* SEARCH : START */}
                <Search />
                {/* SEARCH : END */}
                {/* SORT : START */}
                <Sort />
                {/* SORT : END */}
                {/* ADD : START */}
                <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                    <button type="button" onClick={this.handleAdd} className="btn btn-info btn-block">Add Task</button>
                </div>
                {/* ADD : END */}
            </div>
        );
    }
}

export default Control;
