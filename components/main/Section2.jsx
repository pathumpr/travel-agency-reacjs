import React from 'react'
import Section2ImageCard from '../others/Section2ImageCard'

import Image1 from '../../public/assets/images/section_2/1.svg'
import Image2 from '../../public/assets/images/section_2/2.svg'
import Image3 from '../../public/assets/images/section_2/3.svg'
import Image4 from '../../public/assets/images/section_2/4.svg'

const Section2 = () => {
  return (
    <div className='section !flex-row justify-between items-center'>
        <div className='w-auto h-auto gap-6 flex flex-col'>
            <p className='title_text'>Find the perfect <br/> place</p>
            <p className='desc_text'>A List of the top 75 best  tourist places to <br/> see in Sri Lanka for a perfect holiday o a <br/> trip</p>
            <div className='common_button'>View More</div>
        </div>
        <div className='w-auto h-auto flex flex-row  justify-end gap-6'>
            <Section2ImageCard image={Image1} name={'Beach side view'} rating={'4.6'}/>
            <Section2ImageCard image={Image2} name={'Kandy, Sri Lanka'} rating={'4.4'}/>
            <Section2ImageCard image={Image3} name={'Pinnawala'} rating={'4.7'}/>
        </div>
    </div>
  )
}

export default Section2