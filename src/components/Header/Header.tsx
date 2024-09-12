import Title from '../Title/Title';
import './styles.css';

const Header = () => {
  return (
    <header>
      <Title>
          Gerenciador {' '}
          <span className='blue-asterisk'>
            * {' '}
          </span> 
          de {' '}
          <span className='blue-asterisk'>
            * {' '}
          </span> 
          Senhas
      </Title>
    </header>
  )
}

export default Header;