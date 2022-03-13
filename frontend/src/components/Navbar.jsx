import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoMdAdd, IoMdSearch } from 'react-icons/io';
import { RiUser5Fill } from 'react-icons/ri';


const Navbar = ({ searchTerm, setSearchTerm, user }) => {
  const navigate = useNavigate();

  return (
    <div className='flex gap-2 md:gap-5 w-full mt-5 pb-7'>
      <div className='flex justify-start items-center w-full px-2 rounded-md bg-white border-none outline-none focus-within:shadow-sm'>
        <IoMdSearch fontSize={21} className='ml-1' />
          <input
          type="text"
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search"
          value={searchTerm}
          onFocus={() => navigate('/search')}
          className="p-2 w-full bg-white outline-none"
          />
      </div>
      <div className='flex gap-3'>
        {!user ? (
          <Link to={"/login"}>
            <RiUser5Fill 
            color={'#0079C6'}
            className="w-10 h-12 -mt-2 md:w-12 md:h-14 hidden sm:block"
            />
          </Link>
        ) : (
          <Link to={`user-profile/${user?._id}`} >
            <img src={user.image} alt='user-pic' className='w-14 h-12 rounded-lg hidden sm:block' />
          </Link>
          )}
        <Link to='/create-pin' className='bg-greenColor text-xl text-[#0079C6] rounded-full w-9 h-9 md:w-12 md:h-12 flex justify-center items-center'>
          <IoMdAdd />
        </Link>
      </div>
    </div>
  )
}

export default Navbar