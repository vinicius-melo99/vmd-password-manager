import './styles.css';
import InputsContainer from '../InputsContainer/InputsContainer';
import RulesContainer from '../RulesContainer/RulesContainer';
import { useEffect, useState } from 'react';
import NewPasswordButton from '../NewPasswordButton/NewPasswordButton';
import { FormContainerProps } from '../../types';

const FormContainer = ({ setServiceToLS }: FormContainerProps) => {
  const [minLenghtRule, setMinLenghtRule] = useState(false);
  const [maxLenghtRule, setMaxLenghtRule] = useState(true);
  const [lettersAndNumbersRule, setLettersAndNumbersRule] = useState(false);
  const [specialCharRule, setSpecialCharRule] = useState(false);
  const [allRulesOk, setAllRulesOk] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    checkRules();
  })

  const checkPasswordRules = (password: string) => { 
    const regex1 = new RegExp(/^(?=.*[a-zA-Z])(?=.*\d).+$/);
    const regex2 = new RegExp(/[!@#$%^&*(),.?":{}|<>]/);

    setMinLenghtRule(password.length >= 8);
    setMaxLenghtRule(password.length <= 16);
    setLettersAndNumbersRule(regex1.test(password));
    setSpecialCharRule(regex2.test(password));
  }

  const checkRules = () => {
    const check = (minLenghtRule && 
      maxLenghtRule && lettersAndNumbersRule && specialCharRule);
      setAllRulesOk(check);
  }

  const resetRules = () => {
    setMinLenghtRule(false);
    setMaxLenghtRule(true);
    setLettersAndNumbersRule(false);
    setSpecialCharRule(false);
  }

  const handleSetShowForm = () => {
    resetRules();
    setShowForm(!showForm)
  };

  return showForm ? (
    <section className='form-container'>
      <InputsContainer 
        checkPasswordRules={ checkPasswordRules }
        handleSetShowForm={ handleSetShowForm }
        allRulesOk={ allRulesOk }
        setServiceToLS={ setServiceToLS }
      />
      <RulesContainer
        minLenghRule={ minLenghtRule }
        maxLenghRule={ maxLenghtRule }
        lettersAndNumbersRule={ lettersAndNumbersRule }
        specialCharRule={ specialCharRule }
      />
    </section>
  ) : <NewPasswordButton 
        handleSetShowForm={ handleSetShowForm }
      />
}

export default FormContainer