import { ChangeEvent, ReactNode } from 'react'

export type TitleProp = {
  title: string
}

export type ChildrenType = {
  children: ReactNode[]
}

export type InputProps = {
  labelText: string,
  type: string,
  name: string,
  value: string,
  autoFocus: boolean,
  handleInput: (e: ChangeEvent<HTMLInputElement>) => void,
}

export type InputsContainerProps = {
  checkPasswordRules: (password: string) => void,
  handleSetShowForm: () => void,
  addNewService: (service: Service) => void
  allRulesOk: boolean
}

export type RulesContainerProps = {
  minLenghRule: boolean,
  maxLenghRule: boolean ,
  lettersAndNumbersRule: boolean ,
  specialCharRule: boolean
}

export type NewPasswordButtonProps = {
  handleSetShowForm: () => void
}

export type Service = {
  service: string,
  login: string,
  password: string,
  url: string,
}

export type ServicesContainerProps = {
  serviceList: Service[]
}

export type FormContainerProps = {
  addNewService: (service: Service) => void
}

export type ServiceCardProps = {
  service: Service
}