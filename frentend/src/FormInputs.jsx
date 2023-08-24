import { useState } from 'react';
import './FormInputs.css'

export const FormInputs = (props) => {
  const [focused, setFocused] = useState(false);
  const handleFocus =(e) => {
    setFocused(true);
  }

  const {label,errorMassage, onChange, id, ...inputProps} = props;
  return (
    <div>
        <label htmlFor="">{label}</label>
        <input {...inputProps} onChange={onChange} onBlur={handleFocus} focused={focused.toString()}/>
        <span >{errorMassage}</span>

    </div>
  )
}
