import React from 'react'


const Button = (props) => {



  return (
    <div className='wrapper'>
       
        <button className={`button-6 redbtns ${props.color} ${props.closeColor && "redBG"}`} name={props.name} onClick={(e)=>props.click(e)}>
        {props.isIcon ?<img className='iconImg' src={props.isIcon} alt="   " />:null}
          {props.btnText}</button>
    </div>
  )
}

export default Button