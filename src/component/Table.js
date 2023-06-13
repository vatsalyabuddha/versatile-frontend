import React from 'react'

const Table = (props) => {


  const data = props.data;



  const getStatus = (status) => {
    switch (status) {
      case -1: return "UnInsured";
      case 1: return "Insured";
      default: return "Insured";
    }
  }

  if (data.length && data[0]) {
    if (!data[0].registration_number) {
      return (
        <div>
        <table id="customers">
          <tr>
            <th>List</th>
          </tr>
          {data.map((item, i) => {
        
            return (
              <tr>
                <td className={""}>{item}</td>
              </tr>
            )
          })}
  
        </table>
      </div>
      )
    }
  }


  return (
    <div>
      <table id="customers">
        <tr>
          <th>Reg Number</th>
          <th>Captured Date</th>
          <th>RTO</th>
          <th>Make Model</th>
          <th>Location</th>
          <th>Insurance Status</th>
          <th>Insurance Exp. Date</th>
        </tr>
        {data.map((item, i) => {
          let css1 = getStatus(item.insurance_status) === "UnInsured" ? "red" : ""
          return (
            <tr>
              <td className={css1}>{item.registration_number}</td>
              <td className={css1}>{item.created_date && item.created_date.slice(0, 10)}</td>
              <td className={css1}>{item.rto_city_name}</td>
              <td className={css1}>{item.rto_city_name}</td>
              <td className={css1}>{item.rto_city_name}</td>
              <td className={css1}>{getStatus(item.insurance_status)}</td>
              <td className={css1}>{item.insurance_upto && item.insurance_upto.slice(0, 10)}</td>
            </tr>
          )
        })}

      </table>
    </div>
  )
}

export default Table