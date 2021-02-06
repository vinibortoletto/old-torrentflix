import React from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../../../contexts/Data';
import { Button } from './SignInButton.styles';

export default function Header({ signup }) {
  const { language } = useData();

  return (
    <>
      <Link to="/login">
        <Button signup={signup} small>
          {language === 'en' ? 'Sign in' : 'Entrar'}
        </Button>
      </Link>
    </>
  );
}
