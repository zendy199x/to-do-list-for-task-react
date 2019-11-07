import React, { Component } from "react";
import TaskForm from "./component/TaskForm";
import Control from "./component/Control";
import TaskList from "./component/TaskList";
import "./Style.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            isDisplayForm: false,
            taskEdding: null
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

    s4(){
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
    }

    generateID(){
        return  this.s4() + this.s4() + '-' + this.s4() + this.s4() + '-' + this.s4() + this.s4() + '-' + this.s4()
    }

    onToogleForm = () => {
        if(this.state.isDisplayForm && this.state.taskEdding !== null) {
            this.setState({
                isDisplayForm : true,
                taskEdding : null
            })
        } else {
            this.setState({
                isDisplayForm : !this.state.isDisplayForm,
                taskEdding : null
            })
        }
    }

    onCloseForm = () => {
        this.setState({
            isDisplayForm : false
        })
    }

    onShowForm = () => {
        this.setState({
            isDisplayForm : true
        })
    }

    onSubmit = (data) => {
        const { tasks } = this.state;
        //Add
        if (data.id === "") {
            data.id = this.generateID();
            tasks.push(data);
        } else {
            //Editting
            const index = this.findIndex(data.id);
            tasks[index] = data;
        }
        this.setState({
            tasks : tasks,
            taskEdding: null
        });
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }

    onUpdateStatus = (id) => {
        const {tasks} = this.state;
        const index = this.findIndex(id);
        if(index !== -1) {
            tasks[index].status = !tasks[index].status;
            this.setState({
                tasks : tasks
            })
            localStorage.setItem("tasks", JSON.stringify(tasks))
        }
    }

    findIndex = (id) => {
        const {tasks} = this.state;
        let result = -1;
        tasks.forEach((task, index) => {
            if(task.id === id) {
                result = index;
            }
        })
        return result;
    }

    onDelete = (id) => {
        const {tasks} = this.state;
        const index = this.findIndex(id);
        if(index !== -1) {
            tasks.splice(index, 1);
            this.setState({
                tasks : tasks
            })
            localStorage.setItem("tasks", JSON.stringify(tasks))
        }
        this.onCloseForm();
    }

    onUpdate = (id) => {
        const {tasks} = this.state;
        const index = this.findIndex(id);
        const taskEdding = tasks[index];
        this.setState({
            taskEdding : taskEdding
        })
        this.onShowForm();
    }

    render() {
        const { tasks, isDisplayForm, taskEdding } = this.state;
        const elmTaskForm = isDisplayForm ? <TaskForm 
            onCloseForm={this.onCloseForm} 
            onSubmit={this.onSubmit}
            task={taskEdding} /> : '' ;
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
                        <Control />
                        <div className="row mt">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <TaskList 
                                    tasks={tasks}
                                    onUpdateStatus={this.onUpdateStatus}
                                    onDelete={this.onDelete}
                                    onUpdate = {this.onUpdate}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
