import React from 'react'

export const List = () => {
    let List=[
       " Home",
"About",
"Packages",
"Pages",
"Blog",
"Contact",

    ]
  return (
    <ul className='flex gap-x-[35px] hidden lg:flex'>
      {
        List.map((val,ind)=>{
            return (
                <>
                        <li key={ind} className='font-semibold'>{val}</li>
                </>
            )
        })
      }
        
    </ul>
  )
}
