import React from 'react'
import { Common_header } from './Common_header'
import { Section1_Card } from './Section1_Card'

export const Section1 = () => {
  let data=[
    {
      img:"https://preview.colorlib.com/theme/safario/img/home/service1.png",
      heading:"Hotel Booking",
      title:"Great so dominion two seed give dry rule be fowl him female you will gathered creeping and created air"
    },
        {
      img:"https://preview.colorlib.com/theme/safario/img/home/service2.png",
      heading:"Flight Booking",
      title:"Great so dominion two seed give dry rule be fowl him female you will gathered creeping and created air"
    },
        {
      img:"https://preview.colorlib.com/theme/safario/img/home/service3.png",
      heading:"Destination Booking",
      title:"Great so dominion two seed give dry rule be fowl him female you will gathered creeping and created air"
    }
  ]
  return (
    <div className='h-[max-content]  pb-[70px] bg-white w-[100%]'>
         <Common_header title="Our Popular Services"/>
        <div className='flex flex-col gap-y-[50px] items-center mt-[30px] md:flex-row md:flex-wrap md:justify-center gap-x-[30px]'>
           {
            data.map((val,ind)=>{
              return (
                <Section1_Card img={val.img} heading={val.heading} title={val.title}/>
              )
            })
           }
        </div>
    </div>
  )
}
