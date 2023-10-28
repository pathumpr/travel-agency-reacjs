import React from 'react'
import NavBar from '../others/NavBar'
import Image from 'next/image'

import Play1 from '../../public/assets/images/play_btn_1.svg'
import Search1 from '../../public/assets/images/search_bar/1.svg'
import Search2 from '../../public/assets/images/search_bar/2.svg'
import Search3 from '../../public/assets/images/search_bar/3.svg'

import Bg from '../../public/assets/images/bg_image.svg'

const Header = () => {
  return (
    <div className='w-full h-screen min-h-[616px] flex flex-col overflow-hidden'>
        <Image
            src={Bg}
            width={0}
            alt='no image'  
            className='absolute top-0 right-0 z-10 object-cover w-full h-screen min-h-[616px]'
        />
        <NavBar/>
        <div className='w-full h-auto flex flex-col grow gap-4 justify-evenly items-start z-20'>
            <p className='hero_text'>Its Time For New <br/> Adventures, Escapes thrills & <br/> experiences</p>
            <div className='w-full h-auto flex flex-row gap-4 justify-start items-center'>
                <Image
                    src={Play1}
                    width={0}
                    className=''
                />
                <p className='desc_text !font-bold !text-whiteColor'>Play video</p>
            </div>
            <div className='w-full h-auto parent flex flex-row bg-[#D2D2D1] rounded-[10px] justify-between p-4 items-center gap-4 mb-3'>
                <div className='flex flex-row gap-6 p-2 px-6 h-full w-auto justify-start items-center grow bg-whiteColor rounded-[10px]'>
                    <div className='flex flex-row gap-4 h-full w-auto justify-center items-center'>
                        <Image
                            src={Search1}
                            width={0}
                            className='h-full'
                        />
                        <div className='flex flex-col h-full justify-evenly'>
                            <p className='small_text'> Hotel Sea Mons </p>
                            <p className='desc_text !font-bold !text-secondaryColor'>Sri Lanka </p>
                        </div>
                    </div>

                    <div className='flex flex-row gap-14 p-2 h-full justify-end items-center grow'>
                        <div className='flex flex-row gap-4 h-full justify-center items-center'>
                            <Image
                                src={Search2}
                                width={0}
                                className='h-full'
                            />
                            <div className='flex flex-col h-full justify-evenly'>
                                <p className='small_text'> Check-in </p>
                                <p className='small_text !font-bold !text-secondaryColor'> 26.05.2023 </p>
                            </div>
                        </div>

                        <div className='flex flex-row gap-4 h-full justify-center items-center'>
                            <Image
                                src={Search2}
                                width={0}
                                className='h-full'
                            />
                            <div className='flex flex-col h-full justify-evenly'>
                                <p className='small_text'> Check-out </p>
                                <p className='small_text !font-bold !text-secondaryColor'> 28.05.2023 </p>
                            </div>
                        </div>
                        
                        <div className='flex flex-row gap-4 h-full justify-center items-center'>
                            <Image
                                src={Search3}
                                width={0}
                                className='h-full'
                            />
                            <div className='flex flex-col h-full justify-evenly'>
                                <p className='small_text'> Guest </p>
                                <p className='small_text !font-bold !text-secondaryColor'> 4 adults </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex search_button'>
                    Search
                </div>
            </div>  
        </div>
    </div>
  )
}

export default Header