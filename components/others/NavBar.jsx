import Image from 'next/image'
import React from 'react'

import Logo from '../../public/assets/images/logo.svg'
import Link from 'next/link'

const NavBar = () => {
  return (
    <div className='w-full h-auto flex flex-row justify-between items-center z-20'>
        <Image
            src={Logo}
            width={0}
            className=''
        />
        <ul className='flex flex-row md:gap-8 desc_text !font-bold grow pl-14'>
            <li className='!text-primaryColor'><Link href={'#'}>Home</Link></li>
            <li><Link href={'#'}>About</Link></li>
            <li><Link href={'#'}>Adventures</Link></li>
            <li><Link href={'#'}>Places</Link></li>
            <li><Link href={'#'}>Contact</Link></li>
        </ul>
        <div className='flex flex-row gap-4 '>
            <div className='common_button_outlined'>
                <Link href={'#'}>
                    Login
                </Link>
            </div>
            <div className='common_button'>
                <Link href={'#'}>
                    Register
                </Link>
            </div>
        </div>
    </div>
  )
}

export default NavBar