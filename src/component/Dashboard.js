import React, { useEffect, useState } from 'react'
import Box from './Box'
import Table from './Table'
// import data from "./list.json"
import configs from './configs'
import axios from 'axios'
import Button from './Button'
import common from '../common'

const Dashboard = (props) => {

    let [data, setData] = useState([])

    useEffect(()=>{
        let url = `${configs.regIDurl}/api/total-reg-checked`;
        
        axios.get(url)
          .then(function (response) {
            console.log(response);
            setData(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });

    },[])

    let insuredVehicle = data.filter(item=> item.insurance_status>0);
    let unInsuredVehicle = data.filter(item=> item.insurance_status<0);

    const getArrByList =(key)=>{
        let arr = [];
        data.forEach(item=>{
            if(!arr.includes(item[key])){
                arr.push(item[key])
            }
        })
        return arr
    }

   

    const renderMiddle = () => {
        let tileData = [
            { label: "Total Vehicles", number: data.length },
            { label: "Unique Vehicles", number: data.length },
            { label: "Insured Vehicles", number: insuredVehicle.length },
            { label: "Uninsured Vehicles", number: unInsuredVehicle.length },
            { label: "Make Model", number: getArrByList("maker_model") && getArrByList("maker_model").length },
            { label: "RTO", number: getArrByList("rto_name") && getArrByList("rto_name").length },
        ]
        return (
            <div className='Dashboardmiddle'>
                <div className='box-con'>{tileData.map((item, i) => <Box label={item.label} id={item.label} number={item.number} />)}
                </div>
            </div>
        )
    }

    const getMonthArrByList=(key)=>{
        let filterd = data.filter(item=>item.insurance_upto && item.insurance_upto.slice(5, 7) === key )
        return filterd.length
    }

    const renderBottom = () => {
         let tileData = [
            { label: "Jan", number: getMonthArrByList("01") },
            { label: "Feb", number: getMonthArrByList("02") },
            { label: "Mar", number: getMonthArrByList("03") },
            { label: "Apr", number: getMonthArrByList("04") },
            { label: "May", number: getMonthArrByList("05") },
            { label: "Jun", number: getMonthArrByList("06") },
            { label: "Jul", number: getMonthArrByList("07") },
            { label: "Aug", number: getMonthArrByList("08") },
            { label: "Sep", number: getMonthArrByList("09") },
            { label: "Oct", number: getMonthArrByList("10") },
            { label: "Nov", number: getMonthArrByList("11") },
            { label: "Dec", number: getMonthArrByList("12") },
          
        ]

        let date = new Date();
        let month = common.getMonth(date.getMonth())
        return (
            <div className='bottom' style={{background:'white'}}>
                <div className='df-jc head dashboardHeading mar-B10 mar-T10'><h2>Month Wise Expiry Data </h2>
                </div>
                <div className='Dashboardmiddle'>
                    <div className='box-con'>{tileData.map((item, i) => i<6 && <Box label={item.label} id={item.label} number={item.number} color="green" red={item.label === month} />)}</div>
                    <div className='box-con'>{tileData.map((item, i) => i>5 && <Box label={item.label} id={item.label} number={item.number} color="green" red={item.label === month} />)}</div>
                </div>
            </div>
        )
    }


    return (
        <div className='dashboardID'>
            <h1 className=' dash-head mar-L10 dashboardHeading'>Dashboard</h1>
            {renderMiddle()}
            {renderBottom()}
            <div><Table data={data}/></div>
            <div className='pad-10 mar-10 center'><Button btnText="Back" color="red" closeColor={true} click={props.gotoHome} /></div>
        </div>
    )
}

export default Dashboard