import React from 'react'
import { Button } from './Button'

export const Section2 = () => {
  return (
    <div className='h-[max-content] pb-[60px] md:h-[80vh] w-[100%]  bg-[#F8F8FF] flex  flex-col md:flex-row'>
        <div className=' pt-[50px]  md:w-[50%] px-[50px]'>
            <img src="https://preview.colorlib.com/theme/safario/img/home/about-img.png" className='sm:h-[60vh] w-[100%] object-contain'/>
        </div>
        <div className='flex  flex-col  gap-y-[30px] sm:px-[50px] md:w-[50%] md:justify-center md:gap-y-[40px]'>
            <h1 className='text-[23px]  sm:text-[30px] font-bold font-sans px-[15px] xl:pr-[200px]'>
                Exploration is
really the essence
of the human spirit
            </h1>
            <p className='text-[14px] md:text-[16px]  md:leading-[30px] text-gray-500 px-[15px] xl:pr-[130px] '>
                Make she'd moved divided air. Whose tree that replenish tone hath own upon them it multiply was blessed is lights make gathering so day dominion so creeping air was made
            </p>
             <div className='px-[15px]'>
                <Button text={"Learn More"}/>
             </div>
        </div>
    </div>
  )
}
