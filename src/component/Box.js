import React from 'react'

const Box = (props) => {



    return (
        <div className='mainBox' onClick={()=>props.updateParent(props.data)}>
            <div className='tileBox'>
                <div><strong>{props.label}</strong></div>
                <div className={`box ${props.color && props.color } ${props.red && "currentmonth" }`}>{props.number}</div>
            </div>
        </div>
    )
}

export default Box