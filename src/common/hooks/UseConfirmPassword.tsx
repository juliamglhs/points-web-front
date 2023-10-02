import { useState, useEffect } from 'react';

const useLoginLogic = () => {

  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    const isPasswordNotValid = password.length === 0 || repeatPassword.length === 0 || password !== repeatPassword;
    console.log('Componente está renderizando');
    setIsButtonDisabled(isPasswordNotValid);
  }, [password, repeatPassword]);

  return {
    password,
    setPassword,
    isButtonDisabled,
    repeatPassword,
    setRepeatPassword,
  };
};

export default useLoginLogic;