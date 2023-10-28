import React from 'react'
import Section3ImageCard from '../others/Section3ImageCard'

import Image1 from '../../public/assets/images/section_3/1.svg'
import Image2 from '../../public/assets/images/section_3/2.svg'
import Image3 from '../../public/assets/images/section_3/3.svg'

const Section3 = () => {
  return (
    <div className='section text-center'>
        <p className='title_text pb-10'>Explore Sri Lanka</p>
        <div className='grid grid-cols-3 gap-6'>
            <Section3ImageCard image={Image1} name={'Sigiriya, Sri Lanka'} desc={'2 Days 1 Night | Per Person'} price={'$200'} rating={'4.9'}/>
            <Section3ImageCard image={Image2} name={'Polhena'} desc={'3 Days 2 Night | Per Person'} price={'$400'} rating={'4.5'}/>
            <Section3ImageCard image={Image3} name={'Anuradhapura'} desc={'3 Days 2 Night | Per Person'} price={'$600'} rating={'4.6'}/>
        </div>
    </div>
  )
}

export default Section3