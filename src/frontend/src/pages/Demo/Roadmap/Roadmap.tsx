import React from 'react'

type Props = {}

function Roadmap({ }: Props) {
  return (
    <div className="m-4 mx-[40px] relative">
      <div className='flex items-start flex-col'>
        <div className="bg-yellow-500 text-black p-4 rounded-lg relative">
          <span>2020</span>
          <div className="absolute w-[42px] top-[40%] right-[-58%] h-[10px] bg-white"></div>
        </div>
      </div>
      <div className='flex items-end flex-col'>
        <div className="bg-cyan-500 text-black p-4 rounded-lg relative">
          <span>2021</span>
          <div className="absolute w-[41px] top-[40%] left-[-61%] h-[10px] bg-white"></div>
        </div>
      </div>
      <div className='flex items-start flex-col'>
        <div className="bg-cyan-500 text-black p-4 rounded-lg relative">
          <span>2022</span>
          <div className="absolute w-[43px] top-[40%] right-[-61%] h-[10px] bg-white"></div>
        </div>
      </div>
      <div className='flex items-end flex-col'>
      <div className="bg-cyan-500 text-black p-4 rounded-lg relative">
          <span>2023</span>
          <div className="absolute w-[37px] top-[40%] left-[-50%] h-[10px] bg-white"></div>
        </div>
      </div>
      <div className="absolute w-[10px] top-0 left-[50%] h-[120%] bg-white"></div>
    </div>
  )
}

export default Roadmap