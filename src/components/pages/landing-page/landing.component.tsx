import React from 'react'
import landingImage from '@/assets/images/landing_page.png'


const Landing = () => {
  return (
    <div>
      <div className="max-w-[960px] w-full mx-2 grid gap-[1.5rem] content-center drop-shadow-lg sm:grid-cols-[repeat(2,1fr)] sm:items-center md:h-full md:justify-items-center lg:mx-auto lg:h-[640px]">
        <div>
          <h1 className="font-content text-2xl mb-1 mt-4 md:mt-0 text-red-700 drop-shadow-lg sm:text-lg md:text-xl lg:text-5xl transition ease-in duration-200 hover:scale-105 hover:translate-x-1 hover:-translate-y-1">
            SahanaX
          </h1>
          <h2 className="mb-2 text-red-700 font-content text-lg drop-shadow-lg sm:text-lg md:text-lg lg:text-xl">
            The expense tracker
          </h2>
          <p className="mb-4 font-content text-sm sm:text-sm md:text-md lg:text-lg">
            SahanaX is the webapp developed to manage your restaurant expenses
            on the go. track your expenses and find detailed reports and graphs
            in real time. Open yours in minutes right from your smartphone, and
            track every expense on your restaurant.
          </p>
          <a className='mt-4 rounded text-white bg-red-700 px-2 py-2'>Sign in</a>
        </div>
        <img
          className="max-w-full w-[300px] justify-self-center lg:w-[500px] hover:rotate-90 transition ease-in duration-500 md:mt-4"
          src={landingImage}
        />
      </div>
    </div>
  )
}

export default Landing
