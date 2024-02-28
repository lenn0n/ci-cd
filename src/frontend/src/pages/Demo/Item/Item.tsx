import React from 'react'

type Props = {
  preview?: string,
  title?: string
}

function Item({ preview, title }: Props) {
  return (
    <a 
    href={preview}
    data-lightbox={title} 
    data-title={title} 
    role='button' 
    className="
    no-animation
    flex justify-center flex-col items-center
    w-[60px] h-[60px]
    xs:w-[80px] xs:h-[80px]
    sm:w-[100px] sm:h-[100px] md:w-[160px] md:h-[160px] lg:w-[220px] lg:h-[180px] xl:w-[270px] xl:h-[200px]">
      <img
        src={preview}
        className='rounded-[15px] lg:rounded-bl-[30px] lg:rounded-tr-[30px]
         border-[2px] md:border-[3px] border-cyan-500 object-cover hover:opacity-60 transition-all'
        alt="" style={{ width: '90%', height: '90%'}}
      />
      <div className="text-[18px] hidden lg:block">{title}</div>
    </a>
  )
}

export default Item