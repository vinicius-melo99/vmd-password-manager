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