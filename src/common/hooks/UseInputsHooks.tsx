import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useInputsHooks = () => {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    input5: '',
  })
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    const allFilled = Object.values(inputs).every((value) => value);
    setIsButtonDisabled(!allFilled);   
}, [inputs]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setInputs((prevInputs) => ({...prevInputs, [name]: value }));
  };

  const handleButton = () => {
    navigate('/user/signup/confirmation');
}

  return {
    inputs,
    isButtonDisabled,
    handleInputChange,
    handleButton,
  }
}

export default useInputsHooks;
