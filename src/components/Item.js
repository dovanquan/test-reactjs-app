import React, { Component } from 'react';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
  render() {
    const { item } = this.props
    const index = this.props.index
    return (
        <tr>
            <td className="text-center">{index + 1}</td>
            <td>{item.name}</td>
            <td className="text-center"><span className="label label-danger">High</span></td>
            <td>
                <button type="button" className="btn btn-warning">Edit</button>
                <button type="button" className="btn btn-danger">Delete</button>
            </td>
        </tr>
    );
  }
}

export default Item;
