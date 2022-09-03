import React from 'react'

const Links = (props) => {
  return (
    <div>
    <h6 className='font-medium text-gray-400'>{props.title}</h6>
    <ul>
        <li className="py-2 text-sm">{props.link1}</li>
        <li className="py-2 text-sm">{props.link2}</li>
        <li className="py-2 text-sm">{props.link3}</li>
        <li className="py-2 text-sm">{props.link4}</li>
        {(()=> {
            if(props.title === "Company" ){
                return (
                    <li className="py-2 text-sm">{props.link5}</li>
                )
            }
        })()}
    </ul>
    </div>
  )
}

export default Links