import React, { Component } from 'react';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';
import './App.css';

import tasks from './mocks/tasks';
class App extends Component {


    constructor(props) {
        super(props);
        this.state = {
            items       : tasks,
            isShowForm  : false,
            strSearch   : ''
        };
        this.onHandleToogleForm = this.onHandleToogleForm.bind(this);
        this.closeForm          = this.closeForm.bind(this);
        this.handleSearh        = this.handleSearh.bind(this);
    }

    onHandleToogleForm = () => {
        this.setState({
            isShowForm: !this.state.isShowForm
        })
    }

    closeForm = () => {
        this.setState({
            isShowForm: false
        })
    }

    handleSearh(value){
        this.setState({
            strSearch: value
        });
    }

  render() {
    let { items, isShowForm, strSearch } = this.state
    let elmForm = null
    console.log(strSearch);

    if (isShowForm) {
        elmForm = <Form onClickCancel={this.closeForm} />;
    }

    return (
        <div>
            {/* TITLE : START */}
            <Title />
            {/* TITLE : END */}
            {/* CONTROL (SEARCH + SORT + ADD) : START */}
            <Control
                onClickAdd={this.onHandleToogleForm}
                isShowForm={isShowForm}
                onClickSearchGo={this.handleSearh}
            />
            {/* CONTROL (SEARCH + SORT + ADD) : END */}
            {/* FORM : START */}
            {elmForm}
            {/* FORM : END */}
            {/* LIST : START */}
            <List items={items} />
        </div>
    );
  }
}

export default App;
