import React from 'react'

export const Footer = () => {
    let image=[
        "https://preview.colorlib.com/theme/safario/img/instagram/i1.jpg",
        "https://preview.colorlib.com/theme/safario/img/instagram/i2.jpg",
        "https://preview.colorlib.com/theme/safario/img/instagram/i3.jpg",
        "https://preview.colorlib.com/theme/safario/img/instagram/i4.jpg",
        "https://preview.colorlib.com/theme/safario/img/instagram/i5.jpg",
        "https://preview.colorlib.com/theme/safario/img/instagram/i6.jpg",
        "https://preview.colorlib.com/theme/safario/img/instagram/i7.jpg",
        "https://preview.colorlib.com/theme/safario/img/instagram/i8.jpg"
    ]
    const navLinks = ["Home", "Feature", "Services", "Portfolio", "Team", "Pricing", "Blog", "Contact"];
  return (
    <div className='h-[max-content] mt-[70px]  py-[100px] w-[100%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-y-[25px] sm:px-[30px] md:px-[60px] bg-[#04091e]'>
        <div className='px-[15px]'>
            <h1 className='text-white py-[15px] text-[18px] font-bold'>About Agency</h1>
            <p className='text-gray-400 text-[14px] leading-[20px]'>The world has become so fast paced that people don’t want to stand by reading a page of information to be they would much rather look at a presentation and understand</p>
        </div>
        <div className='px-[15px]'>
            <h1 className='text-white py-[15px]  text-[18px] font-bold'>Navigation Links</h1>
           <div className='grid  grid-cols-2'>
              {
                navLinks.map((val,ind)=>{
                    return (
                       <p  className='text-gray-400 my-[5px] text-[14px]'>
                        {val}
                       </p>
                    )
                })
             }
           </div>
            </div>
        <div className='px-[15px]'>
            <h1 className='text-white py-[15px]  text-[18px] font-bold'>Newsletter</h1>
            <p className='text-gray-400 text-[14px]'>For business professionals caught between high OEM price and mediocre print and graphic output.</p>
            
            <input
    type="text"
    class="peer block min-h-[auto] text-gray-400 placeholder:text-black w-[90%]  mt-[15px] mb-[20px] rounded border-0 bg-transparent border border-[1px] border-gray-500 px-3  placeholder:text-gray-400 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear  "
    id="exampleFormControlInput2"
    placeholder="Email Address" />
        </div>
        <div className='px-[15px]'>
            <h1 className='text-white py-[15px]  text-[18px] font-bold'>InstaFeed</h1>
            <div className='grid grid-cols-4 w-[90%]'>
                {
                   image.map((val,ind)=>{
                    return(
                        <img src={val} alt="" srcset="" />
                    )
                   })
                }
            </div>
        </div>
    </div>
  )
}
