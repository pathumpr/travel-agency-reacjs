import React from 'react'
import Image from 'next/image'

import Image1 from '../../public/assets/images/section_7/1.svg'
import Image2 from '../../public/assets/images/section_7/2.svg'
import Image3 from '../../public/assets/images/section_7/3.svg'
import Image4 from '../../public/assets/images/section_7/4.svg'
import All from '../../public/assets/images/section_7/all.svg'

const Section7 = () => {
  return (
    <div className='section !flex-row justify-between items-center !h-screen'>
        <div className='w-auto h-auto gap-6 flex flex-col'>
            <p className='title_text'>Latest travel trends</p>
            <p className='desc_text'>There are real opportunities for companies that <br/> keep place with the latest travel trends and <br/> embrace new ways of doing business</p>
            <div className='common_button'>View More</div>
        </div>
        <Image
            src={All}
            width={0}
            className=''
        />
    </div>
  )
}

export default Section7