import { useState, ChangeEvent, FormEvent } from 'react';

function useNewsletterForm() {
  const [email, setEmail] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);

  const correctEmailFormat = (email: string) => {
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (regexEmail.test(email)) {
      setIsEnabled(true);
    } else {
      setIsEnabled(false);
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    correctEmailFormat(event.target.value);
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const requestBody = {
      data:  email,
      type: '0',
    };

    fetch('ms-newsletter/api/v1/', {
      method: 'POST',
      body: JSON.stringify(requestBody),
    })
    .then((response) => {
      if (response.ok) {
        console.log('Email cadastrado com sucesso!');
      } else {
        console.error('Erro ao cadastrar o email.');
      }
    })
    .catch((error) => {
      console.error('Erro ao cadastrar o email:', error);
    })
  }

  return {
    email,
    isEnabled,
    handleChange,
    handleSubmit,
  };
}

export default useNewsletterForm;