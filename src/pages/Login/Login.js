import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../../components/Title/Title.styles';
import { useLibrary } from '../../contexts/Library';
import logo from '../../images/misc/logo.png';
import Form from './Form/Form';
import { Main, Header, Logo, Facebook, Signup } from './Login.styles';

export default function Login() {
  const { language } = useLibrary();

  return (
    <>
      <Header>
        <Link to="/">
          <Logo src={logo} alt="torrentflix logo" />
        </Link>
      </Header>

      <Main>
        <Title>{language === 'en' ? 'Sign in' : 'Entrar'}</Title>
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