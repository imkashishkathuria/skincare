import React from 'react'

const NewArrival = () => {
  return (
    <div className='flex flex-col gap-7 lg:items-center justify-center px-5 md:px-4 lg:px-30 py-12 '>
      <img src='\Feel Beautiful Inside and Out with Every Product. (2).png' className='hidden lg:block mx-20 w-[540px] h-[90px]' />
       <img src='\Feel Beautiful Inside and Out with Every Product. (3).png' className='hidden md:block lg:hidden px-4 w-[450px] h-[80px]' />
       <img src='\Feel Beautiful Inside and Out with Every Product. (4).png' className='block md:hidden px-5 w-full h-auto' />

      <div className='grid grid-cols-2 gap-2 md:flex justify-between lg:gap-3 overflow-x-hidden'>
        <button className={`bg-[#2D3B36] text-white px-5 py-2 md:px-8 md:py-3 rounded-full text-[12px] md:[text-15px]`}>
            NEW ARRIVAL
          </button>

           <button className="text-[#2D3B36] border-2 bg-white border-[#2D3B36] px-5 py-2 md:px-8 md:py-3  rounded-full text-[12px] md:[text-15px] items-center gap-2">
            <span>CLEANSING</span>
          </button>

          <button className="text-[#2D3B36] border-2 bg-white border-[#2D3B36] px-5 py-2 md:px-8 md:py-3  rounded-full text-[12px] md:[text-15px] items-center gap-2">
            <span>ACNE FIGHTER</span>
          </button>
          <button className="text-[#2D3B36] border-2 bg-white border-[#2D3B36] px-5 py-2 md:px-8 md:py-3  rounded-full text-[12px] md:[text-15px] items-center gap-2">
            <span>ANTI AGGING</span>
          </button>
      </div>
    </div>
  )
}

export default NewArrival
