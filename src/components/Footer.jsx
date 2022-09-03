import React from 'react'
import {
    FaDribbbleSquare, 
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from 'react-icons/fa'
import Links from './Links'

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div className='ml-4'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
        <p className="py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas deserunt odio quia ad esse assumenda minus, incidunt possimus quod error!</p>
        <div className='flex md:w-[75%] my-6 justify-between'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
        </div>
        </div>
        <div className='lg:col-span-2 flex justify-between mt-6'>
            <Links 
            title ="Solutions"
            link1 ="Analytics"
            link2 ="Marketing"
            link3 ="Commerce"
            link4 ="Insights"
                
                />

            <Links 
            title ="Support"
            link1 ="Pricing"
            link2 ="Documentation"
            link3 ="Guides"
            link4 ="API Status"
                
                />

            <Links 
            title ="Company"
            link1 ="About"
            link2 ="Blogs"
            link3 ="Jobs"
            link4 ="Press"
            link5 ="Careers"
                
                />

            <Links 
            title ="Legal"
            link1 ="Claims"
            link2 ="Policy"
            link3 ="Terms"
                />
        </div>
    </div>
  )
}

export default Footer