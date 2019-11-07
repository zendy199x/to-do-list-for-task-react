/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';

class Control extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="row mt">
                    <Search />
                    <Sort />
                </div>
            </React.Fragment>
        );
    }
}

export default Control;