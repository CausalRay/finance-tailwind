import React from 'react'
import Single from "../assets/single.png"
import Double from "../assets/double.png"
import Triple from "../assets/triple.png"

import Description from './Description'

//background of 2nd card

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8' >
           
            <Description 
            image = {Single}
            user = "Single User"
            cost = "$149"
            storage = "500 GB Storage"
            granted = "1 Granted User"
            send = "Send up to 2 GB"
            />

            <Description 
            image = {Double}
            user = "Single User"
            cost = "$149"
            storage = "500 GB Storage"
            granted = "1 Granted User"
            send = "Send up to 2 GB"
            background = "w-full shadow-xl flex flex-col bg-gray-100 p-4 my-4 rounded-lg hover:scale-105 duration-300"
            className = 'font-bold mt-4 text-[#00df9a] bg-black w-[200px] rounded-md font-md mx-auto px-6 py-3'
            />

            <Description 
            image = {Triple}
            user = "Single User"
            cost = "$149"
            storage = "500 GB Storage"
            granted = "1 Granted User"
            send = "Send up to 2 GB"
            />


        </div>
    </div>
  )
}

export default Cards