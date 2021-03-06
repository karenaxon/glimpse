import React from 'react';
import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import video from '../assets/bg-video.mp4';
import logo from '../assets/logo-transparent.png';
import { client } from '../client';

const Login = () => {
  const navigate = useNavigate();
  
  const responseGoogle=(response) => {
    localStorage.setItem('user', JSON.stringify(response.profileObj));
    const {name, googleId, imageUrl } = response.profileObj;
    const doc = {
      _id: googleId,
      _type: 'user',
      userName: name,
      image: imageUrl
    };
    console.log(response.profileObj);
    client.createIfNotExists(doc).then(() => {
      navigate('/', {replace: true});
    })
  };

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
        <div className='items-center'>
          <GoogleLogin 
            clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}
            render={(renderProps) => (
              <button
                type="button"
                className="bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
                onClick={renderProps.onClick} 
                disabled={renderProps.disabled}
                >
                <FcGoogle className="mr-2" />
                <p id="google-signIn-text">Sign in with Google</p>
              </button>
            )}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            Policy="single-host-origin"
          />
        </div>
      </div>
    </div>
  )
}

export default Login