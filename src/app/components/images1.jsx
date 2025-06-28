"use client"
import React, { useRef } from 'react'

const Images = () => {

  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if(scrollRef.current){
      scrollRef.current.scrollBy({
        left: dir==="left" ?  -450 : 450,
        behavior: "smooth",
      });
    }
  }
  return (
    <div className='overflow-hidden relative'>
      <div ref={scrollRef} className='flex gap-6 px-6 lg:px-20 mt-10 overflow-x-auto scrollbar-hide w-full'>
        {[
          {
            img: "1",
            text: "ALYA SKIN CLEANSER.",
            p2: "FROM $29.99",
          },
          {
            img: "2",
            text: "RITUAL OF SAKURA.",
            p2: "FROM $27.99",
          },
          {
            img: "3",
            text: "THE BODY LOTION.",
            p2: "FROM $19.99",

          },
        ].map(({ img, text, p2 }, idx) => (
          <div className='relative flex-shrink-0 min-w-[300px] sm:min-w-[400px] md:min-w-[430px]' key={idx}>
            <img
              src={`/Mask group${img}.png`}
              className="rounded-[20px] object-contain w-[430px] h-[600px] "
            />
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-white rounded-[10px] w-[380px] h-auto py-2 flex items-center justify-center shadow-md">
              <div className="flex  items-center justify-between w-full px-4">

                <div className='flex flex-col gap-3'>
                  <p className="text-[12px] text-[#2D3B36] w-[190px]">
                    {text}
                  </p>
                  <p className="text-[9px] text-[#2D3B3680] w-[190px]">
                    {p2}
                  </p>
                </div>
                <span className="relative w-[45px] h-[45px] rounded-[10px] bg-[#2D3B361A]"
                  alt="skin care">
                  <img src='/cart-large-2-svgrepo-com 2.png' className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[20px] h-[20px]' />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='flex justify-center  lg:hidden items-center  my-10 gap-12'>
        <button className='relative' onClick={()=>scroll("left")}>
          <img src='/Ellipse 7.png' className='w-[50px] h-[50px]' />
          <img src='Arrow 2.png' className='absolute top-6 right-3 transform translate-x-1/2 -translate-y-1/2 w-[25px]' />
        </button>
        <button className='relative' onClick={()=>scroll("right")}>
          <img src='/Ellipse 6.png' className='w-[50px] h-[50px]' />
          <img src='Arrow 1.png' className='absolute top-6 -left-3 transform translate-x-1/2 -translate-y-1/2 w-[25px]' />
        </button>
      </div>
    </div>
  )
}

export default Images
