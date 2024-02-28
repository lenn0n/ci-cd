import React from 'react'
import Item from '../../Item/Item'

import SSWC1 from "@assets/images/screenshots/worldcraft/wc-1.png"
import SSWC2 from "@assets/images/screenshots/worldcraft/wc-2.png"
import SSWC3 from "@assets/images/screenshots/worldcraft/wc-3.png"
import SSWC4 from "@assets/images/screenshots/worldcraft/wc-4.png"
import SSWC5 from "@assets/images/screenshots/worldcraft/wc-5.png"
import SSWC6 from "@assets/images/screenshots/worldcraft/wc-6.png"
import SSWC7 from "@assets/images/screenshots/worldcraft/wc-7.png"
import SSWC8 from "@assets/images/screenshots/worldcraft/wc-8.png"

type Props = {}

function S2021({ }: Props) {
  return (
    <div className="">
      <div className="text-[25px] lg:text-[40px] text-cyan-400 font-medium">Learned From Mistakes</div>
      <div className="md:text-[22px] mb-4">
        I have learned a lot from my previous year, my next project in 2021 was to develop an MLM site. The user can see their downlines 
         in network view. User can login using SSO. Admin can view statistics and more.
      <span className='text-yellow-500 ms-3'>#VanillaJS #VueJS #Bootstrap #VisJS</span>
      </div>
      <div className="grid grid-cols-5 gap-3 md:mt-[40px]">
        <Item preview={SSWC1} title="Login Screen" />
        <Item preview={SSWC2} title="Dashboard" />
        <Item preview={SSWC3} title="Network Tree" />
        <Item preview={SSWC4} title="Overall Reports" />
        <Item preview={SSWC5} title="Pending User" />
        <Item preview={SSWC6} title="Invoice Details" />
        <Item preview={SSWC7} title="History" />
        <Item preview={SSWC8} title="Downlines" />
      </div>
    </div>
  )
}

export default S2021