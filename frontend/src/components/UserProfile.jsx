import React, { useState, useEffect } from 'react';
import { AiOutlineLogout } from 'react-icons/ai';
import { useParams, useNavigate } from 'react-router-dom';
import { GoogleLogout } from 'react-google-login';
import { client } from '../client';
import { userQuery } from '../utils/data'
import Spinner from './Spinner';

const UserProfile = () => {
  const [user, setUser] = useState();

  const navigate = useNavigate();
  const { userId } = useParams();

  useEffect(() => {
    const query = userQuery(userId);
    client
    .fetch(query)
    .then((data) => {
      setUser(data[0]);
    })
  
  }, [userId])
  
  if(!user) {
    return <Spinner message="Loading profile..."/>
  }

  return (
    <div className='relative pb-2 h-full justify-center items-center'>
      <div className='flex flex-col pb-5'>
        <div className='relative flex flex-col mb-7'>
          <div className='flex flex-col justify-center items-center'>
          <img
            className="w-full h-270 2xl:h-510 shadow-lg object-cover"
            src="https://source.unsplash.com/1600x900/?modern-art"
            alt="user-pic"
          />
          <img
            className='rounded-full w-20 h-20 -mt-10 shadow-xl object-cover'
            src={user.image}
            alt="user-pic"
          />
          <div className='font-bold text-3xl text-center mt-3'>
            {user.userName}
          </div>
          </div>
        </div>

        </div>

    </div>
  )
}

export default UserProfile