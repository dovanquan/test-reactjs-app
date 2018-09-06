import React, { Component } from 'react';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';
import './App.css';
import { filter, includes, orderBy as funcOrderBy, remove, reject} from 'lodash';
// import tasks from './mocks/tasks';
const uuidv4 = require('uuid/v4');

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items       : [],
            isShowForm  : false,
            strSearch   : '',
            orderBy     : 'name',
            orderDir    : 'asc',
            itemSelected : null
        };
        this.onHandleToogleForm = this.onHandleToogleForm.bind(this);
        this.closeForm          = this.closeForm.bind(this);
        this.handleSearh        = this.handleSearh.bind(this);
        this.handelSort        = this.handelSort.bind(this);
        this.handleDelete        = this.handleDelete.bind(this);
        this.handleSubmit        = this.handleSubmit.bind(this);
        this.handleEdit        = this.handleEdit.bind(this);
    }

    componentWillMount(){
        this.updateItems()
    }

    updateItems(item){
        let items = JSON.parse(localStorage.getItem('task')) || [];
        this.setState({
            items: items
        })
    }

    onHandleToogleForm(){
        this.setState({
            isShowForm: !this.state.isShowForm,
            itemSelected : null
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
        localStorage.setItem('task', JSON.stringify(items));
    }

    handleSubmit(item){
        let {items} = this.state
        let id = null
        if (item.id !== '') {
            items = reject(items, { id: item.id });
            id = item.id
        } else {
            id = uuidv4()
        }
        items.push({
            id: id,
            name: item.name,
            level: +item.level
        })
        this.setState({
            items: items,
            isShowForm: false
        })
        localStorage.setItem('task', JSON.stringify(items));
    }

    handleEdit(item){
        this.setState({
            itemSelected: item,
            isShowForm: true
        })
    }


  render() {
    let itemOrigin = [...this.state.items]
    let items = []
    let elmForm = null
    let { orderBy, orderDir, isShowForm, strSearch, itemSelected } = this.state

    //Search
    items = filter(itemOrigin, (item) => {
        return includes(item.name.toLowerCase(), strSearch.toLowerCase());
    });
    //Sort
    items = funcOrderBy(items, [orderBy], [orderDir]);

    if (isShowForm) {
        elmForm = <Form itemSelected={itemSelected} onClickSubmit={this.handleSubmit} onClickCancel={this.closeForm} />;
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
                onClickEdit={this.handleEdit}
                onClickDelete={this.handleDelete}
                items={items}
            />
        </div>
    );
  }
}

export default App;
