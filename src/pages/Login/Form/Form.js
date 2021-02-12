import React, { useState, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Input from '../../../components/Input/Input';
import { useData } from '../../../contexts/Data';
import { Button } from '../../../components/Button/Button.styles';
import { Form, Helper } from './Form.styles';
import { useAuth } from '../../../contexts/Auth';
import Loading from '../../../components/Loading/Loading';
import { ErrorMessage } from '../../../components/ErrorMessage/ErrorMessage.styles';

export default function Login() {
  const { language, data } = useData();

  const { currentUser, login, loading, setLoading } = useAuth();
  const history = useHistory();
  const [error, setError] = useState('');

  const emailRef = useRef();
  const passwordRef = useRef();

  async function loginToWebsite(e) {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const btnElmt = document.getElementById('button-submit');

    try {
      setError('');
      setLoading(true);
      btnElmt.setAttribute('disabled', '');
      await login(email, password);

      setTimeout(() => {
        localStorage.removeItem('email');
        history.push('/browse');
      }, 2000);
    } catch (err) {
      if (err.code.includes('user-not-found')) setError(data.error.email);
      if (err.code.includes('wrong-password')) setError(data.error.password);
    } finally {
      setLoading(false);
      btnElmt.removeAttribute('disabled');
    }
  }

  return (
    <Form onSubmit={loginToWebsite}>
      {error && <ErrorMessage>{error}</ErrorMessage>}

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
        {loading && <Loading />}
        {language === 'en' && !loading && 'Sign in'}
        {language === 'br' && !loading && 'Entrar'}
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
