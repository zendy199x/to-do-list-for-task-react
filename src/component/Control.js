import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';

class Control extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="row mt">
                    <Search onSearch={this.props.onSearch} />
                    <Sort />
                </div>
            </React.Fragment>
        );
    }
}

export default Control;