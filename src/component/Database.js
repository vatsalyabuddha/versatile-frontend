import axios from 'axios';
import React, { useEffect, useState } from 'react';
import configs from './configs';
import Table from './Table';
import data from "./list.json"
import Button from './Button';
import common from '../common';
import NavBar from './NavBar';




const Database = (props) => {
    let [data, setData] = useState([]);
    const [input, setInput] = useState({ to: "", from: "" })
    const [disable, setDisable] = useState(false)

    useEffect(() => {
        hitFilterAPI(true);

    }, [])

    const handleChange = (e) => {
        let name = e.target.name;
        switch (name) {
            case "date_to": setInput(prev => ({ ...prev, to: e.target.value })); break;
            case "date_from": setInput(prev => ({ ...prev, from: e.target.value })); break;
            default: console.log("default");
        }
        if (name && name !== "date_to" && name !== "date_from") {
            setInput(prev => ({ ...prev, [name]: e.target.value }));
        }
    }

    const renderDropDown = (list, title = "Select") => {
        return (
            <div className='dateLine'>
                <label for="cars">{title}</label>
                <select name="cars" id="cars">
                    {list.map((item) => <option value="volvo" id={item.key} on>{item.value}</option>)}
                </select>
            </div>
        )

    }

    const hitFilterAPI=(isDefault=false)=>{
        let url = `${configs.regIDurl}/api/total-reg-checked`;
        let data = {
            filters: {
                state: input.state,
                make_name: input.make_name,
                fuel_type: input.fuel_type,
                date_to: input.to,
                date_from: input.from,
            }
        }
        if(isDefault){
            data.filters.date_to = "2021-09-05"
            data.filters.date_from = "2021-09-05"
        }
        axios.post(url, data)
            .then(function (response) {
                console.log(response);
                setData(response.data);
                setDisable(false)
            })
            .catch(function (error) {
                console.log(error);
                setDisable(false)
            });
    }

    const submit = () => {
        setDisable(true)
        hitFilterAPI()
    }


    const renderTop = () => {
        return (
            <div class="modal-content center">
                <div className='pad-20 dateRange'>
                    <h2>Please select a date range</h2>
                    <p>If you have checked yesterday then simply click on SUBMIT button</p>
                    <div className='date df-jc upload dateUpload'>
                        <div className='dateLine'>From<input type="date" name="date_to" value={input.to} onChange={handleChange} /></div>
                        <div className='dateLine'>To<input type="date" name="date_from" value={input.from} onChange={handleChange} /></div>
                        {/* <div className='dateLine'>Insurance Upto<input type="text" name="insurance_upto" value={input.insurance_upto} onChange={handleChange} /></div> */}
                        {/* <div className='dateLine'>Registration Date<input type="date" name="registration_date" value={input.registration_date} onChange={handleChange} /></div> */}
                        {renderDropDown(common.state, "State")}
                        {renderDropDown(common.brand, "Vehicle Brand")}
                        {renderDropDown(common.fuel_type, "Fule Type")}
                    </div>
                    <div className='df-jc '>
                        <div className={`pad-10 mar-10 redbtns ${disable?"disable":""}`}><Button btnText="Submit" color="red" click={submit} /></div>
                        <div className='pad-10 mar-10 center'><Button btnText="Back" color="red" closeColor={true} click={props.gotoHome} /></div>

                        {/* <div className='pad-10 mar-10'><Button btnText="Go to Home" color="red" click={gotoHome} /></div> */}
                    </div>
                    {/* <div className='lastdata'>
                            <span>Last Fetched Date & Time : <strong>5/9/22</strong></span>
                            <span>Last updated : <strong>5/9/22</strong></span>
                        </div> */}
                </div>
            </div>

        )
    }


    return (
        <div>
            <NavBar />
            {renderTop()}
            <div><Table data={data} /></div>
        </div>
    )
}

export default Database