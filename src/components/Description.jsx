import React from 'react'

//background of 2nd card

const Description = (props) => {
  return (

    <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">

       <img className="w-20 mx-auto mt-[-3rem] bg-white" src={props.image} alt="/" />
    <h2 className='text-2xl font-bold text-center py-8'>{props.user}</h2>
    <p className='text-center text-4xl font-bold'>{props.cost}</p>
    <div className='text-center font-medium'>
        <p className='py-2 border-b mx-8 mt-8'>{props.storage}</p>
        <p className='py-2 border-b mx-8'>{props.granted}</p>
        <p className='py-2 border-b mx-8'>{props.send}</p>
    </div>
    {
      props.className ?
      <button className={props.className}>Start Trial</button>
      :
      <button className={'font-bold mt-4 text-black bg-[#00df9a] w-[200px] rounded-md font-md mx-auto px-6 py-3'}>Start Trial</button>
      }

</div>
  )
}

export default Description