import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { ErrorMessage } from '../../components/ErrorMessage/ErrorMessage.styles';
import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input';
import Loading from '../../components/Loading/Loading';
import { useAuth } from '../../contexts/Auth';
import { useData } from '../../contexts/Data';
import devicesImg from '../../images/misc/devices.png';
import { Button, Devices, Main, Text } from './Signup.styles';

export default function Signup() {
  const { signup, getEmailFromLocalStorage, loading, setLoading } = useAuth();

  const match = useRouteMatch();
  const history = useHistory();
  const { language } = useData();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [passwordError, setPasswordError] = useState('');
  const [error, setError] = useState('');

  function validatePassword() {
    const inputPassword = passwordRef.current;

    if (inputPassword.value.length < 6) {
      setPasswordError('Password should have at least 6 characters');
      inputPassword.classList.add('error');
    } else {
      setPasswordError('');
      inputPassword.classList.remove('error');
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const btnElmt = document.getElementById('button-submit');

    try {
      setError('');
      setLoading(true);
      btnElmt.setAttribute('disabled', '');
      await signup(email, password);

      setTimeout(() => {
        localStorage.removeItem('email');
        history.push('/browse');
      }, 2000);
    } catch (err) {
      if (language === 'en') setError(err.message);
      if (language === 'br' && err.code === 'auth/email-already-in-use')
        setError('Este email já está sendo usado por outra conta');
    } finally {
      setLoading(false);
      btnElmt.removeAttribute('disabled');
    }
  }

  useEffect(() => {
    getEmailFromLocalStorage();
  }, []);

  return (
    <>
      <Header signup simple />

      <Main>
        <div className="content-wrapper">
          <Devices
            src={devicesImg}
            alt="drawing of a laptop, monitor, tablet and mobile phone"
          />
          <Text>
            <h1>Create a password to start your membership</h1>
            <h2>
              Just a few more steps and you&apos;re done! We hate paperwork,
              too.
            </h2>
          </Text>

          <form onSubmit={handleSubmit}>
            {error && <ErrorMessage>{error}</ErrorMessage>}

            <Input
              className="input-wrapper"
              label="Email"
              name="email"
              id="email"
              type="email"
              required
              inputRef={emailRef}
            />
            <Input
              className="input-wrapper"
              label={language === 'en' ? 'Password' : 'Senha'}
              name="password"
              id="password"
              type="password"
              required
              inputRef={passwordRef}
              onChange={useCallback(validatePassword)}
            />

            <div className="password-error">
              <p>{passwordError}</p>
            </div>

            <Button id="button-submit" big type="submit">
              {loading ? <Loading /> : 'CONTINUE'}
            </Button>
          </form>
        </div>
      </Main>
    </>
  );
}
