import './styles.css';
import InputsContainer from '../InputsContainer/InputsContainer';
import RulesContainer from '../RulesContainer/RulesContainer';
import { useEffect, useState } from 'react';

const FormContainer = () => {
  const [minLenghRule, setMinLenghRule] = useState(false);
  const [maxLenghRule, setMaxLenghRule] = useState(true);
  const [lettersAndNumbersRule, setLettersAndNumbersRule] = useState(false);
  const [specialCharRule, setSpecialCharRule] = useState(false);
  const [allRulesOk, setAllRulesOk] = useState(false);

  useEffect(() => {
    checkRules();
  })

  const checkPasswordRules = (password: string) => { 
    const regex1 = new RegExp(/^(?=.*[a-zA-Z])(?=.*\d).+$/);
    const regex2 = new RegExp(/[!@#$%^&*(),.?":{}|<>]/);

    setMinLenghRule(password.length >= 8);
    setMaxLenghRule(password.length <= 16);
    setLettersAndNumbersRule(regex1.test(password));
    setSpecialCharRule(regex2.test(password));
  }

  const checkRules = () => {
    const check = (minLenghRule && 
      maxLenghRule && lettersAndNumbersRule && specialCharRule);
      setAllRulesOk(check);
  }

  return (
    <section className='form-container'>
      <InputsContainer 
        checkPasswordRules={ checkPasswordRules }
        allRulesOk={ allRulesOk }
      />
      <RulesContainer
        minLenghRule={ minLenghRule }
        maxLenghRule={ maxLenghRule }
        lettersAndNumbersRule={ lettersAndNumbersRule }
        specialCharRule={ specialCharRule }
      />
    </section>
  )
}

export default FormContainer