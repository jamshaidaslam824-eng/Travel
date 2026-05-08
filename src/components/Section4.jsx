import React from 'react'

export const Section4 = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-[35%_35%] justify-center mt-[100px] mb-[40px]  py-[40px] gap-[20px] md:gap-[15px] w-full'>
      
      {/* Item 1 - Image */}
      <div className='w-[90%] sm:w-[70%]  md:row-span-2  md:w-full  justify-self-center'>
        <img src="https://preview.colorlib.com/theme/safario/img/home/tour1.png" className='h-auto w-full' alt="" />
      </div>
      
      {/* Item 2 - Text Content */}
      <div className='h-auto md:w-full  md:py-[40px] mx-auto md:mx-0 place-content-center  flex flex-col gap-y-[10px] md:pt-[15px] px-[10px] w-[90%] sm:w-[70%] '>
        <h1 className='text-[25px] lg:text-[30px]  font-bold'>We offer worldwise tour plan recently</h1>
        <p className='text-gray-500 text-[16px]'>Make she'd moved divided air. Whose tree that hath own upon them it multiply was blessed</p>
      </div>
      
      {/* Item 3 - Image 2 */}
      <div className='w-[90%] sm:w-[70%] md:w-full  justify-self-center'>
        <img src="https://preview.colorlib.com/theme/safario/img/home/tour2.png" className='h-auto w-full' alt="" />
      </div>
      
      {/* Item 4 - Image 3 (Yeh column 2 mein jaayega) */}
      <div className='w-[90%] sm:w-[70%] md:w-full  justify-self-center'>
        <img src="https://preview.colorlib.com/theme/safario/img/home/tour3.png" className='h-auto w-full' alt="" />
      </div>
      
      {/* Item 5 - Image 4 (Yeh bhi column 2 mein jaayega) */}
      <div className='w-[90%] sm:w-[70%] md:w-full md:col-start-2 justify-self-center'>
        <img src="https://preview.colorlib.com/theme/safario/img/home/tour4.png" className='h-auto w-full' alt="" />
      </div>
      
    </div>
  )
}