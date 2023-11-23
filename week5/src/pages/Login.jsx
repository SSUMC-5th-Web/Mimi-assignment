import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');

    const [emailValid, setEmailValid] = useState(false); 
    const [pwValid, setPwValid] = useState(false); 
    const [notAllow, setNotAllow] = useState(true);

    const navigate = useNavigate();

    const handleEmail = (e) => {
        setEmail(e.target.value);
        // 자바스크립트 정규 표현식
        const regex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

        if (regex.test(e.target.value)) {
            setEmailValid(true);
        }
        else {
            setEmailValid(false);
        }
    }

    const handlePw = (e) => {
        setPw(e.target.value);
        const regex = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
        
        if (regex.test(e.target.value)) {
            setPwValid(true);
        }
        else {
            setPwValid(false);
        }        
    }

    useEffect(() => {
        if(emailValid && pwValid) {
            setNotAllow(false);
            return;
        }
        setNotAllow(true);
    },[emailValid, pwValid])
    // 위 값이 변할 때마다 중괄호 안에 있는 코드 실행

    const handleLogin = () => {
        if (emailValid && pwValid) {
          navigate('/');
        }
      }

  return (
    <div className='page'>
        <div className='titleWrap'>
            이메일과 비밀번호를
            <br/>
            입력해 주세요
        </div>

        <div className='contentWrap'>
            <div className='inputTitle'>이메일 주소</div>
            <div className='inputWrap'>
                <input
                    type='text'
                    className='input' 
                    placeholder='이메일 형식으로 입력해 주세요.'
                    value={email}
                    // 값을 전달 받아서 변경할 수 있도록
                    onChange={handleEmail}
                    />
            </div>
            <div className='errorMessageWrap'>
                {
                    !emailValid && email.length > 0 && (
                        <div>
                            올바른 이메일을 입력해 주세요.
                        </div>
                    )
                }
            </div>
            <div className='inputTitle'>비번</div>
            <div className='inputWrap'>
                <input 
                    type='password'
                    className='input' 
                    placeholder='영문, 숫자, 특수문자 포함 8자 이상 입력해 주세요.'
                    value={pw}
                    onChange={handlePw}
                    />
            </div>
            <div className='errorMessageWrap'>
                {
                    !pwValid && pw.length > 0 && (
                        <div>
                            영문, 숫자, 특수문자 포함 8자 이상 입력해 주세요.
                        </div>
                    )
                }
            </div>
        </div>

        <div>
            <button onClick={handleLogin} disabled={notAllow} className='bottomBtn'>
                확인
            </button>
        </div>
    </div>
  )
}