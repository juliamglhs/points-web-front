import { useState, useEffect } from 'react';

const usePasswordInput = () => {
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const verifyPasswords = () => {
    if (password === repeatPassword && password.length > 0) {
      setIsButtonEnabled(true);
    } else {
      setIsButtonEnabled(false);
    }
  }

  useEffect(() => {
    verifyPasswords();
  }, [password, repeatPassword]);

  return {
    password,
    setPassword,
    isButtonEnabled,
    repeatPassword,
    setRepeatPassword,
  };
};

export default usePasswordInput;