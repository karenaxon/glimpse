import React from 'react'
import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import video from '../assets/bg-video.mp4';
import logo from '../assets/logo-transparent.png';

const Login = () => {
  return (
    <div className='flex justify-start items-center flex-col h-screen'>
      <div className='relative w-full h-full'>
        <video
        src={video}
        type="video/mp4"
        loop
        controls={false}
        muted
        autoPlay
        className="w-full h-full object-cover" />
      </div>
      <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
        <div className="p-5">
          <img src={logo} width='300px' alt="logo" />
        </div>
        <div>
          <GoogleLogin 
            clientId=''
            render={(renderProps) => (
              <button
                type="button"
                className="bg-blueColor text-center" width='240px'>
                <FcGoogle className="mr-10" />Sign in with Google
              </button>
            )}
          />
        </div>
      </div>
    </div>
  )
}

export default Login