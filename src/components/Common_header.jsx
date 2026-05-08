import React from 'react'

export const Common_header = ({title}) => {
  return (
    <div className='flex flex-col pt-[30px] gap-y-[10px] item-center'>
        <div className='flex justify-center'>
          <img src="https://preview.colorlib.com/theme/safario/img/home/section-icon.png"/>
        </div>
        <h1 className='text-[24px] sm:text-[30px] text-center font-semibold sm:font-bold'>{title}</h1>
        <p className='text-[16px] px-[20px] text-center text-gray-400'>Fowl have fruit moveth male they are that place you will lesser</p>
    </div>
  )
}
