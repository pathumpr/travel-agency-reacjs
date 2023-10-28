import Image from 'next/image'
import React from 'react'

import Heart from '../../public/assets/images/section_5/heart_icon.svg'

const Section5ImageCard = ({image, name, desc, price}) => {
  return (
    <div className='w-auto h-auto relative flex justify-center items-center shadow-xl rounded-[10px]'>
        <Image
            src={image}
            width={0}
            className=''
        />
        <div className='w-full h-auto absolute bottom-0 rounded-br-[9px] rounded-bl-[9px] bg-whiteColor !text-left p-4 flex flex-col gap-2'>
            <p className='desc_text !text-secondaryColor'> {name} </p>
            <p className='small_text !text-darkGrayColor'> {desc} </p>
            <p className='desc_text !text-primaryColor !font-medium'> {price} </p>
        </div>
        <div className='absolute top-4 right-4 w-[55px] h-[55px] bg-lightGrayColor parent rounded-full flex justify-center items-center'>
            <Image
                src={Heart}
                width={0}
                className=''
            />
        </div>
    </div>
  )
}

export default Section5ImageCard