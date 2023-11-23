import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginControl() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const changeLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className='logInControl'>
      <button className='loginBtn' onClick={changeLogin}>
        {isLoggedIn ? '로그아웃' : '로그인'}
      </button>

      <p className='logInMessage'>
        {isLoggedIn ? '환영합니다!' : '로그인 해 주세요'}
      </p>
    </div>
  );
}