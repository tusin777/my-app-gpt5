// src/components/AccessibilityComponents.jsx
import { useId } from "react";

export default function AccessibilityComponents() {
  const nameId = useId();
  const emailId = useId();
  const hintId = useId();

  return (
    <>
      <label htmlFor={nameId}>Имя</label>
      <input id={nameId} type="text" aria-describedby={hintId} />

      <label htmlFor={emailId}>Email</label>
      <input id={emailId} type="email" aria-describedby={hintId} />

      <p id={hintId} role="alert">
        Пожалуйста, заполните оба поля
      </p>
    </>
  );
}
