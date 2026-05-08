import React from 'react'
import { Common_header } from './Common_header'

export const Section5 = () => {
  return (
   <div className='h-[max-content] bg-[#F8F8FF] py-[40px] w-[100%] '>
     <Common_header title="Our client Says"/>
     <div className='h-[max-content] py-[25px] flex flex-col md:flex-row md:gap-x-[50px] md:items-center gap-y-[10px] w-[90%] sm:w-[80%] md:w-[65%] px-[15px] md:px-[40px] mx-auto mt-[40px] bg-white rounded-[15px]'>
     <div className='sm:h-[150px] sm:w-[350px] flex justify-center items-center '>
           <img src="https://preview.colorlib.com/theme/safario/img/testimonial/t-slider1.png" className='rounded-[5px] h-auto'/>
     </div>
       <div className='flex flex-col  gap-y-[10px]' >
         <h1 className='font-bold'>Daniel heart</h1>
        <p className='text-gray-500 text-[14.5px]'>Project manager, Nestle</p>
        <p className='text-[16px] italic text-gray-500'>Also made from. Give may saying meat there from heaven it lights face had is gathered god earth light for life may itself shall whales made they're blessed whales also made from give may saying meat. There from heaven it lights face had</p>
       </div>

     </div>
     <div className='w-[100%] flex gap-x-[10px] py-[10px] mt-[30px]   justify-center'>
        <div className='h-[10px] w-[10px] rounded-full bg-gray-200'></div>
        <div className='h-[10px] w-[10px] rounded-full bg-gray-500'></div>
        <div className='h-[10px] w-[10px] rounded-full bg-gray-200'></div>
     </div>
   </div>
  )
}
