import React from 'react'
import Section5ImageCard from '../others/Section5ImageCard'

import Image1 from '../../public/assets/images/section_5/1.svg'
import Image2 from '../../public/assets/images/section_5/2.svg'
import Image3 from '../../public/assets/images/section_5/3.svg'
import Image4 from '../../public/assets/images/section_5/4.svg'

const Section5 = () => {
  return (
    <div className='section !text-center'>
        <p className='title_text pb-10'>Top rated experiences</p>
        <div className='w-full h-auto grid grid-cols-4 gap-6'>
            <Section5ImageCard image={Image1} name={'Beautiful Waterfall'} desc={'2 Days 1 Night | Per Person'} price={'$200'}/>
            <Section5ImageCard image={Image2} name={'Beach side, Ampara'} desc={'2 Days 1 Night | Per Person'} price={'$340'}/>
            <Section5ImageCard image={Image3} name={'9 Arches Bridge'} desc={'2 Days 1 Night | Per Person'} price={'$500'}/>
            <Section5ImageCard image={Image4} name={'Beach side, Trincomalee'} desc={'2 Days 1 Night | Per Person'} price={'$420'}/>
        </div>
    </div>
  )
}

export default Section5