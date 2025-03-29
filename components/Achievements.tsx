import React from 'react'
import { achievements } from '@/constants'

const Achievements = () => {
  return (
    <div className='flex flex-col md:flex-row rounded-b-3xl justify-between md:items-start w-full mt-[2rem] gap-6 md:gap-0 padding md:mt-[6rem] mb-[2rem] md:mb-[6rem]'>      
    <div className='text-lg text-neutral-800 md:mb-0 mb-6'>
        What clients say
      </div>

      <div className='md:w-4/6 flex flex-col gap-6'>
      {
        achievements.map((achievement, index) => (
        <div key={index} className='flex md:flex-row flex-col justify-between pb-4 border-b-[1px]'>
        <h1>{achievement.title}</h1>
        <p className='text-zinc-500'>- {achievement.year}</p>
        </div>
        ))
      }
      </div>
    </div>
  )
}

export default Achievements
