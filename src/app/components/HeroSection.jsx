import React from 'react'
import Navbar from './navbar'
import AnimatedText from './AnimatedText'

const HeroSection = () => {
  return (
    <div className='relative w-full min-h-screen bg-[#EFF5E1]'>
      <Navbar />
      <div className='flex flex-col justify-between md:gap-y-34 lg:gap-y-1 relative'>

        <div className='relative w-full md:px-12 py-4'>
          <div className="block md:hidden w-full mb-10">
            <img
              src="/Glowwww Naturally.png"
              alt="Glow Naturally"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className='flex flex-col  md:flex-row items-center justify-between  gap-6 '>
            <AnimatedText text="Transform your skincare routine with premium products that restore, protect, and enhance your nautural glow every day." />
            
            <div className='hidden lg:block w-[27.55vw] h-[28.4vh]'>
              <img src='/Glow Natur-ally.png' className="w-full h-full object-contain" />
            </div>
            <div className='hidden md:block'>
              <img src='/plum.jpg' className="lg:rounded-[20px] object-cover hidden md:block 
                md:w-[83.4vw] md:h-[58.5vh]
                lg:w-[15.60vw] lg:h-[30.54vh]" />
            </div>
          </div>

          <div className="hidden md:block lg:hidden absolute left-1/2 -translate-x-1/2 w-[60vw] md:w-full z-20"
            style={{ top: 'calc(100% - 20vh)' }}>
            <img src="/Glowwww Naturally.png" alt="Glow Naturally" className="w-full h-auto object-contain" />
          </div>
        </div>

        <div className='w-full flex flex-col md:flex-row-reverse lg:flex-row items-center justify-between md:px-8 lg:px-22 md:py-6 md:bottom-0 lg:mt-3'>


          <button className={`hidden md:block z-10 bg-[#2D3B36] text-white px-10 md:py-4 rounded-full text-[20px]`}>
            Shop Now
          </button>

          <div className="relative z-30 md:z-10 lg:mx-6 lg:mr-50">
            <img src="/center image.png" alt="Main" className="md:block
            md:w-[300px] md:h-[320px]
            lg:w-[560px] lg:h-[550px] 
            lg:rounded-[30px] lg:mr-20" />

            <div className="absolute flex items-center justify-center -translate-x-1/2 bottom-0 left-1/2 bg-white rounded-full w-[276px] h-[50px] my-3 z-40 md:z-20">
              <div className='flex justify-center gap-3 px-2 py-4 items-center'>
                <img src='/skin_care.jpg' className='w-[45px] h-[45px] rounded-full' />
                <p className={`text-[12px] text-[#2D3B36] w-[250px]`}>
                  While giving you an invigorating cleansing experience.
                </p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-12 md:bottom-0  left-1/2 -translate-x-1/2 w-full z-20 md:z-0 ">
            <img src="/skincare (1).png" alt="Glow Naturally" className="w-full h-full object-contain" />
          </div>

          <div className="absolute -bottom-[560px] left-1/2 -translate-x-1/2 block md:hidden z-30 w-[100%]">
            <img src="/plum.jpg" alt="Main" className="sm:w-[100%] object-contain" />
            <div className='mx-auto my-10 flex items-center '>
              <button className={`md:hidden bg-[#2D3B36] text-white px-10 py-3 my-5 mx-auto rounded-full text-[16px]`}>
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default HeroSection
