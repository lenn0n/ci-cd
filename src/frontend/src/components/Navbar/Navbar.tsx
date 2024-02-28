import React from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from "@assets/images/icons/logo.jpg"
import GitHubIcon from "@assets/images/icons/github.png"
import LinkedIn from "@assets/images/icons/linked-in.png"
type Props = {}

function Navbar({ }: Props) {
  const navigate = useNavigate()

  const isActive = (url: string) => {
    if (window.location.pathname == url) {
      return true
    } else {
      return false
    }
  }
  return (
    <div className='xs:p-2 sm:p-4'>
      <div className="mx-auto container">
        <div className="flex justify-between">
          <div className="flex gap-4 justify-center items-center">
            <div className="flex gap-4 justify-center items-center lg:text-[20px]">
              <div role="button"
                onClick={() => { navigate("/") }}
                className={`hover:scale-[1.1] transition-all ${isActive("/") ? 'text-yellow-500' : ''}`} >About</div>
              <div role="button"
                onClick={() => { navigate("/demo") }}
                className={`hover:scale-[1.1] transition-all ${isActive("/demo") ? 'text-yellow-500' : ''}`} >Journey</div>
              <div role="button"
                onClick={() => { navigate("/contact") }}
                className={`hover:scale-[1.1] transition-all ${isActive("/contact") ? 'text-yellow-500' : ''}`} >Contact</div>
            </div>
          </div>
          <div className="hidden  gap-4 sm:flex">
            <a href="https://github.com/lenn0n" target='_blank'>
              <img
                role="button"
                className='hover:scale-[1.1] transition-all'
                src={GitHubIcon} style={{ width: '30px', height: '30px' }} alt="" />
            </a>

            <a href="https://www.linkedin.com/in/lennon-benedict-jansuy-4887a7279/" target='_blank'>
              <img
                role="button"
                className='hover:scale-[1.1] transition-all'
                src={LinkedIn} style={{ width: '30px', height: '30px' }} alt="" />
            </a>
            {/* <img
              role="button"
              className='hover:scale-[1.1] transition-all'
              src={FacebookIcon} style={{ width: '30px', height: '30px' }} alt="" /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar