import { ServiceCardProps } from '../../types';
import { IoIosLock } from "react-icons/io";
import { FaLink, FaLinkSlash } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import { Tooltip } from 'react-tooltip';
import { MouseEvent, useEffect, useState } from 'react';
import './styles.css';

const ServiceCard = ({ service: {
  id,
  service,
  login,
  password,
  url,
},
  showPasswords,
  deleteServiceFromLS }: ServiceCardProps) => {
  const [maskedPassword, setMaskedPassword] = useState('');
  
  useEffect(() => {
    const mask = password.split('')
      .map(() => '*')
      .join('');

    setMaskedPassword(mask);
  }, [maskedPassword]);

  const handleDelete = (e: MouseEvent<HTMLButtonElement>) => {
    const buttonId = e.currentTarget.id;
    deleteServiceFromLS(buttonId);
  }

  return (
    <div className='service-card'>
      <div className='url-box'>
        <IoIosLock
          color='#9CBCE0'
          size={21}
        />
        <a
          data-tooltip-id='link-tooltip'
          data-tooltip-content={
            url ? `Acessar: ${url}` : 'Nenhum link informado'
          }
          href={url}
          target='_blank'
          onClick={(e) => !url && e.preventDefault()}
        >
          <Tooltip
            id='link-tooltip'
            delayHide={100}
            delayShow={100}
          />
          {service}
          {url ? (
            <FaLink
              color='#6D6F77'
            />) : (
            <FaLinkSlash 
              color='#F58989'
            />)}
        </a>
      </div>
      <div className='credential-box'>
        <p className='credential-box-info'>
          <span className='credential'>
            Login
          </span>
          <span>
            {login}
          </span>
        </p>
        <p className='credential-box-info'>
        <span className='credential'>
            Senha
          </span>
          <span>
            {showPasswords ? password : maskedPassword}
          </span>
        </p>
      </div>
      <div className='delete-box'>
        <button
          id={id}
          data-tooltip-id='delete-tooltip'
          data-tooltip-content='Excluir'
          onClick={ handleDelete }
        >
          <Tooltip
            id='delete-tooltip'
            place='bottom'
          />
          <FaTrash
            name={id}
            color='#F58989'
            size={19}
          />
        </button>
      </div>
    </div>
  )
}

export default ServiceCard;