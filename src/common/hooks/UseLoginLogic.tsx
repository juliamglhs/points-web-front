import { useState, useEffect } from 'react';

const useLoginLogic = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    const emailRegex = /^[a-zA-Z]+@[a-zA-Z]+\.com$/; 
    const isEmailValid = emailRegex.test(email);
    const isPasswordValid = password.length > 0;

    setIsButtonDisabled(!(isEmailValid && isPasswordValid));
  }, [email, password]);

  return {
    email,
    setEmail,
    password,
    setPassword,
    isButtonDisabled,
    repeatPassword,
    setRepeatPassword,
  };
};

export default useLoginLogic;
