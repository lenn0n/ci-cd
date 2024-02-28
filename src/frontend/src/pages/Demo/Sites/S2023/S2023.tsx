import React from 'react'
import Item from '../../Item/Item'

import SSOLE1 from "@assets/images/screenshots/ole/ole-1.png"
import SSOLE2 from "@assets/images/screenshots/ole/ole-2.png"
import SSOLE3 from "@assets/images/screenshots/ole/ole-3.png"
import SSOLE4 from "@assets/images/screenshots/ole/ole-4.png"
import SSVB1 from "@assets/images/screenshots/vacaybucks/vb-1.png"
import SSVB2 from "@assets/images/screenshots/vacaybucks/vb-2.png"
import SSVB3 from "@assets/images/screenshots/vacaybucks/vb-3.png"
import SSVB4 from "@assets/images/screenshots/vacaybucks/vb-4.png"

type Props = {}

function S2023({ }: Props) {
  return (
    <div className="">
      <div className="text-[25px] lg:text-[40px] text-cyan-400 font-medium">Putting It All Together</div>
      <div className="md:text-[22px] mb-4">
        These are my biggest project that has many features 
        such as deposit/withdrawal, P2P transactions, payment thru plaid and elavon, account management and statistics.
      <span className='text-yellow-500 ms-3'>#ReactJS #VueJS #Bootstrap #Tailwind #Typescript</span>
      </div>
      <div className="grid grid-cols-5 gap-3 md:mt-[40px]">
        <Item preview={SSOLE1} title="Login Page"/>
        <Item preview={SSOLE2} title="Requests"/>
        <Item preview={SSOLE3} title="Transactions"/>
        <Item preview={SSOLE4} title="SMS"/>
        <Item preview={SSVB1} title="Landing Page"/>
        <Item preview={SSVB2} title="Login Page"/>
        <Item preview={SSVB3} title="Reports"/>
        <Item preview={SSVB4} title="Dashboard"/>
      </div>
    </div>
  )
}

export default S2023