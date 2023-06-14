import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import NavBar from './NavBar';

const NotFound = () => {
    return <div>
        <NavBar />
        {true ? <div className='center'><h2>No Data Found</h2></div> : "" }
    </div>
}

export default NotFound