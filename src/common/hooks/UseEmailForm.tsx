import { useState } from 'react';

function useEmailForm() {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    setIsValid(emailRegex.test(inputEmail));
  };

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   alert(`E-mail enviado: ${email}`);
  // }

  return {
    email,
    isValid,
    handleChange,
    // handleSubmit,
  }
}

export default useEmailForm;
