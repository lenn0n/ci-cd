import React from 'react'
import Item from '../../Item/Item'

import SSYZ1 from "@assets/images/screenshots/yazsee/yz-1.jpeg"
import SSYZ2 from "@assets/images/screenshots/yazsee/yz-2.png"
import SSYZ3 from "@assets/images/screenshots/yazsee/yz-3.png"
import SSYZ4 from "@assets/images/screenshots/yazsee/yz-4.png"
import SSYZ5 from "@assets/images/screenshots/yazsee/yz-5.png"
import SSYZ6 from "@assets/images/screenshots/yazsee/yz-6.jpeg"
import SSYZ7 from "@assets/images/screenshots/yazsee/yz-7.jpeg"
import SSYZ8 from "@assets/images/screenshots/yazsee/yz-8.png"
import SSYZ9 from "@assets/images/screenshots/yazsee/yz-9.png"

type Props = {}

function S2020({ }: Props) {
  return (
    <div className="">
      <div className="text-[25px] lg:text-[40px] text-cyan-400 font-medium">First Project in 2020</div>
      <div className="md:text-[22px]  mb-4">My first task as a Front-End developer was to develop 
      an online streaming site that involves upload videos, go live, interactions, comments and more. 
      It was fun and finally met Docker containers.
      <span className='text-yellow-500 ms-3'>#Javascript #ReactJS #Bootstrap #Docker</span>
      </div>
      <div className="grid grid-cols-5 gap-3 md:mt-[40px]">
        <Item preview={SSYZ1} title="Live Stream" />
        <Item preview={SSYZ2} title="Upload Videos" />
        <Item preview={SSYZ3} title="Setup Account" />
        <Item preview={SSYZ4} title="Profile" />
        <Item preview={SSYZ5} title="Watch Video" />
        <Item preview={SSYZ6} title="Homepage" />
        <Item preview={SSYZ7} title="Blogs" />
        <Item preview={SSYZ8} title="Video Player" />
        <Item preview={SSYZ9} title="Listen Music" />
      </div>
    </div>
  )
}

export default S2020