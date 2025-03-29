import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Check } from 'lucide-react';
import { eCommerceServices, saasDevelopmentServices, services } from '@/constants';
import { Button } from './ui/button';
import * as Scroll from 'react-scroll'

const Services = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between md:items-start w-full mt-[2rem] gap-6 md:gap-0 padding md:mt-[6rem] mb-[2rem] md:mb-[6rem]'>
      <div>
        <span className='text-neutral-400 text-xs '>Services I offer:</span>
        <ul className='text-xs flex flex-col gap-1 mt-2'>
            <li>
                Website Development
            </li>
            <li>
                E-Commerce Site
            </li>
            <li>
                Saas Development
            </li>
        </ul>
      </div>
      <div className='md:w-4/6 flex md:flex-row flex-col  gap-6 order-1 md:order-1'>
      <div className='flex-1'>
        <Card className='bg-neutral-900'>
            <CardHeader>
                <CardTitle className='text-white text-lg'>Website Development</CardTitle>
                <CardDescription className='text-xs'>Websites that help businesses establish credibility and attract more customers.</CardDescription>
            </CardHeader>
            <CardContent className='p-6 pt-2 text-white text-sm'>
                <ul className='flex flex-col gap-2 border-t-[1px] border-zinc-500 pt-4'>
                    {
                      services.map((item, index) => (
                        <li key={index} className='flex gap-1'><Check className='size-4'/>{item.title}</li>
                      ))
                    }
                </ul>
                <Scroll.Link to='contact' smooth={true} spy={true} offset={-50}>
                <Button className='bg-white text-black mt-6 w-full hover:bg-white'>
                
                  Get Started
                </Button>
                </Scroll.Link>
            </CardContent>
        </Card>
      </div>
      <div className='flex-1'>

        <Card className='bg-neutral-900'>
            <CardHeader>
                <CardTitle className='text-white text-lg'>E-commerce Website</CardTitle>
                <CardDescription className='text-xs'>I create high-converting online stores that boost sales and a seamless user experience</CardDescription>
            </CardHeader>
            <CardContent className='p-6 pt-2 text-white text-sm'>
              <ul className='flex flex-col gap-2 border-t-[1px] border-zinc-500 pt-4'>
                {
                  eCommerceServices.map((item, index) => (
                    <li key={index} className='flex gap-1'><Check className='size-4'/>{item.title}</li>
                  ))
                }
                </ul>
                <Scroll.Link to='contact' smooth={true} spy={true} offset={-50}>
                <Button className='bg-white text-black mt-6 w-full hover:bg-white'>
                
                  Get Started
                </Button>
                </Scroll.Link>
            </CardContent>
        </Card>
      </div>
      <div className='flex-1'>

      <Card className='bg-neutral-900'>
            <CardHeader>
                <CardTitle className='text-white text-lg'>Saas Development</CardTitle>
                <CardDescription className='text-xs'>I build scalable and secure SaaS platforms that deliver and drive business growth.</CardDescription>
            </CardHeader>
            <CardContent className='p-6 pt-2 text-white text-sm'>
              <ul className='flex flex-col gap-2 border-t-[1px] border-zinc-500 pt-4'>
                {
                  saasDevelopmentServices.map((item, index) => (
                    <li key={index} className='flex gap-1'><Check className='size-4'/>{item.title}</li>
                  ))
                }
                </ul>
                <Scroll.Link to='contact' smooth={true} spy={true} offset={-50}>
                <Button className='bg-white text-black mt-6 w-full hover:bg-white'>
                
                  Get Started
                </Button>
                </Scroll.Link>
            </CardContent>
        </Card>
      </div>
      </div>
    </div>
  )
}

export default Services;
