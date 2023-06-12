import axios from 'axios';
import React, { useEffect, useState } from 'react';
import configs from './configs';
import Table from './Table';
import data from "./list.json"
import Button from './Button';



const Database = (props) => {
    let [data, setData] = useState([]);
    const [input, setInput] = useState({ to: "", from: "" })

    // "make_name": "Maruti",
        // "model_name": "Alto",
        // "registration_date": "2005-09-02T00:00:00.000Z",
        // "fuel_type": "PETROL/CNG",
        // "insurance_upto": "2022-02-03T00:00:00.000Z",
        // "vehicle_category": "Car",
        // "rto_state_name": "Haryana"
        // from
        // to

    let state = [
        {key:"Andhra Pradesh", value:"AP"},
        {key:"Arunachal Pradesh", value:"AR"},
        {key:"Assam", value:"AS"},
        {key:"Bihar", value:"BR"},
        {key:"Chhattisgarh", value:"CG"},
        {key:"Goa", value:"GA"},
        {key:"Gujarat", value:"GJ"},
        {key:"Haryana", value:"HR"},
        {key:"Himachal Pradesh", value:"HP"},
    ]
    let brand  = [
        {key:"Maruti", value:"Maruti"},
        {key:"Hyundai", value:"Hyundai"},
        {key:"Mahindra", value:"Mahindra"},
        {key:"Tata", value:"Tata"},
        {key:"Toyota", value:"Toyota"},
    ]
    let fuel_type = [
        {key:"Petrol", value:"Petrol"},
        {key:"Diesel", value:"Diesel"},
        {key:"CNG", value:"CNG"},
        {key:"Electric", value:"Electric"},
        {key:"Hybrid", value:"Hybrid"},
    ]



    useEffect(() => {
        let url = `${configs.regIDurl}/api/total-reg-checked`;

        axios.get(url)
            .then(function (response) {
                console.log(response);
                setData(response.data);
            })
            .catch(function (error) {
                console.log(error);
                // serError("Sorry No Data is available")

            });

    }, [])

    const handleChange = (e) => {
        let name = e.target.name;
        switch (name) {
            case "date_to": setInput(prev => ({ ...prev, to: e.target.value })); break;
            case "date_from": setInput(prev => ({ ...prev, from: e.target.value })); break;
            default: console.log("default");
        }
        if(name && name !== "date_to" && name !== "date_from"){
            setInput(prev => ({ ...prev, [name]: e.target.value }));
        }
    }

    const renderDropDown = (list, title="Select")=>{


        return (
            <div>
                <label for="cars">{title}:</label>
                <select name="cars" id="cars">
                    {list.map((item)=><option value="volvo" id={item.key} on>{item.value}</option>)}
                    {/* <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option> */}
                </select>
            </div>
        )

    }
    // const closeInputPopup = () => {
    //     var modal = document.getElementById("myModalInput");
    //     modal.style.display = "none";
    //     // setReg(false)
    // }

    const submit = () => {

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
                            <div className='dateLine'>Insurance Upto<input type="text" name="insurance_upto" value={input.insurance_upto} onChange={handleChange} /></div>
                            <div className='dateLine'>Registration Date<input type="date" name="registration_date" value={input.registration_date} onChange={handleChange} /></div>
                            {/* <div className='dateLine'>Vehicle Brand<input type="text" name="make_name" value={input.make_name} onChange={handleChange} /></div> */}
                            {/* <div className='dateLine'>Model<input type="text" name="model_name" value={input.model_name} onChange={handleChange} /></div> */}
                            {/* <div className='dateLine'>Fuel Type<input type="text" name="fuel_type" value={input.fuel_type} onChange={handleChange} /></div> */}
                            {/* <div className='dateLine'>Vehicle Category<input type="text" name="vehicle_category" value={input.vehicle_category} onChange={handleChange} /></div> */}
                            {/* <div className='dateLine'>RTO State<input type="text" name="rto_state_name" value={input.rto_state_name} onChange={handleChange} /></div> */}
                            {renderDropDown(state, "State")}
                            {renderDropDown(brand, "Vehicle Brand")}
                            {renderDropDown(fuel_type, "Fule Type")}
                        </div>
                        <div className='df-jc '>
                            <div className='pad-10 mar-10 redbtns'><Button btnText="Submit" color="red" click={submit} /></div>
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



    const renderBottom = () => {
        return (
            <div>
                <Table data={data} />
            </div>
        )
    }




    return (
        <div>
            {renderTop()}
            {renderBottom()}
        </div>
    )
}

export default Database