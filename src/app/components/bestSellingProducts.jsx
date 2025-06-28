import React from 'react'

const BestSellingProducts = () => {
  return (
    <div className='bg-white'>
      <div className='flex flex-col gap-10 md:gap-14 lg:gap-10 lg:flex-row justify-between px-7 md:px-20 my-12'>
        <div className="inline-block">
          <button className="text-[#2D3B36] border-2 border-[#2D3B36] px-5 py-3 rounded-full text-[15px] inline-flex items-center gap-2">
            <img src="/Ellipse 4.png" width="20" height="20" alt="icon" />
            <span>Best Selling Products</span>
          </button>
        </div>

        <div className='hidden lg:block w-[540px] h-[90px]'>
          <img src='/Skincare That Brings Out Your Natural Radiance.png'  />
        </div>
        <div className='hidden md:block lg:hidden w-[520px] h-[80px]'>
          <img src='/Skincare That Brings Out Your Natural Radiance (1).png'  />
        </div>
        <div className='block md:hidden w-[510px] h-[85px]'>
          <img src='/Skincare That Brings Out Your Natural Radiance (2).png'  />
        </div>

        <div className='hidden lg:flex gap-12'>
          <div className='relative'>
          <img src='/Ellipse 7.png' className='w-[50px] h-[50px]' />
          <img src='Arrow 2.png' className='absolute top-6 right-3 transform translate-x-1/2 -translate-y-1/2 w-[25px]' />
          </div>
          <div className='relative'>
          <img src='/Ellipse 6.png' className='w-[50px] h-[50px]' />
          <img src='Arrow 1.png' className='absolute top-6 -left-3 transform translate-x-1/2 -translate-y-1/2 w-[25px]' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BestSellingProducts
