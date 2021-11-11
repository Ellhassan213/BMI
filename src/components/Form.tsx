import React, { FormEventHandler } from 'react'

interface FormProps {
  weight: string,
  height: string,
  setWeight: Function,
  setHeight: Function,
  handleChange: Function,
  handleSubmit: FormEventHandler<HTMLFormElement>
}

const Form = (props: FormProps) => {
  return (
    <form className='form' onSubmit={props.handleSubmit}>
      <input
        className='form-input'
        type='text'
        name='weight'
        value={props.weight}
        onChange={(event) => props.handleChange(event, props.setWeight)}
        placeholder='Weight (kg)'
     />
      <input
        className='form-input'
        type='text'
        name='height'
        value={props.height}
        onChange={(event) => props.handleChange(event, props.setHeight)}
        placeholder='Height (cm)'
     />
      <input
        className='form-submit'
        type='submit'
        value='Submit'
     />
    </form>
  )
}

export default Form
