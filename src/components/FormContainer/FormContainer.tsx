import './styles.css';
import InputsContainer from '../InputsContainer/InputsContainer';
import RulesContainer from '../RulesContainer/RulesContainer';

const FormContainer = () => {
  return (
    <section className='form-container'>
      <InputsContainer />
      <RulesContainer />
    </section>
  )
}

export default FormContainer