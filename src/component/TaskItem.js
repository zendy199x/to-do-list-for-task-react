/* eslint-disable no-unused-vars */
import React, { Component } from "react";

class TaskItem extends Component {

  onUpdateStatus = () => {
    this.props.onUpdateStatus(this.props.task.id)
  }

  render() {
    const { task, index } = this.props;
    return (
      <React.Fragment>
        <tr>
          <td>{index + 1}</td>
          <td>{task.name}</td>
          <td className="text-center">
            <span
              className={task.status === true ? "label label-success" : "label label-danger"}
              onClick={this.onUpdateStatus}
            >
              {task.status === true ? 'Kích hoạt' : 'Ẩn'}
            </span>
          </td>
          <td className="text-center">
            <button 
              type="button" 
              className="btn btn-warning"
            >
              <span className="fa fa-pencil mr" />
              Sửa
            </button>
            &nbsp;
            <button 
              type="button" 
              className="btn btn-danger"
            >
              <span 
                className="fa fa-trash mr" 
              />
              Xóa
            </button>
          </td>
        </tr>
      </React.Fragment>
    );
  }
}

export default TaskItem;
