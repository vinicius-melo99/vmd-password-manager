import './styles.css';

const RulesContainer = () => {
  return (
    <div className='rules-container'>
      <div className='rules'>
        <div className='arrow-left'></div>
        <ul>
          <li>Possui mais que 8 caracteres</li>
          <li>Possui letras e números</li>
          <li>Possui algum caractere especial</li>
          <li>Possui menos que 16 caracteres</li>
        </ul>
      </div>
    </div>
  )
}

export default RulesContainer