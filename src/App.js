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
                items:tasks,
                isShowForm: false
            }
            this.onHandleToogleForm = this.onHandleToogleForm.bind(this)
    }

    onHandleToogleForm = () => {
        this.setState({
            isShowForm: !this.state.isShowForm
        })
    }

  render() {
    let { items,isShowForm } = this.state
    let elmForm = null

    if (isShowForm) {
        elmForm = <Form />;
    }

    return (
        <div>
            {/* TITLE : START */}
            <Title />
            {/* TITLE : END */}
            {/* CONTROL (SEARCH + SORT + ADD) : START */}
            <Control onClickAdd={this.onHandleToogleForm} />
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
