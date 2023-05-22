import React from 'react'
import Image from "next/image"

function PageContentCard({ url, title, description }) {
    return (
        <div className=' border-white p-4 w-48 border-2 rounded-3xl flex flex-col gap-2'>
            <Image src={url} height={30} width={30} alt='Image' />
            <h1 className='text-xl'>{title}</h1>
            <p className=''>{description}</p>
        </div>
    )
}

export default PageContentCard