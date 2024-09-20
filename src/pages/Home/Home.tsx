import FormContainer from '../../components/FormContainer/FormContainer'
import Header from '../../components/Header/Header'
import HomeDivision from '../../components/HomeDivision/HomeDivision'
import ServicesContainer from '../../components/ServicesContainer/ServicesContainer'
import { Service } from '../../types'
import { useEffect, useState } from 'react'

const Home = () => {
  const [serviceList, setServiceList] = useState<Service[]>([]);

  useEffect(() => {
    getServiceFromLS();
  }, []);

  const setServiceToLS = (service: Service) => {
    const data = localStorage.getItem('serviceList');

    if(data) {
      const services = JSON.parse(data);
      const updatedServices = [...services, service];

      localStorage.setItem('serviceList', JSON.stringify(updatedServices));
    } else {
      localStorage.setItem('serviceList', JSON.stringify([service]));
    }

    getServiceFromLS();
  }

  const getServiceFromLS = () => {
    const data = localStorage.getItem('serviceList');

    if(data) {
      const services = JSON.parse(data);
      setServiceList([...services]);
    }
  }

  return (
    <>
      <Header />
      <FormContainer setServiceToLS={ setServiceToLS }/>
      <HomeDivision />
      <ServicesContainer serviceList={ serviceList }/>
    </>
  )
}

export default Home