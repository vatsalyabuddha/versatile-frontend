import React, { useState } from 'react'
import Button from './Button'
import insuranceLogo from "../../src/image/insuranceLogo.svg"
import filter from "../../src/image/Filter.png"
import data from "../../src/image/data.png"
import find from "../../src/image/find.png"


import "../app.css"
import GetDetailPage from './GetDetailPage'
import Dashboard from './Dashboard'
import Database from './Database'
// import { browserHistory } from 'react-router';
import { Outlet, Link } from "react-router-dom";

const Home = () => {

    const [loader, setLoader] = useState(false)
    const [isReg, setReg] = useState(false)
    const [redId, setRegId] = useState("");
    const [isHome, setHome] = useState(true);
    const [tab, setTab] = useState("")
    // const [input, setInput] = useState({ to: "", from: "" })

    const changePage=(e)=>{
        let name = e.target.name;
        window.location.href = "/" + name;
    }
    const renderHome1 = () => {
        return (
            <div className='app1 '>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">DashBoard</Link>
                    </li>
                    <li>
                        <Link to="/database">Database</Link>
                    </li>
                </ul>
                <Outlet />
            </div>
        )
    }
    const renderHome = () => {
        return (
            <div className='app1 app'>
                 <div className='insuranceLogo'> <img src={insuranceLogo} alt="logo" /> </div>
                <div className='home'>
                <h2 className='nav-head-main'> Insurance Verification Portal</h2>
                <div className='df-jc'>
                    <div className='extraMar'>
                        <Button isIcon={find} btnText="Find Uninsured Vehicle" color="red qwe123" name="getRegNumData" click={changePage} /></div>
                    <div className='extraMar'><Button  isIcon={data} btnText="Dashboard" color="red qwe123" name="dashboard" click={(e)=>changePage(e)} /></div>
                </div>
                <div className='df-jc'>
                    <div className='extraMar'><Button  isIcon={filter} btnText="Filters" color="red qwe123" name="database" click={(e)=>changePage(e)} /></div>
                </div>
                </div>
                
            </div>
        )
    }

    return (
        <div>{renderHome()}</div>
    )
}

export default Home