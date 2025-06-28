import React from 'react'

const WhyOurProducts = () => {
  return (
    <div className='bg-white'>
      <div className='flex flex-col gap-10 '>
        {/* Paragraph  */}
        <div className='mx-10 mt-[520px]
        md:mx-20 md:my-16 px-2'>
          <p className='text-[14px]
          md:text-[27px]
          lg:text-[38px] 
          text-[#2D3B36]
          leading-relaxed
          '>
            Experience the ultimate in skincare with our expertly formulated products,
            crafted to nourish, protect, and rejuvenate your skin. Combining the finest
            natural ingredients with <span className='lg:text-[#2D3B364D]'> advanced science, our collection ensures every
              skin type can achieve a radiant, healthy glow. Embrace your beauty with
              confidence every day. Experience the ultimate in skincare with our
              expertly formulated products, crafted to nourish, protect, and rejuvenate
              your skin.</span>
          </p>
        </div>

        {/* Why our Products  */}
        <div className='flex flex-col lg:flex-row items-center gap-5 '>
          <div className='flex flex-col lg:w-1/2 px-8 md:px-14 lg:px-20'>
            <div className="inline-block">
              <button className="text-[#2D3B36] border-2 border-[#2D3B36] px-5 py-3 rounded-full text-[15px] inline-flex items-center gap-2">
                <img src="/Ellipse 4.png" width="20" height="20" alt="icon" />
                <span>Why Our Products</span>
              </button>
            </div>




            <div className='my-12'>
              <img src='/image1.png' className="sm:w-[236px] md:w-[540px]" />
            </div>
            <div className='md:w-[650px] lg:w-[505px] mx-2 mb-10'>
              <p className='text-[14px] md:text-[17px] text-[#2D3B36]'>
                Discover a curated collection of skincare products designed to rejuvenate,
                protect, and pamper your skin. Explore our rage crafted with love backed
                by science, and inspired by nature.
              </p>
            </div>

            <div className="flex flex-col gap-16">
              {[["01.png", "Bio Ingredients.png", "Get naturally beautiful and transform with our bio ingredients creams for healthy, radiant skin."],
              ["02.png", "Everything Natural.png", "Pure ingredients for pure skin. The Perfect solution for your skin care needs."],
              ["03.png", "All Handmade.png", "Made with love and care. Just for you. Give your skin the tender loving care it deserves."]]
                .map(([icon, titleImg, desc], idx) => (
                  <div className="flex items-start gap-5 md:gap-9 lg:gap-5" key={idx}>
                    <img src={`/${icon}`} className='w-[56px] h-[30px] md:w-[63px] md:h-[40px]' alt={`icon-${idx}`} />
                    <div className="w-full">
                      <img src={`/${titleImg}`} className='w-[200px] h-[30px] 
                      md:w-[430px] md:h-[55px] 
                      lg:w-[400px] lg:h-[44px]' alt="title" />
                      <p className="text-[#2D3B36] text-[15px]  
                      md:text-[16px] 
                      lg:text-[16px] 
                      mt-3 md:mt-7 lg:mt-3 
                      mb-3 md:mb-8 lg:mb-2 
                      w-[250px] md:w-[450px] lg:w-[400px]">
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
            </div>


          </div>
          <div className="flex flex-col mb-13 relative ">


            <img
              src="/image2.png"
              alt="Main"
              className="h-auto lg:rounded-[30px] sm:w-full md:w-full lg:max-w-[749px] lg:max-h-[740px] object-contain mt-15"
            />
            <div className="absolute bottom-13 left-1/2 transform -translate-x-1/2 bg-white rounded-full w-[276px] h-[50px] flex items-center justify-center shadow-md">
              <div className="flex justify-center gap-4 px-3 py-5 items-center">
                <span className="relative w-[45px] h-[45px] bg-[#2D3B36] rounded-full"
                  alt="skin care">
                  <img src='/award-svgrepo-com 1.png' className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-full md:w-10 md:h-10 object-contain' />
                </span>

                <p className="text-[12px] text-[#2D3B36] w-[190px]">
                  Best Skin Care Product Award Wining
                </p>
              </div>
            </div>
            <div className='flex items-center justify-between text-[#2D3B36] text-[17px] mt-4 mx-4 lg:mx-0'>
              <p className=''> SINCE 2001 </p>
              <p>
                LEARN MORE
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default WhyOurProducts
