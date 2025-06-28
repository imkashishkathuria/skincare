import Link from 'next/link'
import React from 'react'


const Navbar = () => {
  return (
    <div className='flex items-center gap-8 justify-between flex-wrap px-4 py-4 sm:px-6 sm:py-6 md:px-12 md:py-10 text-[#2D3B36]'>
        <div className='flex-shrink-0'>
        <img src='/skincare.png' alt="Skincare" className='w-24 sm:w-32 md:w-40 h-auto'/>
        </div>
            <nav className={`hidden md:flex items-center gap-6`}>
                <Link href="">All Products</Link>
                <Link href="">Serum</Link>
                <Link href="">Sunscreen</Link>
                <Link href="">Bundle</Link>
            </nav>
            <div className='flex items-center gap-4 mt-4 md:mt-0'>
                <img src='/bag-4-svgrepo-com 1.png' className="w-5 h-5" />
                <p className={`hidden lg:inline`}>Cart(1)</p>
                <img src='/heart-svgrepo-com (1) 1.png' className="w-5 h-5" />
                <img src='/Group 1.png' className="w-5 h-5" />
            </div>
    </div>
    )
    }

export default Navbar
