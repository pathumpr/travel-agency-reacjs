import Image from 'next/image'
import React from 'react'

import Logo from '../../public/assets/images/logo.svg'
import Facebook from '../../public/assets/images/footer/facebook.svg'
import Twitter from '../../public/assets/images/footer/twitter.svg'
import Instagram from '../../public/assets/images/footer/instagram.svg'
import Whatsapp from '../../public/assets/images/footer/whatsapp.svg'

const Footer = () => {
  return (
    <div className='!bg-secondaryColor'>
        <div className='section p-6 max-w-[1440px] m-auto bg-secondaryColor w-full h-10 flex flex-col gap-6'>
          <div className='w-full h-auto flex flex-row gap-6  justify-between items-start'>
            <div className='w-auto h-auto flex flex-col gap-6'>
              <div className='w-auto h-auto flex flex-row gap-4 items-center'>
                <Image
                  src={Logo}
                  width={0}
                  className=''
                />
                <p className='desc_text !text-primaryColor'>
                  Travel Agency
                </p>
              </div>
              <p className='desc_text !font-medium !text-lightGrayColor'>
              Lorem ipsum dolor sit amet <br/> consectetur. Congue imperdiet <br/> elit congue ultrices vitae varius.
              </p>
              <div className='w-auto h-auto flex flex-row gap-4 justify-start'>
                <Image
                  src={Facebook}
                  width={0}
                  className=''
                />
                <Image
                  src={Twitter}
                  width={0}
                  className=''
                />
                <Image
                  src={Instagram}
                  width={0}
                  className=''
                />
                <Image
                  src={Whatsapp}
                  width={0}
                  className=''
                />
              </div>
            </div>

            <div className='w-auto h-auto flex flex-col gap-6 justify-start items-start'>
              <p className='desc_text !text-lightGrayColor'>Product</p>
              <div className='w-auto h-auto flex flex-col gap-3'>
                <p className='desc_text !text-lightGrayColor !font-medium'>Features</p>
                <p className='desc_text !text-lightGrayColor !font-medium'>Pricing</p>
                <p className='desc_text !text-lightGrayColor !font-medium'>Case studies</p>
                <p className='desc_text !text-lightGrayColor !font-medium'>Reviews</p>
                <p className='desc_text !text-lightGrayColor !font-medium'>Updates</p>
              </div>
            </div>

            <div className='w-auto h-auto flex flex-col gap-6 justify-start items-start'>
              <p className='desc_text !text-lightGrayColor'>Company</p>
              <div className='w-auto h-auto flex flex-col gap-3'>
                <p className='desc_text !text-lightGrayColor !font-medium'>About</p>
                <p className='desc_text !text-lightGrayColor !font-medium'>Contact us</p>
                <p className='desc_text !text-lightGrayColor !font-medium'>Careers</p>
                <p className='desc_text !text-lightGrayColor !font-medium'>Culture</p>
                <p className='desc_text !text-lightGrayColor !font-medium'>Blog</p>
              </div>
            </div>

            <div className='w-auto h-auto flex flex-col gap-6 justify-start items-start'>
              <p className='desc_text !text-lightGrayColor'>Support</p>
              <div className='w-auto h-auto flex flex-col gap-3'>
                <p className='desc_text !text-lightGrayColor !font-medium'>Getting started</p>
                <p className='desc_text !text-lightGrayColor !font-medium'>Help center</p>
                <p className='desc_text !text-lightGrayColor !font-medium'>Server status</p>
                <p className='desc_text !text-lightGrayColor !font-medium'>Report a bug</p>
                <p className='desc_text !text-lightGrayColor !font-medium'>Chat support</p>
              </div>
            </div>

            <div className='w-auto h-auto flex flex-col gap-6 justify-start items-start'>
              <p className='desc_text !text-lightGrayColor'>Contact us</p>
              <div className='w-auto h-auto flex flex-col gap-3'>
                <p className='desc_text !text-lightGrayColor !font-medium'>con@company.com</p>
                <p className='desc_text !text-lightGrayColor !font-medium'>(+94) 09xx5-46xx5</p>
                <p className='desc_text !text-lightGrayColor !font-medium'>Colombo 7, <br/> Sri Lanka</p>
              </div>
            </div>
          </div>
          <div className='w-full h-[1px] bg-lightGrayColor'></div>
          <div className='flex flex-row w-full h-auto justify-between items-center'>
            <p className='small_text !text-lightGrayColor !font-medium'>
              Copyright@ 2023 Catzilla LLC. All rights reserved. Designed by Catzilla
            </p>
            <p className='small_text !text-lightGrayColor !font-medium'>
              Terms and Conditions | Privacy Policy
            </p>
          </div>  
        </div>
    </div>
  )
}

export default Footer