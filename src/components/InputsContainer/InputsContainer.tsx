import './styles.css';
import FormInput from '../FormInput/FormInput';
import { ChangeEvent, FormEvent, useState } from 'react';
import { InputsContainerProps } from '../../types';

const InputsContainer = ({ 
    checkPasswordRules,
    allRulesOk,
    handleSetShowForm,
  }: InputsContainerProps) => {
  const [service, setService] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit= (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  const handleInput = ({ target: { value, name } }: ChangeEvent<HTMLInputElement>) => {
    switch (name) {
      case 'service-input':
        setService(value);
        break;

      case 'login-input':
        setLogin(value);
        break;
    
      case 'password-input':
        setPassword(value);
        checkPasswordRules(value);
        break;

      case 'url-input':
        setUrl(value);
        break;

      default:
        break;
    }
  }

  return (
    <div className='inputs-container'>
      <form onSubmit={ handleSubmit }>
        <FormInput
          labelText='Nome do Serviço' 
          type='text' 
          name='service-input'
          handleInput={ handleInput }
          value={ service }
          autoFocus={ true }
        />
        <div className='login-password-wrapper'>
          <FormInput 
            labelText='Login' 
            type='text' 
            name='login-input'
            handleInput={ handleInput }
            value={ login }
            autoFocus={ false }
          />
          <FormInput 
            labelText='Senha' 
            type='password' 
            name='password-input'
            handleInput={ handleInput }
            value={ password }
            autoFocus={ false }
          />
        </div>
        <FormInput 
          labelText='URL' 
          type='text' 
          name='url-input'
          handleInput={ handleInput }
          value={ url }
          autoFocus={ false }
        />
        <div className='required-wrapper'>
          <span>
            <span className='required'>*</span>
            {' '}
            Campos obrigatórios
          </span>
        </div>
        <div className='buttons-wrapper'>
          <button 
            className='cancel-button'
            onClick={ handleSetShowForm }
          >
            Cancelar
          </button>
          <button 
            className='submit-button'
            disabled={!(service && login && password && allRulesOk)}
          >
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  )
}

export default InputsContainer;