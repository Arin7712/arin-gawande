import Image from 'next/image'
import React from 'react'

const Case = () => {
  return (
    <div className='padding'>
      {/* <Image src='/m1.png' alt='image' width={10000} height={40} className='rounded-xl'/> */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <Image src='/ex1.png' alt='image' width={1000} height={40} className='rounded-xl w-[100%]'/>
        <Image src='/ex2.png' alt='image' width={1000} height={40} className='rounded-xl w-[100%]'/>
        <Image src='/ex3.png' alt='image' width={1000} height={40} className='rounded-xl w-[100%]'/>
        <Image src='/ex4.png' alt='image' width={1000} height={40} className='rounded-xl w-[100%]'/>
      </div>
    </div>
  )
}

export default Case
