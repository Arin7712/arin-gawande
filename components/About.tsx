import React from 'react'

const About = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between md:items-center w-full mt-[2rem] gap-6 md:gap-0 padding md:mt-[10rem] mb-[2rem] md:mb-[10rem]'>
      <div>
        <span className='text-neutral-400 text-xs'>Some of the clients:</span>
        <ul className='text-xs flex flex-col gap-1 mt-2'>
            <li>
                Website
            </li>
            <li>
                Landing Page
            </li>
            <li>
                Web App
            </li>
        </ul>
      </div>
      <div className='md:w-4/6 flex flex-col gap-6 order-[-1] md:order-1'>
        <div className='text-4xl'>
            Studying Science at <span className='border rounded-full px-1 border-black'>Loyola</span> Institute. And have been working in the development industry for about an year.
        </div>
        <div className='text-xs w-1/2 text-neutral-800'>
        My passion for coding started when I was 15, and I have pursued this passion by working with a variety of clients and projects over the past year. I have worked with startups, small businesses, and organisations, creating user interfaces for websites and software applications.
        </div>
      </div>
    </div>
  )
}

export default About
