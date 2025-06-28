import React from 'react'

const ShopNow = () => {
  return (
    <div className='hidden lg:flex relative my-15 px-20  justify-center'>
      <img
        src="/model.png"
        alt="Main"
        className="h-auto lg:rounded-[30px] w-full max-w-[1200px] object-contain mt-15"
      />
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex items-center justify-center">
        <div className="flex flex-col justify-center gap-6 items-center">
          <img src='/Feel Beautiful Inside and Out with Every Product..png' className='w-full h-auto mx-12' />
          <button className="text-[#2D3B36] border-2 bg-white border-[#2D3B36] px-8 py-3 rounded-full text-[15px] items-center gap-2">
            <span>Shop Now</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ShopNow
