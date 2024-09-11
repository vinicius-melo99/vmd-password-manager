import Title from '../Title';
import './styles.css';

const index = () => {
  return (
    <header>
      <Title>
        <h1>
          Gerenciador {' '}
          <span className='blue-asterisk'>
            * {' '}
          </span> 
          de {' '}
          <span className='blue-asterisk'>
            * {' '}
          </span> 
          Senhas
        </h1>
      </Title>
    </header>
  )
}

export default index