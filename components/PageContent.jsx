import React from 'react'
import PageContentCard from './PageContentCard'
function PageContent() {
    return (
        <>
            <div className='bg-black text-white flex flex-col justify-around px-60 pb-20 pt-36 page-content-clip-path'  >
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