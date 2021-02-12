import React from 'react';
import Full from './Full/Full';
import Simple from './Simple/Simple';

export default function Header({ landing, signup, login, simple }) {
  return (
    <>
      {simple ? (
        <Simple landing={landing} login={login} signup={signup} />
      ) : (
        <Full />
      )}
    </>
  );
}
