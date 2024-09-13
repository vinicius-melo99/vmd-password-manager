import './styles.css';
import { RulesContainerProps } from '../../types';

const RulesContainer = (
  { minLenghRule, 
    maxLenghRule, 
    lettersAndNumbersRule, 
    specialCharRule }: RulesContainerProps) => {
  return (
    <div className='rules-container'>
      <div className='rules'>
        <div className='arrow-left'></div>
        <ul>
          <li style={{ color: minLenghRule ? '#AEFFB6' : '#F58989' }}>
            Possui mais que 8 caracteres
          </li>
          <li style={{ color: lettersAndNumbersRule ? '#AEFFB6' : '#F58989' }}>
            Possui letras e números
          </li>
          <li style={{ color: specialCharRule ? '#AEFFB6' : '#F58989' }}>
            Possui algum caractere especial
          </li>
          <li style={{ color: maxLenghRule ? '#AEFFB6' : '#F58989' }}>
            Possui menos que 16 caracteres
          </li>
        </ul>
      </div>
    </div>
  )
}

export default RulesContainer