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

    const setDropdown =(key, val)=>{
        setInput(prev => ({ ...prev, [key]: val }));

    }

    const renderDropDown = (list, title = "Select", slug) => {
        return (
            <div className='dateLine'>
                 <label for={slug}>{title}</label>
                 <select name={slug} id={slug} onChange={(e)=>{handleChange(e)}}>
                {list.map((item) => <option value={item.value} id={item.value} onClick={()=>setDropdown(slug,item.key )}>{item.key}</option>)}
                </select>
            </div>
        )

    }

    const hitFilterAPI=(isDefault=false)=>{
        let url = `${configs.regIDurl}/api/vehicle-list`;
        let data = {
            filters: {
               
            }
        }
        if(input.state){
            data.filters.state = input.state
        }
        if(input.brand){
            data.filters.make_name = input.brand
        }
        if(input.fuel_type){
            data.filters.fuel_type = input.fuel_type
        }
        if(input.date_to){
            data.filters.date_to = input.date_to
        }
        if(input.date_from){
            data.filters.date_from = input.date_from
        }
        if(input.is_insured){
            data.filters.is_insured = input.is_insured
        }
        if(isDefault){
                data = {
                    filters: {}
                }
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
    const reset = () => {
        setInput({})
    }



    const renderTop = () => {
        let carBrands = common.carBrands;
        const carBrandsArray = carBrands.map(brand => {
            return { key: brand, value: brand };
          });
          let is_insuredArr = [
            { key: "Select", value: "" },
            { key: "Insured", value: 1 },
            { key: "UnInsured", value: -1 },
          ]
        return (
            <div class="modal-content center">
                <div className='dateRange'>
                    <h2>Please select a date range</h2>
                    <p>If you have checked yesterday then simply click on SUBMIT button</p>
                    <div className='date df-jc upload dateUpload'>
                        <div className='dateLine'>From<input type="date" name="date_to" value={input.to} onChange={handleChange} /></div>
                        <div className='dateLine'>To<input type="date" name="date_from" value={input.from} onChange={handleChange} /></div>
                        {/* <div className='dateLine'>Insurance Upto<input type="text" name="insurance_upto" value={input.insurance_upto} onChange={handleChange} /></div> */}
                        {/* <div className='dateLine'>Registration Date<input type="date" name="registration_date" value={input.registration_date} onChange={handleChange} /></div> */}
                        {renderDropDown(common.state, "State", "state")}
                        {renderDropDown(carBrandsArray, "Vehicle Brand", "brand")}
                        {renderDropDown(common.fuel_type, "Fule Type", "fuel_type")}
                        {renderDropDown(is_insuredArr, "Insured/UnInsured", "is_insured")}
                    </div>
                    <div className='df-jc '>
                        <div className={`pad-10 mar-10 redbtns ${disable?"disable":""}`}><Button btnText="Submit" color="red" click={submit} /></div>
                        <div className='pad-10 mar-10 center'><Button btnText="Reset" color="red" closeColor={true} click={reset} /></div>

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
        <div className='listWrapper app'>
            <div className='navBar'>
            <NavBar />
            </div>
            {renderTop()}

            {data && data.length ?<div><Table data={data} /></div>:""}
            {(!data || !data.length) ? <div className='center'><h2>No Data Found</h2></div> : "" }
        </div>
    )
}

export default Database