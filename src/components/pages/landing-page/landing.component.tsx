import HeroNavBar from '@/components/common/hero-navbar/hero-navbar.component'
import heroMasonaryA from '@/assets/images/hero-masonary-1.png'
import heroMasonaryB from '@/assets/images/hero-masonary-2.png'
import heroMasonaryC from '@/assets/images/hero-masonary-4.png'
import heroMasonaryD from '@/assets/images/hero-masonary-3.png'
import React from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { RiRestaurantLine, RiMouseLine, RiArrowDownLine } from 'react-icons/ri'

const Landing = () => {
  const masonary = [heroMasonaryA, heroMasonaryB, heroMasonaryC, heroMasonaryD]
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
    <div className="flex">
      <HeroNavBar />
      <div className="h-screen flex-1 p-7">
        <div className="grid grid-cols-2 gap-4">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2 }}
            className="md:mt-[3rem]"
          >
            <Masonry>
              {masonary.map((image, i) => (
                <img
                  key={i}
                  src={image}
                  className="px-2 py-2 border-2 border-coolGray-500 m-1 hover:scale-95 hover:duration-300 hover:ease-in-out"
                />
              ))}
            </Masonry>
          </ResponsiveMasonry>

          <div className="md:mt-[3rem]">
            <h1 className="text-2xl font-semibold font-content text-gray-600 text-center">
              Sandevistan
            </h1>
            <span className="flex justify-center">
              <RiRestaurantLine className="text-xl text-gray-500 mb-2 w-full border-b-2 border-coolGray-500" />
            </span>
            <p className="text-lg mt-2">
              Sandevistan is The Expense Tracker, helping you manage your
              expenses on-the-go, track your expenses and set aside money in
              real-time. Open yours in minutes right from your smartphone, and
              track expenses within minutes.
            </p>
            <div className="flex justify-center flex-col items-center">
              <RiMouseLine className="text-xl text-gray-500 mt-[4rem] border-coolGray-500 animate-bounce" />
              <RiArrowDownLine className="text-xl mt-0 text-gray-500 mt-2 border-coolGray-500 animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
