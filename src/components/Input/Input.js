import React from 'react';
import { Container } from './Input.styles';

export default function Input({
  label,
  name,
  type,
  required,
  dark,
  className,
}) {
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
        required={required}
      />
      <label htmlFor={name}>{label}</label>
    </Container>
  );
}
