import Image from 'next/image'
import React from 'react'

import Star from '../../public/assets/images/section_2/star.svg'

const   Section2ImageCard = ({image, name, rating}) => {
  return (
    <div className='w-auto h-auto rounded-[10px] shadow-sm  relative wrap'>
        <Image
            src={image}
            width={0}
            className=''
        />
        <p className='desc_text !text-whiteColor !font-bold absolute top-2 left-2'>
            {name}
        </p>
        <div className='rating absolute bottom-4 left-4'>
            <Image
                src={Star}
                width={20}
                className=''
            />
            <p className='desc_text !text-whiteColor !font-medium'>{rating}</p>
        </div>
    </div>
  )
}

export default Section2ImageCard