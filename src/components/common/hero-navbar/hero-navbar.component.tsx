import { useState } from 'react'
import {
  RiChatSmile3Line,
  RiHomeLine,
  RiCustomerService2Line,
  RiPhoneLine,
  RiLoginBoxLine,
  RiQuillPenLine,
} from 'react-icons/ri'
import logo from '@/assets/images/logo-gray.svg'
import { BsArrowLeftShort } from 'react-icons/bs'

const HeroNavBar = () => {
  const [open, setOpen] = useState(true)

  const iconValue = `cursor-pointer duration-500 text-gray-500 text-2xl ${
    open && 'rotate-[360deg] scale-110'
  }`

  const Menus = [
    {
      title: 'Home',
      src: <RiHomeLine className={iconValue} />,
      gap: true,
    },
    {
      title: 'Services',
      src: <RiCustomerService2Line className={iconValue} />,
      gap: false,
    },
    {
      title: 'About Us',
      src: <RiChatSmile3Line className={iconValue} />,
      gap: false,
    },
    {
      title: 'Contact Us',
      src: <RiPhoneLine className={iconValue} />,
      gap: false,
    },

    {
      title: 'Sign In',
      src: <RiLoginBoxLine className={iconValue} />,
      gap: true,
    },
    {
      title: 'Sign Up',
      src: <RiQuillPenLine className={iconValue} />,
      gap: false,
    },
  ]

  const name: string = 'Sandevistan'

  return (
    <div
      className={` ${
        open ? 'w-72' : 'w-20 '
      } bg-white border-gray-500 border-opacity-100 border-r-2 h-screen p-5  pt-8 relative duration-300`}
    >
      <BsArrowLeftShort
        size="35px"
        className={`absolute cursor-pointer -right-3 top-9 w-7 h-7 border-gray-500
           border-2 rounded-full bg-white text-gray-500 ${
             !open && 'rotate-180'
           }`}
        onClick={() => setOpen(!open)}
      />

      <div className="flex gap-x-4 items-center">
        <img
          src={logo}
          className={`cursor-pointer duration-500 text-gray-500 w-9 ${
            open && 'rotate-[360deg] scale-110'
          }`}
        />
        <h1
          className={`text-gray-500 origin-left font-medium text-xl duration-200 font-content ${
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
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-500 text-sm items-center gap-x-4 
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

export default HeroNavBar
