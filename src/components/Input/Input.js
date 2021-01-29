import React from "react";
import { Container } from "./Input.styles";

export default function Input({ label, name, type, placeholder, required }) {
  function animateLabel(e) {
    const input = e.target;
    const label = input.parentNode.childNodes[1];

    if (input.value) {
      return label.classList.add("active");
    }

    e.type === "focus" && label.classList.add("active");
    e.type === "blur" && label.classList.remove("active");
  }

  return (
    <Container>
      <input
        onFocus={animateLabel}
        onBlur={animateLabel}
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
      />
      <label htmlFor={name}>{label}</label>
    </Container>
  );
}
