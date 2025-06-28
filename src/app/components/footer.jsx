import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#2D3B36] flex flex-col'>
      {/* 1st div  */}
      <div className='flex flex-col lg:flex-row justify-between lg:gap-70 items-start px-6 py-12
      md:px-20 md:py-15 lg:py-30 gap-7 md:gap-10'>
        <img src='/Join The Skincare Community Now..png' className='w-auto h-auto max-w-[200px] md:max-w-[340px] lg:max-w-max' />

        <div className='flex lg:hidden justify-between gap-10 md:gap-25 lg:px-7 lg:mt-14 w-full'>
          {["Facebook", "Instagram", "YouTube"].map((text, idx) => (
            <p key={idx} className='text-[#EFF5E1] text-[11px] md:text-[15px]'>
              {text}
            </p>
          ))}
        </div>

        <div className='flex flex-col gap-1 md:gap-7 w-full mt-13 md:mt-15 lg:mt-0 pr-4'>


          <div className='flex justify-end md:justify-start w-full'>
            <img
              src='/Get in Touch.png'
              className='w-auto h-auto max-w-[70px] md:max-w-none'
            />
          </div>
          <div className='w-full md:w-auto'>
            <img
              src='/contact.skincare.com.png'
              className='w-auto h-auto max-w-[250px] md:max-w-[350px] lg:max-w-[450px]'
            />
          </div>

        </div>

      </div>
      {/* 2nd div  */}
      <div className='flex px-6 md:px-20 mb-15'>
        <div className='hidden lg:flex justify-between gap-25 px-7'>
          {["Facebook", "Instagram", "YouTube"].map((text, idx) => (
            <p key={idx} className='text-[#EFF5E1] text-[15px]'>
              {text}
            </p>
          ))}
        </div>

        <div className='flex justify-between items-start gap-6 md:gap-25 w-full lg:pl-[320px]'>
          {["Terms of Service", "Privacy Policy", "Cookies Policy"].map((text, idx) => (
            <p key={idx} className='text-[#EFF5E1] text-[8px] md:text-[15px]'>
              {text}
            </p>
          ))}
        </div>

      </div>
      {/* 3rd div  */}
      <div>
        <img src='/skincare (2).png' className='' />
      </div>

    </div>
  )
}

export default Footer
