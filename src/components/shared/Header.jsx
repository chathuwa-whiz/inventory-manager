import React from 'react';
import { Menu, MenuButton, Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { HiOutlineBell, HiOutlineChatAlt } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';

export default function Header() {

  const navigate = useNavigate();

  return (
    <div className='bg-white h-16 px-4 flex justify-between'>
        <div>
          <input 
            type="text" 
            placeholder='Search'
            className='text-sm focus:outline-none h-10 w-[24rem] border border-gray-300 rounded-sm px-4 my-3' 
          />
        </div>
        <div className='flex items-center gap-5 mr-2'>
          
          <div>
            <Popover className="relative">
              <PopoverButton><HiOutlineChatAlt fontSize={24} className='text-gray-500' /></PopoverButton>
              <PopoverPanel anchor="bottom" className="flex flex-col bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5 m-2">
                <a href="/analytics">Analytics</a>
                <a href="/engagement">Engagement</a>
                <a href="/security">Security</a>
                <a href="/integrations">Integrations</a>
              </PopoverPanel>
            </Popover>
          </div>

          <div>
            <Popover className="relative">
              <PopoverButton><HiOutlineBell fontSize={24} className='text-gray-500' /></PopoverButton>
              <PopoverPanel anchor="bottom" className="flex flex-col bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5 m-2">
                <a href="/analytics">Analytics</a>
                <a href="/engagement">Engagement</a>
                <a href="/security">Security</a>
                <a href="/integrations">Integrations</a>
              </PopoverPanel>
            </Popover>
          </div>

          <div>
            <Menu as={'div'} className={'relative'}>
              <MenuButton className={'ml-2 flex'}>
                <div onClick={() => {navigate('/profile')}} className='h-10 w-10 rounded-full bg-cover bg-black bg-no-repeat bg-center' style={{backgroundImage: 'url("https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg")'}} />
              </MenuButton>
            </Menu>
          </div>


        </div>

    </div>
  )
}
