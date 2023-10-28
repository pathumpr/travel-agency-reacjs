import React from 'react'
import Image from 'next/image'

import Image1 from '../../public/assets/images/section_8/1.svg'

const Section8 = () => {
  return (
    <div className='section !flex-row justify-between items-center h-auto !py-20'>
        <Image
            src={Image1}
            width={0}
            className=''
        />
        <div className='w-auto h-auto gap-6 flex flex-col text-right justify-center items-end'>
            <p className='title_text'>Subscribe to our newsletter</p>
            <p className='desc_text'>Recieve new articles and resources  directly  on your inbox. <br/> Fill your email below to join our email newsletter today</p>
            <div className='w-full h-auto flex flex-row gap-6 justify-end items-center'>
                <input
                    placeholder='Enter your Email'
                    className='flex grow h-[50px] p-4 rounded-[10px] desc_text !font-medium drop-shadow-xl focus:outline-none'
                />
                <div className='common_button'>Subscribe</div>
            </div>
        </div>
    </div>
  )
}

export default Section8