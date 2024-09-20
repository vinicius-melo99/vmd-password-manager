import { useState } from 'react';
import { IoIosUnlock } from 'react-icons/io';
import ServiceCard from '../ServiceCard/ServiceCard';
import './styles.css';
import { ServicesContainerProps } from '../../types';

const ServicesContainer = ({ serviceList }: ServicesContainerProps) => {
  const [showPasswords, setShowPasswords] = useState(false);

  const handleToggleButton = () => setShowPasswords(!showPasswords);
  
  return (
    <section className='services-container'>
      <div className='services-container-wrapper'>
          <div className='toggle-container'>
            <label
              className='toggle-label'
              style={{
                color: !serviceList.length ? '#838383' : '',
                cursor: !serviceList.length ? 'not-allowed' : ''
              }}
            >
              Mostrar senhas
              <button
                className='toggle-button'
                onClick={ handleToggleButton }
                style={{ 
                  backgroundColor: showPasswords ? '#3590F5' : '#FFF',
                }}
                disabled={ !serviceList.length }
              >
                <div 
                  className='circle'
                  style={{ 
                    transform: showPasswords ? 'translateX(29px)' : 'translateX(0px)',
                    backgroundColor: showPasswords ? '#FFF' : '#3590F5',
                  }}
                />
              </button>
            </label>
          </div>

          <div 
            className='service-list'
            style={ { display: !serviceList.length ? 
              'flex' : 'grid'
            } }
          >
            { !serviceList.length ? (
              <div className='no-service'>
                <p>Não há nenhuma senha cadastrada...</p>
                <IoIosUnlock color='#838383' size={30}/>
              </div>) : serviceList.map((service, index) => (
                <ServiceCard
                  key={index}
                  service={service}
                  showPasswords={showPasswords}
                />
              ))}
          </div>

        </div>
    </section>
  )
}

export default ServicesContainer;