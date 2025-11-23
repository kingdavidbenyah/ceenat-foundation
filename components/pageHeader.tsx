import React from 'react'

interface PageHeaderProps {
    title?: string;
    quote?: string;
}

export default function pageHeader({title, quote}: PageHeaderProps) {
  return (
    <div className='flex text-center flex-col gap-2 '>
        <h3 className='section-title font-bold '>{title}</h3>
        <h1 className=' text-black section-max-title font-bold'>{quote}</h1>
    </div>
  )
}
