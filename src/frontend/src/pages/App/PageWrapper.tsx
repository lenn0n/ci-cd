import React, { useLayoutEffect } from 'react'
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Footer from 'src/components/Footer/Footer';
import Navbar from 'src/components/Navbar/Navbar';

type Props = {}

const win: Window = window;
let delay: NodeJS.Timeout = setTimeout(() => {}, 1);

function PageWrapper({ }: Props) {
  const navigate = useNavigate();
  const location = useLocation()
  const path = location.pathname

  useLayoutEffect(() => {
    clearTimeout(delay)
    const cb = (event: WheelEvent) => {
      if (event.deltaY < 0) {
        if (path == '/demo') {
          delay = setTimeout(() => {
            navigate("/")
          }, 1);
        }
        if (path == '/contact') {
          delay = setTimeout(() => {
            navigate("/demo")
          }, 1);
        }
      }
      else if (event.deltaY > 0) {
        if (path == '/') {
          delay = setTimeout(() => {
            navigate("/demo")
          }, 1);
        }
        if (path == '/demo') {
          delay = setTimeout(() => {
            navigate("/contact")
          }, 1);
        }
      }
    }

    win.addEventListener('wheel', cb);

    return () => {
      win.removeEventListener('wheel', cb)
      clearTimeout(delay)
    }
  }, [path])

  return (
    <>
      <div className="overflow-hidden h-[90vh] w-[100vw] absolute z-[-2]">
        <div className="relative">
          {Array.from(Array(100).keys()).map((i) => (
            <div className="circle-container absolute">
              <div className="circle" key={i}></div>
            </div>
          ))}
        </div>
      </div>
      <div className='p-4 h-[100vh]'>
        <Navbar />
        <div className='container mx-auto'>
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default PageWrapper