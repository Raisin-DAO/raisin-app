import React from 'react'
import PageContentCard from './PageContentCard'
function PageContent() {
    return (
        <>
            <div className='bg-black text-white flex flex-col justify-around lg:px-60 py-10 pt-40 relative' style={{ clipPath: "polygon(0 20%, 100% 0, 100% 100%, 0% 100%)" }} >
                <div className='w-1/2 mb-20'>
                    <h1 className='text-3xl mb-10'>Something</h1>
                    <p className='text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius modi odio ex quia cum laboriosam, tempora minus nisi. Inventore debitis laborum id laboriosam at alias veniam sit atque recusandae temporibus eveniet ea dolore, ex libero, distinctio obcaecati vero aut aperiam!</p>
                </div>
                <div className='flex justify-between'>
                    <PageContentCard url="/images/Raisin.png" description="Things that we do and its cool asf" title="Title" />
                    <PageContentCard url="/images/Raisin.png" description="Things that we do and its cool asf" title="Title" />
                    <PageContentCard url="/images/Raisin.png" description="Things that we do and its cool asf" title="Title" />
                </div>
            </div>
        </>
    )
}

export default PageContent