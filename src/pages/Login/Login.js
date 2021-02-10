import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Background from '../../components/Background/Background';
import Title from '../../components/Title/Title.styles';
import Header from '../../components/Header/Header';
import { useAuth } from '../../contexts/Auth';
import { useData } from '../../contexts/Data';
import logo from '../../images/misc/logo.png';
import Form from './Form/Form';
import { Facebook, Logo, Main, Signup } from './Login.styles';

export default function Login() {
  const { language } = useData();
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function getWidth() {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', getWidth);
    return () => window.removeEventListener('resize', getWidth);
  }, []);

  return (
    <>
      <Header login />
      {/* <Header>
        <Link to="/">
          <Logo src={logo} alt="torrentflix logo" />
        </Link>
      </Header> */}

      <Main>
        <Title>{language === 'en' ? 'Sign in' : 'Entrar'}</Title>

        {width >= 768 && <Background />}

        <Form />

        <Facebook>
          <img
            src="https://assets.nflxext.com/ffe/siteui/login/images/FB-f-Logo__blue_57.png"
            alt="facebook logo"
          />

          <p>
            {language === 'en'
              ? 'Login with Facebook'
              : 'Conectar com Facebook'}
          </p>
        </Facebook>

        <Signup>
          {language === 'en' ? (
            <p>
              New to Netflix? <Link to="/">Sign up now</Link>.
            </p>
          ) : (
            <p>
              Novo por aqui? <Link to="/">Assine agora</Link>.
            </p>
          )}
        </Signup>

        <hr />
      </Main>
    </>
  );
}
