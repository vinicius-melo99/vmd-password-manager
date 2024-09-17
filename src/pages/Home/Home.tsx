import { useState } from 'react'
import FormContainer from '../../components/FormContainer/FormContainer'
import Header from '../../components/Header/Header'
import HomeDivision from '../../components/HomeDivision/HomeDivision'
import { Service } from '../../types'
import ServicesContainer from '../../components/ServicesContainer/ServicesContainer'

const Home = () => {
  const [serviceList, setServiceList] = useState<Service[]>([]);

  const addNewService = (service: Service) => {
    
  }

  return (
    <>
      <Header />
      <FormContainer />
      <HomeDivision />
      <ServicesContainer serviceList={serviceList}/>
    </>
  )
}

export default Home