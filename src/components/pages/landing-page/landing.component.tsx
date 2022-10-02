import React from 'react'
import landingImage from '@/assets/images/landing_page.png'
import HeroNavBar from '@/components/common/hero-navbar/hero-navbar.component'

const Landing = () => {
  return (
    // <div className="max-w-[960px] w-full mx-2 grid gap-[1.5rem] content-center drop-shadow-lg sm:grid-cols-2 sm:items-center sm:h-[640px] sm:justify-items-center lg:mx-auto">
    //   <div>
    //     <h1 className="font-content text-2xl mb-1 mt-8 text-red-700 cursor-pointer drop-shadow-lg sm:text-5xl transition ease-in duration-200 hover:scale-105 hover:translate-x-2 hover:-translate-y-1">
    //       SahanaX
    //     </h1>
    //     <h2 className="mb-2 text-red-700 underline font-content text-lg drop-shadow-lg sm:text-xl">
    //       The expense tracker
    //     </h2>
    //     <p className="mb-4 font-content text-sm sm:text-lg">
    //       SahanaX is the webapp developed to manage your restaurant expenses on
    //       the go. track your expenses and find detailed reports and graphs in
    //       real time. Open yours in minutes right from your smartphone, and track
    //       every expense on your restaurant.
    //     </p>
    //     <a className="mt-4 cursor-pointer rounded text-white bg-red-700 px-5 py-3 hover:bg-red-800">Sign in</a>
    //   </div>
    //   <img
    //     className="w-[400px] justify-self-center sm:w-[450px] md:w-[500px] hover:rotate-90 transition ease-in duration-500 sm:mt-4"
    //     src={landingImage}
    //   />
    // </div>
    <div className='flex'>
      <HeroNavBar/>
    </div>
  )
}

export default Landing
