import React from 'react'
import { Line } from 'react-chartjs-2'

interface LineGraphProps {
  labels: Array<string>,
  values: Array<string>
}

const BmiChart = (props: LineGraphProps) => {
  const data = {
    labels: props.labels,
    datasets: [
      {
        data: props.values,
        label: 'BMI Dataset',
        backgroundColor: '3F51B5',
        borderColor: '#3F51B5',
        pointRadius: 6,
        pointHoverRadius: 8,
        pointHoverBorderColor: 'white',
        pointHoverBorderWidth: 2
      }
    ]
  }

  return (
    <div className='chart'>
      <Line
        data={data}
      />
    </div>
  )
}

export default BmiChart
