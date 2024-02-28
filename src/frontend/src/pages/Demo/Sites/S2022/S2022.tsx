import React from 'react'
import Item from '../../Item/Item'

import SSBA1 from "@assets/images/screenshots/btcagrix/agrix-1.jpeg"
import SSBA2 from "@assets/images/screenshots/btcagrix/agrix-2.png"
import SSBA3 from "@assets/images/screenshots/btcagrix/agrix-3.png"
import SSBA4 from "@assets/images/screenshots/btcagrIX/btc-1.png"
import SSBA5 from "@assets/images/screenshots/btcagrIX/btc-2.png"
import SSBA6 from "@assets/images/screenshots/btcagrIX/btc-3.png"
import SSDC1 from "@assets/images/screenshots/btcagrIX/DC1.png"
import SSDC2 from "@assets/images/screenshots/btcagrIX/DC2.png"
type Props = {}

function S2022({ }: Props) {
  return (
    <div className="">
      <div className="text-[25px] lg:text-[40px] text-cyan-400 font-medium">Improving Skills</div>
      <div className="md:text-[22px] mb-4">
       Completed some dev challenges and developed two MLM sites. Nothing much project in 2022 so I read some documentation for me to improve my skills.
      <span className='text-yellow-500 ms-3'>#VueJS #Tailwind #Bootstrap #VisJS #Typescript</span>
      </div>
      <div className="grid grid-cols-5 gap-3 md:mt-[40px]">
        <Item preview={SSBA1} title="Downlines"/>
        <Item preview={SSBA2} title="Network Tree"/>
        <Item preview={SSBA3} title="Registration"/>
        <Item preview={SSBA4} title="Upline"/>
        <Item preview={SSBA5} title="Payment QR"/>
        <Item preview={SSBA6} title="Select Branch"/>
        <Item preview={SSDC1} title="Dev Test 1"/>
        <Item preview={SSDC2} title="Dev Test 2"/>
      </div>
    </div>
  )
}

export default S2022