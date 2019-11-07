/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import TaskForm from "./component/TaskForm";
import Control from "./component/Control";
import TaskList from "./component/TaskList";
import "./Style.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: [],
            isDisplayForm: false
        };
    }

    UNSAFE_componentWillMount() {
        if(localStorage && localStorage.getItem('tasks')) {
            const tasks = JSON.parse(localStorage.getItem('tasks'));
            this.setState({
                tasks : tasks
            })
        }
    }

    onGenerateData = () => {
        const tasks = [
            {
                id: this.generateID(),
                name: "Học lập trình",
                status: true
            },
            {
                id: this.generateID(),
                name: "Đi bơi",
                status: false
            },
            {
                id: this.generateID(),
                name: "Học React",
                status: true
            }
        ];
        this.setState({
            tasks : tasks
        })
        localStorage.setItem('tasks', JSON.stringify(tasks))
    };

    s4(){
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
    }

    generateID(){
        return  this.s4() + this.s4() + '-' + this.s4() + this.s4() + '-' + this.s4() + this.s4() + '-' + this.s4()
    }

    onToogleForm = () => {
        this.setState({
            isDisplayForm : !this.state.isDisplayForm
        })
    }

    onCloseForm = () => {
        this.setState({
            isDisplayForm : false
        })
    }

    render() {
        const { tasks, isDisplayForm } = this.state;
        const elmTaskForm = isDisplayForm ? <TaskForm onCloseForm={this.onCloseForm} /> : '' ;
        return (
            <div className="container">
                <div className="text-center">
                    <h1>Quản Lý Công Việc</h1>
                    <hr />
                </div>
                <div className="row">
                    <div className={ isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""}>
                        {elmTaskForm}
                    </div>
                    <div className={ isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
                        <button 
                            type="button" 
                            className="btn btn-primary"
                            onClick={this.onToogleForm}
                            >
                            <span className="fa fa-plus mr-5" />
                            Thêm Công Việc
                        </button>
                        <button
                            type="button"
                            className="btn btn-danger ml-5"
                            onClick={this.onGenerateData}
                        >
                            Generate Data
                        </button>
                        <Control />
                        <div className="row mt">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <TaskList tasks = { tasks }/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
