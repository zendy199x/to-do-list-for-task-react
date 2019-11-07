import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Nhập từ khóa..." />
                        <span className="input-group-btn">
                            <button className="btn btn-primary" type="button">
                            <span className="fa fa-search mr" />Tìm
                            </button>
                        </span>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Search;