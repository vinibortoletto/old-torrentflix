import React, { useState, useEffect, useCallback } from 'react';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { Container, PasswordButton } from './Input.styles';

export default function Input({
  label,
  name,
  id,
  type,
  required,
  dark,
  className,
  inputRef,
  value,
  onChange,
}) {
  const [showPassword, setShowPassword] = useState(false);

  function togglePassword(e) {
    const inputElmt = e.target.previousSibling.previousSibling;

    if (inputElmt.type === 'password') inputElmt.type = 'text';
    else inputElmt.type = 'password';

    setShowPassword(!showPassword);
  }

  function animateLabel(e) {
    const inputElmt = e.target;
    const labelElmt = inputElmt.parentNode.childNodes[1];

    if (inputElmt.value) {
      labelElmt.classList.add('active');
    } else {
      if (e.type === 'focus') labelElmt.classList.add('active');
      if (e.type === 'blur') labelElmt.classList.remove('active');
    }
  }

  return (
    <Container dark={dark} className={className}>
      <input
        onFocus={animateLabel}
        onBlur={animateLabel}
        type={type}
        name={name}
        id={id}
        required={required}
        ref={inputRef}
        value={value}
        onChange={onChange}
      />
      <label htmlFor={name}>{label}</label>
      {type === 'password' && (
        <PasswordButton onClick={useCallback(togglePassword)} type="button">
          {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
        </PasswordButton>
      )}
    </Container>
  );
}
