import React from 'react'

type Props = {
    id: number,
    name: string,
    type:string,
    placeholder: string,
    label: string,
    required: boolean,
    autoComplete?: string,
    onChange:any,
    errorMessage?:string,
    pattern?:string

    // onChange:React.FormEvent<HTMLFormElement>) => void,
}

const FormInput = (props: Props) => {
    const { label,id,name, errorMessage, onChange,  ...inputProps } = props;

  return (
    <div className='formInput'>
        <label htmlFor={name}>{label}</label>
        <input name={name} id={name} {...inputProps} onChange={onChange}/>
        <span>{errorMessage}</span>
    </div>
  )
}

export default FormInput