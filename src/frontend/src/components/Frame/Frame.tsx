import React from 'react'

type Props = {
  children: React.ReactNode
}

function Frame({ children }: Props) {
  return (
    <div className="h-[190px] border-[8px] mt-[-100px]
    rounded-[5px]  bg-cyan-600 border-cyan-500  drop-shadow-xl relative p-10">
      <div className="absolute h-[30px] w-[30px] rounded-md border-dashed border-[6px] border-white-900 opacity-50 top-[-19px] right-[-19px]"></div>
      <div className="absolute h-[30px] w-[30px] rounded-md border-dashed border-[6px] border-white-900 opacity-50 top-[-19px] left-[-19px]"></div>
      <div className="absolute h-[30px] w-[30px] rounded-md border-dashed border-[6px] border-white-900 opacity-50 bottom-[-19px] right-[-19px]"></div>
      <div className="absolute h-[30px] w-[30px] rounded-md border-dashed border-[6px] border-white-900 opacity-50 bottom-[-19px] left-[-19px]"></div>
      { children }
    </div>
  )
}

export default Frame