import React, { useState, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Input from '../../../components/Input/Input';
import { useData } from '../../../contexts/Data';
import { Button } from '../../../components/Button/Button.styles';
import { Form, Helper, ErrorMessage } from './Form.styles';
import { useAuth } from '../../../contexts/Auth';

export default function Login() {
  const { language } = useData();

  const { currentUser, login } = useAuth();
  const history = useHistory();
  const [error, setError] = useState('');

  const emailRef = useRef();
  const passwordRef = useRef();

  async function loginToWebsite(e) {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      setError('');
      // add loading ?
      await login(email, password);
      history.push('/');
    } catch (err) {
      // const errorCode =
      setError('Failed to log in.');
      console.log(JSON.parse(err.message));
    }
  }

  return (
    <Form onSubmit={loginToWebsite}>
      {error && <ErrorMessage className="error-message">{error}</ErrorMessage>}

      <Input
        className="input-wrapper"
        dark
        label="Email"
        name="email"
        id="email"
        type="email"
        required
        inputRef={emailRef}
      />
      <Input
        className="input-wrapper"
        dark
        label={language === 'en' ? 'Password' : 'Senha'}
        name="password"
        id="password"
        type="password"
        required
        inputRef={passwordRef}
      />
      <Button id="button-submit" big type="submit">
        {language === 'en' ? 'Sign in' : 'Entrar'}
      </Button>

      <Helper>
        <div className="remember-login">
          <label htmlFor="rememberLogin">
            <input name="rememberLogin" id="rememberLogin" type="checkbox" />
            {language === 'en' ? 'Remeber me' : 'Lembrar-se de mim'}
          </label>
        </div>

        <div className="need-help">
          <Link to="/login-help">
            {language === 'en' ? 'Need help?' : 'Precisa de ajuda?'}
          </Link>
        </div>
      </Helper>
    </Form>
  );
}
