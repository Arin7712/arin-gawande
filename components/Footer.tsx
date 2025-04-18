import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-neutral-900 rounded-t-3xl w-full h-screen text-white padding py-[6rem]'>
      <div className='flex items-center justify-between text-xs'>
        <div>
        Portfolio 2024 - 2025
        </div>
        <div>
            Arin Gawande
        </div>
        <div>
        13.0056'' N, 33.6660'' W
        </div>
      </div>

      <div className='flex flex-col gap-2 justify-center items-center md:h-full mt-[6rem] mb-[2rem] md:mb-0 md:mt-0'>
        <p className='text-neutral-400 text-xs'>Have a nice project ?</p>
        <div className='text-5xl'>Get in touch</div>
      </div>

      <div className='flex md:flex-row flex-col items-center gap-4 md:gap-0 justify-between text-xs'>
        <div>
        © All rights reserved. 
        </div>
        <div className='flex md:flex-row flex-col gap-4 items-center'>
        <ul className="text-xs flex md:flex-row flex-col gap-6">
        <li className="hover:cursor-pointer">
              <Link href='https://www.instagram.com/arin.gawande/'>
              Instagram
              </Link>
            </li>
            <li className="hover:cursor-pointer">
              <Link href="https://x.com/ArinX_7712">
              Twitter
              </Link>
              </li>
              <li className="hover:cursor-pointer">
              <Link href="https://www.linkedin.com/in/arin-gawande-134182316/">
              LinkedIn
              </Link>
            </li>
            </ul>
        </div>
        <div>
        Terms of use license
        </div>
      </div>
    </div>
  )
}

export default Footer
