import React from 'react'

export const Section1_Card = ({img,heading,title}) => {
  return (
    <div className='h-[max-content]  flex flex-col  gap-y-[20px] py-[50px] item-center w-[85%] sm:w-[65%] md:w-[40%] lg:w-[30%] xl:w-[25%] bg-[#F8F8FF]'>
       <div className=' flex justify-center'>
         <img src={img}/>
       </div>
        <h1 className='text-center text-[20px] font-bold'>{heading}</h1>
        <p className='text-center text-gray-500 px-[10px]'>
            {title}
        </p>
    </div>
  )
}
