import React, { useState, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Input from '../../components/Input/Input';
import { useData } from '../../contexts/Data';
import { Button } from '../../components/Button/Button.styles';
import {} from './Signup.styles';
import { useAuth } from '../../contexts/Auth';

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

  return <div>signup</div>;
}
