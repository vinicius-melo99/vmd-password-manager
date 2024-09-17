import { InputProps } from '../../types';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import { Tooltip } from 'react-tooltip';
import { useRef, useState } from 'react';
import './styles.css';


const FormInput = ({ 
  labelText, 
  type, 
  name, 
  value, 
  autoFocus, 
  handleInput,
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const serviceInputRef = useRef(null);
  
  return (
    <label>
      { (labelText === "Login" || 
        labelText === "Senha" || labelText === "Nome do Serviço") ? 
        <>{labelText}<span className='required'> *</span></> 
        : labelText }
      <div className='input-wrapper'>
        <input
          id={ name === 'password-input' ? 'password-input': undefined }
          autoFocus={ autoFocus }
          name={ name }
          type={ (name === 'password-input' && showPassword) ? 'text' : type }
          onChange={ handleInput }
          value={ value }
          ref={ name === 'service-input' ? serviceInputRef : null }
        />
        
        {name === 'password-input' && (
          <button
            type='button'
            data-tooltip-id='eye-button-tooltip'
            data-tooltip-content={ showPassword ? 'Esconder Senha' : 'Mostrar Senha'}
            onClick={ () => setShowPassword(!showPassword) }
          >
          <Tooltip 
            id='eye-button-tooltip' 
            place='bottom'
          />
          { name === 'password-input' && ( !showPassword ? (
            <IoEye
              size={23}
              color='#1E2029'
            />) :
            <IoEyeOff 
              size={23}
              color='#1E2029'
            />
           )}
        </button>) }
      </div>
    </label>
  )
}

export default FormInput;