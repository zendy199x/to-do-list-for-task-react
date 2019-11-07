import React, { Component } from 'react';

class TaskForm extends Component {

    onCloseForm = () => {
        this.props.onCloseForm();
    }

    render() {
        return (
            <React.Fragment>
                <div className="panel panel-warning">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            Thêm công việc
                            <span 
                                className="far fa-times-circle text-right"
                                onClick={this.onCloseForm}
                            />
                        </h3>
                    </div>
                    <div className="panel-body">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>Tên :</label>
                                <input 
                                    type="text" 
                                    className="form-control"
                                    name="name"
                                />
                            </div>
                            <label>Trạng Thái :</label>
                            <select 
                                className="form-control" 
                                required="required"
                                name="status"
                            >
                                <option value={true}>Kích Hoạt</option>
                                <option value={false}>Ẩn</option>
                            </select>
                            <br />
                            <div className="text-center">
                                <button type="submit" className="btn btn-warning">Thêm</button>&nbsp;
                                <button 
                                    type="submit" 
                                    className="btn btn-danger"
                                >
                                    Hủy Bỏ
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default TaskForm;