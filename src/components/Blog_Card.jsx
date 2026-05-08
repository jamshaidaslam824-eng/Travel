import React from 'react'
import { BsCalendar } from "react-icons/bs";
import { FaCommentDots } from "react-icons/fa";
export const Blog_Card = ({img}) => {
  return (
    <div className='h-[max-content]   w-[90%] sm:w-[70%] md:w-[40%] lg:w-[30%] xl:w-[350px]  mx-auto lg:mx-[0px]  pb-[30px] bg-white'>
        <div className='w-[100%]'>
            <img src={img} className='h-auto w-[100%]' />
        </div>
        <h1 className='font-bold my-[15px] px-[10px] text-[18px]'>Forest responds to consultation smoking in al fresco.</h1>
        <div className='flex flex-wrap gap-x-[20px] px-[10px] gap-y-[10px]'>
            <div className='flex items-center gap-x-[5px]  text-[14px] text-gray-500 h-[max-content]'>
            
                <div><BsCalendar /></div>
                <div> Jan 03, 2018</div>
            </div>
            <div className='flex items-center  gap-x-[5px] text-[14px] text-gray-500  h-[max-content]'>
                <div><FaCommentDots /></div>
                <div>03 Comments</div>
            </div>
            
        </div>
        <p className='text-[15px] my-[10px] px-[10px] text-gray-500'>Varius metus morbi ferme libero vehic on porta malesuada ut interdu estmales torquent vehicula parturient</p>

    </div>
  )
}
