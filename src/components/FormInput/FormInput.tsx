import './styles.css';

import { InputProps } from '../../types';

const FormInput = ({ labelText, type, name, value, autoFocus, handleInput }: InputProps) => {
  return (
    <label>
      { (labelText === "Login" || 
        labelText === "Senha" || labelText === "Nome do Serviço") ? 
        <>{labelText}<span className='required'> *</span></> 
        : labelText }
      <div></div>
      <input
        autoFocus={ autoFocus }
        name={ name }
        type={ type }
        onChange={ handleInput }
        value={ value }
      />
    </label>
  )
}

export default FormInput;