export interface ICurrency {
  label: string,
  id: number,
}

export interface ICurrencyDynamic {
  date: string,
  rate: number
}

export interface ICurrenciesDynamics {
  [key: number]: ICurrencyDynamic[]
}
