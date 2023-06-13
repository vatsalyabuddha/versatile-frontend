import React from 'react'
// import insuranceLogo from "../src/image/insuranceLogo.svg"
import insuranceLogo from "../../src/image/insuranceLogo.svg"

const NavBar = () => {

    const openPage=(e)=>{
        let id = e.target.id;
        switch(id) {
            case "": 
            window.location.href = "/"; break;
            case "dashboard": 
            window.location.href = "/dashboard"; break;
            case "database": 
            window.location = "/database"; break;
            default: console.log("default");
        }
    }


  return (
    <div>
        <div className='insuranceLogo'> 
        <img src={insuranceLogo} alt="logo" /> 
        <div className='nbar'>
                <ul>
                    <li>
                        <div id="" onClick={openPage}>Home</div>
                    </li>
                    <li>
                        <div id="/dashboard" onClick={openPage}>DashBoard</div>
                    </li>
                    <li>
                        <div id="/database" onClick={openPage}>Database</div>
                    </li>
                </ul>

            </div>
        </div>

    </div>
  )
}

export default NavBar