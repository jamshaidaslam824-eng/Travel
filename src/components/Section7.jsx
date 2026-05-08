import React from 'react'
import { Common_header } from './Common_header'
import { Blog_Card } from './Blog_Card'

export const Section7 = () => {
    let card=[
        "https://preview.colorlib.com/theme/safario/img/blog/blog-1.png",
        "https://preview.colorlib.com/theme/safario/img/blog/blog-2.png",
     "https://preview.colorlib.com/theme/safario/img/blog/blog-3.png"
    ]
  return (
   <div className='h-auto w-full pb-[70px] bg-[#F8F8FF]'>
  <div>
    <Common_header title={"From our Blog"} />
  </div>
  
  <div className='w-full h-auto mt-[50px] flex flex-wrap justify-center md:justify-start lg:justify-center gap-y-[30px] gap-x-[20px] xl:gap-x-[55px] px-4'>
    {
      card.map((val, ind) => {
        return (
          <Blog_Card key={ind} img={val} />
        )
      })
    }
  </div>
</div>
  )
}
