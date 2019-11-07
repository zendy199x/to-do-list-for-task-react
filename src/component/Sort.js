/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

class Sort extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className="dropdown">
                        <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                            Sắp Xếp <span className="fa fa-caret-square-o-down ml" />
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                            <li>
                            <a role="button">
                                <span className="fa fa-sort-alpha-asc pr">
                                    Tên A-Z
                                </span>
                            </a>
                            </li>
                            <li>
                            <a role="button">
                                <span className="fa fa-sort-alpha-desc pr">
                                    Tên Z-A
                                </span>
                            </a>
                            </li>
                            <li role="separator" className="divider" />
                            <li><a role="button">Trạng Thái Kích Hoạt</a></li>
                            <li><a role="button">Trạng Thái Ẩn</a></li>
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Sort;