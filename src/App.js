import React, { Component } from 'react';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';
import './App.css';
import { filter, includes, orderBy as funcOrderBy, remove} from 'lodash';
import tasks from './mocks/tasks';
const uuidv4 = require('uuid/v4');

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items       : tasks,
            isShowForm  : false,
            strSearch   : '',
            orderBy     : 'name',
            orderDir    : 'asc'
        };
        this.onHandleToogleForm = this.onHandleToogleForm.bind(this);
        this.closeForm          = this.closeForm.bind(this);
        this.handleSearh        = this.handleSearh.bind(this);
        this.handelSort        = this.handelSort.bind(this);
        this.handleDelete        = this.handleDelete.bind(this);
        this.handleSubmit        = this.handleSubmit.bind(this);
    }

    onHandleToogleForm(){
        this.setState({
            isShowForm: !this.state.isShowForm
        })
    }

    closeForm(){
        this.setState({
            isShowForm: false
        })
    }

    handleSearh(value){
        this.setState({
            strSearch: value
        });
    }

    handelSort(orderBy, orderDir){
        this.setState({
            orderBy: orderBy,
            orderDir: orderDir
        });
    }

    handleDelete(id){
        let items = this.state.items
        remove(items, (item) => {
            return item.id === id
        })
        this.setState({
            items: this.state.items
        })
    }

    handleSubmit(item){
        let {items} = this.state
        items.push({
            id: uuidv4(),
            name: item.name,
            level: +item.level
        })
        this.setState({
            items: items,
            isShowForm: false
        })
    }

  render() {
    let itemOrigin = [...this.state.items]
    let items = []
    let elmForm = null
    let { orderBy, orderDir, isShowForm, strSearch } = this.state

    //Search
    items = filter(itemOrigin, (item) => {
        return includes(item.name.toLowerCase(), strSearch.toLowerCase());
    });
    //Sort
    items = funcOrderBy(items, [orderBy], [orderDir]);

    if (isShowForm) {
        elmForm = <Form onClickSubmit={this.handleSubmit} onClickCancel={this.closeForm} />;
    }

    return (
        <div>
            {/* TITLE : START */}
            <Title />
            {/* TITLE : END */}
            {/* CONTROL (SEARCH + SORT + ADD) : START */}
            <Control
                orderBy={orderBy}
                orderDir={orderDir}
                onClickAdd={this.onHandleToogleForm}
                isShowForm={isShowForm}
                onClickSearchGo={this.handleSearh}
                onClickSort={this.handelSort}
            />
            {/* CONTROL (SEARCH + SORT + ADD) : END */}
            {/* FORM : START */}
            {elmForm}
            {/* FORM : END */}
            {/* LIST : START */}
            <List
                onClickDelete={this.handleDelete} 
                items={items}
            />
        </div>
    );
  }
}

export default App;
