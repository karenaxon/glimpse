import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { TiHome } from 'react-icons/ti';
// import { IoIosArrowForward } from 'react-icon/io';
import logo from "../assets/logo-transparent.png";
import { categories } from '../utils/data';
import { RiChatSmile3Fill } from 'react-icons/ri';

const isNotActiveStyle = 'flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out';
const isActiveStyle = 'bg-greenColor rounded-full flex items-center px-5 py-1 gap-3 font-extrabold border-r-r-2 border-black transition-all duration-200 ease-in-out text-slate-500 tracking-wide';

const Sidebar = ({ user, closeToggle }) => {
  const handleCloseSidebar = () => {
    if(closeToggle) closeToggle(false);
  }

  return (
    <div className='flex flex-col justify-between bg-white h-full overflow-y-scroll min-w-210 hide-scrollbar'>
    <div className='flex flex-col'>
      <Link
      to="/"
      className='flex px-1 gap-2 my-6 pt-1 w-190 items-center'
      onClick={handleCloseSidebar}
      >
        <img src={logo} alt="logo"/>
        </Link>
        <div className='flex flex-col gap-5'>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive? isActiveStyle: isNotActiveStyle)}
            onClick={handleCloseSidebar}
            >
              <TiHome size={30} color={'#0079C6'}/>
              Home
          </NavLink>
          <hr className='w-full line-height-2'/>
          <h3 className='mt-2 px-5 text-gray-500 uppercase text 2xl:text-xl'>Categories</h3>
          {categories.slice(0, categories.length).map((category) => (
            <NavLink
              to={`/category/${category.name}`}
              className={({ isActive }) => (isActive? isActiveStyle: isNotActiveStyle)}
              onClick={handleCloseSidebar}
              key={category.name}
            >
              <RiChatSmile3Fill size={31} color={'#0079C6'}/>
              {category.name}
            </NavLink>
          ))}
        </div>
    </div>
    {user && (
      <Link 
      to={`user-profile/${user._id}`}
      className='flex my-2 mb-3 gap-2 p-2 items-center bg-white rounded-lg shadow-lg mx-3'
      onClick={handleCloseSidebar}
      >
      <img src={user.image} className='w-10 h-10 rounded-full' alt='user-profile' />
      <p>{user.userName}</p>

      </Link>
    )}
    </div>
  )
}

export default Sidebar
