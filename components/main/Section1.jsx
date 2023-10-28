import Image from 'next/image'
import React from 'react'

import Vector1 from '../../public/assets/images/section_1/1.svg'
import Vector2 from '../../public/assets/images/section_1/2.svg'
import Vector3 from '../../public/assets/images/section_1/3.svg'
import Vector4 from '../../public/assets/images/section_1/4.svg'

const Section1 = () => {
  return (
    <div className='section'>
        <div className='flex flex-row items-center justify-evenly gap-6'>
            <div className='flex flex-col w-auto h-auto gap-4 !text-left justify-center '>
                <Image
                    src={Vector1}
                    width={0}
                    className=''
                />
                <div className='flex flex-col w-auto h-auto pt-4'>
                    <p className='desc_text !font-bold !text-primaryColor'>15690</p>
                    <p className='desc_text !font-bold !text-secondaryColor'>Experiences</p>
                </div>
            </div>

            <div className='flex flex-col w-auto h-auto gap-4 !text-left justify-center '>
                <Image
                    src={Vector2}
                    width={0}
                    className=''
                />
                <div className='flex flex-col w-auto h-auto pt-4'>
                    <p className='desc_text !font-bold !text-primaryColor'>34</p>
                    <p className='desc_text !font-bold !text-secondaryColor'>Countries</p>
                </div>
            </div>

            <div className='flex flex-col w-auto h-auto gap-4 !text-left justify-center '>
                <Image
                    src={Vector3}
                    width={0}
                    className=''
                />
                <div className='flex flex-col w-auto h-auto pt-4'>
                    <p className='desc_text !font-bold !text-primaryColor'>1354</p>
                    <p className='desc_text !font-bold !text-secondaryColor'>On going</p>
                </div>
            </div>

            <div className='flex flex-col w-auto h-auto gap-4 !text-left justify-center '>
                <Image
                    src={Vector4}
                    width={0}
                    className=''
                />
                <div className='flex flex-col w-auto h-auto pt-4'>
                    <p className='desc_text !font-bold !text-primaryColor'>200K+</p>
                    <p className='desc_text !font-bold !text-secondaryColor'>User per year</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section1