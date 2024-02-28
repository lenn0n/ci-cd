import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from "@hooks/useRedux"
import { setShowThugGlasses } from '@store/features/system/systemSlice'

import Skills from '@components/Skills/Skills'
import Frame from '@components/Frame/Frame'
import Button from '@components/Button/Button'
import Avatar from "@assets/images/avatar.png"
import AvatarBG from "@assets/images/avatar-bg.png"
import SmallAvatar from "@assets/images/small-avatar.jpg"
import ThugGlasses from "@assets/images/thug-glasses.png"


type Props = {}

function Landing({ }: Props) {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const selectedPL = useAppSelector((state) => state.system.selectedPL)
  const showThugGlasses = useAppSelector((state) => state.system.showThugGlasses)

  const [showTransition, setShowTransition] = useState<boolean>(true)

  return (
    <div className="mt-[30px] sm:mt-[40px] xl:mt-[100px] grid xl:grid-cols-2 place-content-between">
      <div className="">
        <div className="flex gap-4 items-center">
          <div className="h-[80px] w-[80px] xs:h-[120px] xs:w-[120px] 
           sm:h-[180px] sm:w-[180px] lg:h-[220px] lg:w-[220px] block xl:hidden">
            <img src={SmallAvatar} alt="" className="rounded-full" style={{ height: '100%', width: '100%'}} />
          </div>
          <div className="">
            <div className="text-[30px] mb-[-10px] hidden sm:block">Hi,</div>
            <div className="text-[30px] xs:text-[40px] sm:text-[80px] flex gap-2 sm:gap-5">
              <div className="">I'm</div>
              <div 
              className="text-cyan-300 transition-all hover:text-cyan-500 " 
              onMouseOver={()=>{ dispatch(setShowThugGlasses(true))}} 
              onMouseLeave={()=>{ dispatch(setShowThugGlasses(false))}} 
              role='button'>Lennon</div>
            </div>
            <div className="text-[20px] sm:text-[35px] text-gray-400 sm:mt-[-20px] flex md:items-center flex-col md:flex-row ">
              <span>Web Developer</span>
              <span className='md:ms-4 text-[16px] text-yellow-300 drop-shadow-xl'>4 yrs work exp.</span>
            </div>
          </div>
        </div>
        <div className="text-[14px] sm:text-[20px] text-white-400 mt-[20px] sm:mt-[50px] mb-5">
          Been working in web development since 2015. Feel free to view my skills by clicking the icon below:
        </div>
        <Skills />
        <div className="mt-[20px] text-[14px]  xs:text-[14px] sm:text-[16px] block xl:hidden">
          <span className='text-yellow-400 me-2'>{selectedPL?.name}</span>
          <span className='text-[#fff] '>- {selectedPL?.desc}</span>
        </div>
        <div className="mt-[20px] sm:mt-[50px] "></div>
        <div className="mb-[10px] sm:text-[20px] text-white-400 hidden xl:block">If you think I'm qualified</div>

        <Button className="!bg-white !text-cyan-900 hover:!bg-cyan-600 hover:!text-white" label="Hire Me!" onClick={() => { navigate("/contact") }} />
        <div className="inline-block ms-2">
          <Button label="View Journey" onClick={() => { navigate("/demo") }} />
        </div>

      </div>
      <div className="justify-end flex-col hidden xl:flex ms-[20px] me-[10px] xl:ms-[100px]">
        <div className="flex justify-center -z-10 relative">
          <div className={`absolute -z-[11] w-[80%] h-[80%]`} >
            <img src={AvatarBG} alt="" className=' 
            animate-[spin_80s_linear_infinite]' style={{ width: '700px'}} />
          </div>
          <img src={Avatar} alt="" style={{ width: '360px', height:'530px' }} />
          {/* <div className={`${showThugGlasses ? 'absolute' : 'hidden'} top-[66px] right-[120px] left-[252px] transition-all`}>
            <img src={ThugGlasses} alt="" style={{ height: '90px'}} />
          </div> */}
        </div>
        <Frame>
          {selectedPL &&
            <div key={selectedPL.name}>
              <div className={`text-[40px]  text-start ${showTransition ? 'text_1' : ''}`}
                onTransitionEnd={() => { setShowTransition(false) }}>
                {selectedPL?.name}
              </div>
              <div className="text-[18px] text-white-900">
                {selectedPL?.desc}
                <span className='text-yellow-300 ms-2'>{selectedPL?.exp}</span>
              </div>
            </div>
          }
        </Frame>
        {/* <div className="mt-[40px]">
          <div className="flex justify-center">
            <div className="mb-[10px] sm:text-[20px] text-white-400">Here are some of my frontend development journey.</div></div>
          <div className="flex justify-center"><Button label="My Journey" className='' onClick={() => { navigate("/demo") }} /></div>
        </div> */}
      </div>

    </div>
  )
}

export default Landing