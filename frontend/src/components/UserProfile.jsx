import React, { useState, useEffect } from 'react';
import { AiOutlineLogout } from 'react-icons/ai';
import { useParams, useNavigate } from 'react-router-dom';
import { GoogleLogout } from 'react-google-login';
import { client } from '../client';
import Spinner from './Spinner';

const UserProfile = () => {
  const [user, setUser] = useState();
  
  const navigate = useNavigate();
  const { userId } = useParams();

  if(!user) {
    return <Spinner message="Loading profile..."/>
  }

  return (
    <div>
    UserProfile
    </div>
  )
}

export default UserProfile