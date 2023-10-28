import React from 'react'
import Image from 'next/image'

import Image1 from '../../public/assets/images/section_6/1.svg'
import Image2 from '../../public/assets/images/section_6/2.svg'
import Image3 from '../../public/assets/images/section_6/3.svg'
import Image4 from '../../public/assets/images/section_6/4.svg'
import Image5 from '../../public/assets/images/section_6/5.svg'
import Image6 from '../../public/assets/images/section_6/6.svg'
import Image7 from '../../public/assets/images/section_6/7.svg'
import Rating from '../../public/assets/images/section_6/rating.svg'

const Section6 = () => {
  return (
    <div className='section !text-center pb-20'>
        <p className='title_text pb-10'>Best places to visit</p>
        <div className='w-full h-auto flex flex-row justify-between gap-4'>
            <div className='relative h-auto flex justify-center items-center'>
                <Image
                    src={Image1}
                    width={0}
                    className=''
                />
                <div className='absolute w-full h-auto p-6 flex flex-col gap-1 bottom-0 text-left'>
                    <div className='w-full h-auto flex flex-row gap-2'>
                        <Image
                            src={Rating}
                            width={0}
                            className='shadow-2xl'
                        />
                        <p className='desc_text !text-whiteColor shadow-2xl'>4.6</p>
                    </div>
                    <p className='desc_text !text-whiteColor shadow-2xl'>Heritage, Sri Lanka</p>
                </div>
            </div>
            <div className='h-auto flex flex-col justify-between items-center'>
                <Image
                    src={Image2}
                    width={0}
                    className=''
                />
                <Image
                    src={Image3}
                    width={0}
                    className=''
                />
            </div>
            <div className='h-auto flex flex-col justify-between items-center'>
                <Image
                    src={Image4}
                    width={0}
                    className=''
                />
                <Image
                    src={Image5}
                    width={0}
                    className=''
                /> 
            </div>
            <div className='relative h-auto flex flex-col justify-between items-center'>
                <Image
                    src={Image6}
                    width={0}
                    className=''
                /> 
                <Image
                    src={Image7}
                    width={0}
                    className=''
                />
                <div className='absolute w-full h-[67px] bg-primaryColor bottom-0 rounded-br-[10px] rounded-bl-[10px] flex justify-center items-center'>
                    <p className='desc_text !text-whiteColor'>View More</p>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default Section6