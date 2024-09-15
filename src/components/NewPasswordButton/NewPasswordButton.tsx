import { NewPasswordButtonProps } from '../../types';
import './styles.css';

const NewPasswordButton = ({ handleSetShowForm }: NewPasswordButtonProps) => {
  return (
    <section className='button-container'>
      <button 
        className='new-password-btn'
        onClick={ handleSetShowForm }
      >
        Cadastrar nova senha
      </button>
    </section>
  )
}

export default NewPasswordButton;