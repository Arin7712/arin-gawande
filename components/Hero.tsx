import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className='md:h-screen flex flex-col gap-10 md:gap-0 md:justify-between padding'>
        <Navbar/>
        {/* <Image src='/p7.jpg'alt='img' width={300} height={300} /> */}
    <div className='w-full flex-col md:flex-row flex items-center justify-between mb-6 gap-4 md:gap-0'>
      <div className='flex flex-col justify-between h-full'>
        <p className='text-xs md:max-w-[12rem] text-neutral-800'>
        With a track record of delivering high-performance websites, I’ve helped businesses & organisations create seamless user experiences and achieve real results. Witha a strong focus on client satisfaction I ensure every project exceeds expectations.
        </p>

        <p className='mt-6 md:mt-10 text-xs text-neutral-400'>
        Last updated 25 - 03 - 2025
        </p>
      </div>
      <div className='order-[-1] md:order-1 text-4xl md:text-7xl md:w-[60%]'>
      Web Developer and Designer currently based in Pune
      </div>
    </div>
    </section>
  )
}

export default Hero
