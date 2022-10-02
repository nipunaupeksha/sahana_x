import { useState } from 'react'
import {
  RiMoneyPoundCircleLine,
  RiDashboard3Line,
  RiCarLine,
  RiFile3Line,
  RiLogoutBoxRLine,
} from 'react-icons/ri'
import logo from '@/assets/images/logo.svg'
import { BsArrowLeftShort } from 'react-icons/bs'


const NavBar = () => {
 
  const [open, setOpen] = useState(true)

  const iconValue = `cursor-pointer duration-500 text-white text-2xl ${
    open && 'rotate-[360deg] scale-110'
  }`

  const Menus = [
    {
      title: 'Dashboard',
      src: <RiDashboard3Line className={iconValue} />,
      gap: true,
    },
    {
      title: 'Withdrawals',
      src: <RiMoneyPoundCircleLine className={iconValue} />,
      gap: false,
    },
    { title: 'Vehicles', src: <RiCarLine className={iconValue} />, gap: false },
    {
      title: 'Reports',
      src: <RiFile3Line className={iconValue} />,
      gap: false,
    },
    {
      title: 'Sign Out',
      src: <RiLogoutBoxRLine className={iconValue} />,
      gap: true,
    },
  ]
  
  const name: string = 'John Doe' // change name

  return (
    <div
      className={` ${
        open ? 'w-72' : 'w-20 '
      } bg-red-700 h-screen p-5  pt-8 relative duration-300`}
    >
      <BsArrowLeftShort
        size="35px"
        className={`absolute cursor-pointer -right-3 top-9 w-7 h-7 border-red-700
           border-2 rounded-full bg-white text-red-700 ${
          !open && 'rotate-180'
        }`}
        onClick={() => setOpen(!open)}
      />

      <div className="flex gap-x-4 items-center">
        <img
          src={logo}
          className={`cursor-pointer duration-500 text-white w-9 ${
            open && 'rotate-[360deg] scale-110'
          }`}
        />
        <h1
          className={`text-white origin-left font-medium text-xl duration-200 font-content ${
            !open && 'scale-0'
          }`}
        >
          {name}
        </h1>
      </div>
      <ul className="pt-6">
        {Menus.map((Menu, index) => (
          <li
            key={index}
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-white text-sm items-center gap-x-4 
              ${Menu.gap ? 'mt-10' : 'mt-2'} ${
              index === 0 && `bg-light-white`
            } `}
          >
            {Menu.src}
            <span
              className={`${
                !open && 'hidden'
              } origin-left duration-200 text-lg font-content`}
            >
              {Menu.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NavBar
