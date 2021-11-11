import React, { useState, ChangeEvent, SyntheticEvent } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import BmiChart from './components/BmiChart'

interface IData {
  labels: string[],
  values: string[]
}

const App = () => {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [data, setData] = useState<IData>({
    labels: [],
    values: []
  })

  const calculateBMI = (weightKg: number, heightCm: number) => {
    const heightM = heightCm / 100
    const bmi = (weightKg / (heightM * heightM)).toFixed(2)
    return bmi
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>, setInput: Function) => {
    const { value } = event.target
    setInput(value)
  }

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault()
    const bmi = calculateBMI(Number(weight), Number(height))
    const nextLabel = 'Input ' + ((data.labels).length + 1)
    setData({
      labels: [...data.labels, nextLabel],
      values: [...data.values, bmi]
    })
  }

  return (
    <div>
      <Header />
      <Form
        weight={weight}
        height={height}
        setWeight={setWeight}
        setHeight={setHeight}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <BmiChart
        labels={data.labels}
        values={data.values}
      />
    </div>
  )
}

export default App
