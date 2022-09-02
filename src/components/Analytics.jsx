import React from 'react'
import Laptop from "../assets/laptop.jpg"

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
            <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis autem at facere. Deleniti, laborum. Ipsa, obcaecati. Culpa, omnis? Earum assumenda modi corporis quibusdam voluptas ab distinctio iure minima velit ipsa.</p>
                <button className='font-bold mt-4 text-white bg-[black] w-[200px] rounded-md font-md mx-auto md:mx-0 px-6 py-3'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics