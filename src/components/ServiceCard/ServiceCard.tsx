import { ServiceCardProps } from '../../types';
import { IoIosLock } from "react-icons/io";
import './styles.css';

const ServiceCard = ({ service: {
  service,
  login,
  password,
  url
} }: ServiceCardProps) => {
  
  return (
    <div className='service-card'>
      <div className='url-box'>
        <IoIosLock
          color='#9CBCE0'
          size={21}
        />
        <a href={url}>
          {service}
        </a>
      </div>
      <div className='credential-box'>
        <p>{login}</p>
        <p>{password}</p>
      </div>
      <div className='delete-box'>
        lixo
      </div>
    </div>
  )
}

export default ServiceCard;