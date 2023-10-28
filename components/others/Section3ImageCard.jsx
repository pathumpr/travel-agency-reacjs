import Image from 'next/image'
import React from 'react'

import Star from '../../public/assets/images/section_2/star.svg'

const Section3ImageCard = ({image, name, price, desc, rating}) => {
  return (
    <div className='w-auto h-auto relative'>
        <Image
            src={image}
            width={0}
            className=''
        />
        <div className='rating absolute top-4 left-4'>
            <Image
                src={Star}
                width={20}
                className=''
            />
            <p className='desc_text !text-whiteColor !font-medium'>{rating}</p>
        </div>
        <div className='absolute bottom-4 left-4 flex flex-col gap-2 !text-left'>
            <p className='desc_text !text-whiteColor !font-bold shadow-2xl'> {name} </p>
            <p className='desc_text !font-bold !text-primaryColor shadow-2xl'> {price} </p>
            <p className='small_text !text-whiteColor !font-medium shadow-2xl'> {desc} </p>
        </div>
    </div>
  )
}

export default Section3ImageCard