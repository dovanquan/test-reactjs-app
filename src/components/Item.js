import React, { Component } from 'react';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleDelete = (id) => {
        this.props.onClickDelete(id);
    }
    render() {
        const { item,index } = this.props
        return (
            <tr>
                <td className="text-center">{index + 1}</td>
                <td>{item.name}</td>
                <td className="text-center">{this.showElementLevel(item.level)}</td>
                <td>
                    <button type="button" className="btn btn-warning">Edit</button>
                    <button onClick={() => this.handleDelete(item.id)} type="button" className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    }

    showElementLevel(level){
        let elmLevel = <span className="label label-default">Small</span>
        if (level === 2) {
            elmLevel = <span className="label label-info">Medium</span>
        } else if(level === 3){
            elmLevel = <span className="label label-danger">High</span>
        }
        return elmLevel;
    }
}

export default Item;
