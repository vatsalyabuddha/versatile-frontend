import React, { useState } from 'react'
import Button from './Button'
import configs from './configs'
import Dropdown from './Dropdown'
import axios from "axios"
import NavBar from './NavBar'


const GetDetailPage = (props) => {
    const [input, setInput] = useState({ to: "", from: "" })
    const [isUserPopup, setUserPopup] = useState(false);
    const [redId, setRegId] = useState("");
    const [userData, setUserData] = useState("")
    const [loader, setLoader] = useState(false);
    const [error, serError] = useState("")
    const [file, setFile] = useState("")

    const cityList = configs.cityList;



    const showloader=()=>{
        var modal = document.getElementById("myModalUserdata");
        modal.style.display = "block";

    }

    const removeLoader=()=>{
        setTimeout(() => {
            var modal = document.getElementById("myModalUserdata");
            modal.style.display = "none";
            
        }, 3000);
    }

    const uploadAPI=()=>{
        console.log('---------')
        let url = `${configs.regIDurl}/api/process-reg`;
        axios({
            method: "post",
            url: url,
            data: file,
            headers: { "Content-Type": "multipart/form-data" },
        })
            .then(function (res) {
                let response = res.data
                console.log('---------')
                console.log(response);
                removeLoader()

                if(response.status){
                    setUserData(response.data);
                } else if (!response.status){
                    serError(response.message)
                } else{
                    serError("Sorry No Data is available")
                }
            })
            .catch(function (error) {
                console.log(error);
                removeLoader();
                serError("Sorry No Data is available")
            });
    }

    const onChangeFile = (e) => {
        setUserData("")
        // showloader()
        serError("")

        console.log(e)
        console.log(e.target.files);
        // const config = { headers: { 'Content-Type': 'multipart/form-data' } };
        let url = `${configs.regIDurl}/api/process-reg`;
        let key = "number_plate_image";
        let uploadData = new FormData();
        uploadData.append(key, e.target.files[0])
        setFile(uploadData)
    }



    const onRegSubmit = () => {
        setUserData("")
        serError("")
        showloader();
        let url = `${configs.regIDurl}/api/process-reg`;
        
        axios.post(url, {
            regNumber: redId
          })
          .then(function (response) {
            console.log(response);
            removeLoader()

            let response1 = response.data
                removeLoader()
                if(response1.status){
                    setUserData(response1.data);
                } else if (!response1.status){
                    serError(response1.message)
                } else{
                    serError("Sorry No Data is available")
                }
          })
          .catch(function (error) {
            console.log(error);
            removeLoader();
            serError("Sorry No Data is available")
           
          });

        //hit submit API for Reg  Num
    }

    const renderInputPopup = () => {
        return (
            <div className='pad-20 upload uploadId'>
                <h2>Search by Registration Number</h2>
                <div className='inputDiv'>
                    <input className='pad-10' type="text" placeholder='Search Here ...' value={redId} onChange={(e) => setRegId(e.target.value)} />
                </div>
                <div className='df-jc redbtns'>
                    <div className='mar-10 redbtns'><Button btnText="Submit" color="red" click={onRegSubmit} /></div>
                    {/* <div className='pad-10 mar-10'><Button btnText="Close" color="red"  click={changePage} /></div> */}
                </div>
            </div>
        )
    }


    const renderRightBlock = () => {
        return (
            <div className='SearchBlock searchBlockWrapper'>
                <div className='SearchBlock  searchBlockBox'>
                    <div className='upload searchId'>
                        <p>Search by Number Plate <br />(Image)</p>
                        <div className='inputDoc'>
                            <input
                                type="file"
                                accept="image/*"
                                id="reg_no"
                                disabled={false}
                                name="upload doc"
                                onChange={(e) => onChangeFile(e)} capture>
                            </input>
                        </div>
                        <div className='df-jc redbtns'>
                            <div className='mar-10'><Button btnText="Submit" color="red" click={uploadAPI} /></div>
                        </div>
                    </div>

                    {renderInputPopup()}


                </div>
            </div>
        )
    }

    const renderUser = () => {

        if(!userData || !userData.registration_date || !userData.insurance_upto) {
            console.log('error')
            console.log(userData)
            return
        }
       
        let data = [
            { key: "Owner Name", value: userData.owner_name },
            { key: "Registration Number", value: userData.registration_number },
            { key: "Registration Date", value: userData.registration_date.slice(0,10 ) },
            { key: "Insurance Up-to", value: userData.insurance_upto.slice(0,10 ) },
            { key: "Model", value: userData.maker_model },
            { key: "Engine No.", value: userData.engine_number },
            { key: "Chassis No.", value: userData.chassis_number },
            { key: "Insurer", value: userData.insurer },
        ]
        return (
            <div className='mainUser upload'>
                <h2>Details</h2>
                <div className='lower'>
                    {data.map((item, i) => (
                        <div className='lineUser'>
                            <span className='left'>{item.key}</span>
                            <span className='right'>{item.value}</span>
                        </div>
                    ))}
                </div>
                <div className='warning'>{userData.message}</div>
            </div>
        )
    }

    const renderUserPopup = () => {
        return (
            <div id="myModalUserdata" class="modal">
                <div class="modal-content modalInputMianDiv">
                        <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                </div>
            </div>
        )
    }

    const renderTop = () => {
        return (
            <div className='df-jsb top'>
                {/* <div className='left'>{renderLeftBlock()}</div> */}
                
                <div className='right'>{renderRightBlock()}</div>
            </div>
        )
    }

    return (
        <div>
            <NavBar />
            <div className='app insuranceStatusBox'>
              <div className='insurStatus'>
                 <h2> Search insurance status from Vehicle Reg Number </h2>   
                <ul>
                    <li>Enter Registration Number or Upload Number Plate photo</li>
                    <li>Click on Submit to check the Insurance status</li>
                </ul>
                </div>
                {renderTop()}
                {/* {renderBottom()} */}
                {renderUserPopup()}
                {userData && renderUser()}
                {error && <div className='warning center'>{error}</div>}
                {/* <div className='pad-10 mar-10 center'><Button btnText="Back" color="red" closeColor={true} click={props.gotoHome} /></div> */}
            </div>
        </div>
    )
}

export default GetDetailPage