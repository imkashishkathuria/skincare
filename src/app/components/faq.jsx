import React from 'react'

const Faq = () => {
  return (
    // <div className='flex justify-between items-start px-4 py-25 gap-10  '>
    //   <div className='flex gap-6 px-20 w-max lg:w-full'>
    //     <div className='relative flex-shrink-0 items-center'>
    //       <img
    //         src="/Mask group (3).png"
    //         alt="Main"
    //         className="rounded-[30px] w-1/2 h-auto object-contain"
    //       />
    //       <div className="absolute bottom-6 left-2/8 transform -translate-x-1/2 bg-[#EFF5E1] rounded-full flex items-center justify-center shadow-md w-[175px] h-[60px]">
    //         <div className="flex justify-center gap-5 items-center ">
    //           <span className="relative w-[45px] h-[45px] bg-[#2D3B36] rounded-full"
    //             alt="skin care">
    //             <img src='/headphone-svgrepo-com 1.png' className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-full md:w-8 md:h-8 object-contain' />
    //           </span>

    //           <p className="text-[12px] text-[#2D3B36] w-[100px]">
    //             24/7 We’re Here to Help You
    //           </p>
    //         </div>
    //       </div>
    //     </div></div>
    //   <div className='flex flex-col items-center justify-center px-5 gap-10'>
    //     <div className='inline-block'>
    //       <button className="text-[#2D3B36] border-2 border-[#2D3B36] px-5 py-3 rounded-full text-[15px] inline-flex items-center gap-2">
    //         <img src="/Ellipse 4.png" width="20" height="20" alt="icon" />
    //         <span>Frequently Asked Question</span>
    //       </button>
    //     </div>
    //     <img src='/Answers to Your Skincare Questions, All in One Place..png' className='px-4' />
    //   </div>
    // </div>
    <div className='flex flex-col mt-12'>
    <div className='flex flex-col lg:flex-row justify-between items-stretch px-5 py-20 gap-10'>

      <div className='hidden lg:flex relative w-full lg:w-1/2 justify-center h-auto'>
        <img
          src="/Mask group (3).png"
          alt="Main"
          className="md:rounded-[30px] w-full max-w-[500px] h-full object-cover"
        />

        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-[#EFF5E1] rounded-full flex items-center justify-center shadow-md w-[220px] h-[60px]">
          <div className="flex justify-center gap-3 items-center px-3">
            <span className="relative w-[45px] h-[45px] bg-[#2D3B36] rounded-full">
              <img
                src="/headphone-svgrepo-com 1.png"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 object-contain"
              />
            </span>
            <p className="text-[12px] text-[#2D3B36] w-[120px]">
              24/7 We’re Here to Help You
            </p>
          </div>
        </div>
      </div>

      <div className='w-full lg:w-1/2 flex flex-col justify-start gap-8 md:gap-16 lg:gap-8 md:px-5'>
        <div className="md:px-5">
          <button className="text-[#2D3B36] border-2 border-[#2D3B36] px-5 py-3 rounded-full text-[15px] inline-flex items-center gap-2">
            <img src="/Ellipse 4.png" width="20" height="20" alt="icon" />
            <span>Frequently Asked Question</span>
          </button>
        </div>

        <div className='md:px-5'>
          <img
            src='/Answers to Your Skincare Questions, All in One Place..png'
            className='w-full max-w-md max-h-[300px]'
            alt="FAQ Heading"
          />

        </div>

        <div className='mt-4 flex flex-col gap-4 md:px-5'>
          <button className="text-[#2D3B36] text-left border-2 border-[#2D3B36] px-5 py-3 text-[13px] md:text-[15px] w-full md:w-full md:max-w-none max-w-md">
            <div className='flex items-center justify-between w-full'>
              <span>Are your products safe for sensitive skin?</span>
              <img src='/plus-large-svgrepo-com 1.png' className='w-5 h-5' />
            </div>
          </button>

          <button className="text-[#2D3B36]  text-left border-2 border-[#2D3B36] px-5 py-3 text-[13px] md:text-[15px] w-full md:w-full md:max-w-none max-w-md">
            <div className='flex items-center justify-between w-full'>
              <div className='flex flex-col gap-1'>
              <span>Are your products cruelty-free?</span>
              <p className='text-[#525349] text-[9px] w-[250px] md:w-[310px]'>Absolutely! All our products are cruelty-free, and most are vegan. Check individual product details for specifics.</p>
              </div>
              <img src='/plus-large-svgrepo-com 2.png' className='w-5 h-5' />
            </div>
          </button>

          <button className="text-[#2D3B36] text-left border-2 border-[#2D3B36] px-5 py-3 text-[13px] md:text-[15px] w-full md:w-full md:max-w-none max-w-md">
            <div className='flex items-center justify-between w-full'>
              <span>What’s your return policy?</span>
              <img src='/plus-large-svgrepo-com 1.png' className='w-5 h-5' />
            </div>
          </button>

          <button className="text-[#2D3B36] text-left border-2 border-[#2D3B36] px-5 py-3 text-[13px] md:text-[15px] w-full md:w-full md:max-w-none max-w-md">
            <div className='flex items-center justify-between w-full'>
              <span>Do you ship internationally?</span>
              <img src='/plus-large-svgrepo-com 1.png' className='w-5 h-5' />
            </div>
          </button>

          <button className="text-[#2D3B36] text-left border-2 border-[#2D3B36] px-5 py-3 text-[13px] md:text-[15px] w-full md:w-full md:max-w-none max-w-md">
            <div className='flex items-center justify-between w-full'>
              <span>How do i choose the right product?</span>
              <img src='/plus-large-svgrepo-com 1.png' className='w-5 h-5' />
            </div>
          </button>
        </div>

      </div>
        
    </div>
    <div className='sm:flex md:hidden  relative w-full justify-center h-auto'>
        <img
          src="/Mask group (4).png"
          alt="Main"
          className="w-full max-w-[500px] h-full object-cover rounded-none"
        />

        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-[#EFF5E1] rounded-full flex items-center justify-center shadow-md w-[220px] h-[60px]">
          <div className="flex justify-center gap-3 items-center px-3">
            <span className="relative w-[45px] h-[45px] bg-[#2D3B36] rounded-full">
              <img
                src="/headphone-svgrepo-com 1.png"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 object-contain"
              />
            </span>
            <p className="text-[12px] text-[#2D3B36] w-[120px]">
              24/7 We’re Here to Help You
            </p>
          </div>
        </div>
      </div>
      </div>

  )
}

export default Faq
