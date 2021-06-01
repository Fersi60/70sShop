import React from 'react';
import Sidebar from './sider' ; 
import './dashboard.css'

const dashboard = () => {
    return (
        <div>
            <div className="wrapper">
                <Sidebar/>
                <h1>Statistic</h1>
            </div>
        </div>

    );
}

export default dashboard;