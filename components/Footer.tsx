import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function Footer() {
  return (
    <div>
        <div className='flex justify-around'>
            <div className='p-10'>

            
            <div className=' flex items-center '>
                <div>
            <Image src="/images/Raisin.png" height={15} width={15} alt='Logo' className='text-lg' />
                </div>
                <h1 className='text-lg font-bold indent-1'>Raisin Labs</h1>
            </div>
            </div>
            <div className='flex justify-around'>

            <div className='p-10'>
                 <h1 className='mb-10 font-bold text-lg'>Social</h1>
                 <div className='flex flex-col'>
                    <Link className='text-sm' href="https://twitter.com/Raisin_Labs">Twitter</Link>
                    <Link className='text-sm' href="https://github.com/Raisin-DAO">GitHub</Link>
                 </div>
            </div>
            <div className='p-10'>
            <h1 className='mb-10 font-bold text-lg'>Support</h1>
            <div className='flex flex-col'>
                <Link className='text-sm' href="">Legal Terms</Link>
                <Link className='text-sm' href="">Cookies</Link>
            </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer