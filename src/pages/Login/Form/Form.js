import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../../../components/Input/Input';
import { useLibrary } from '../../../contexts/Library';
import { Button } from '../../../components/Button/Button.styles';
import { Form, Helper } from './Form.styles';

export default function Login() {
  const { language } = useLibrary();

  return (
    <Form>
      <Input
        className="input-wrapper"
        dark
        label="Email"
        name="email"
        type="email"
        required
      />
      <Input
        className="input-wrapper"
        dark
        label={language === 'en' ? 'Password' : 'Senha'}
        name="password"
        type="password"
        required
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
