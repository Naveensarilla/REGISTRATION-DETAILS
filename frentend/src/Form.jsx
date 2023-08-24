import { useState } from 'react'
import { FormInputs } from './FormInputs'
export const Form = () => {
    const [values, setValues] = useState({
        CandidateName: '',
        DataOfBirth: '',
        //Gender: '',
        //Category: '',
        EmailId: '',
        ConfirmEmailId: '',
        password: '',
        Confirmpassword: '',
        // FathersName: '',
        // Occupation: '',
        // MobileNo: '',
        // Addres: '',
        // CityTown: '',
        // State: '',
        // Distric: '',
        // PinCode: '',
        // Session: '',
        // Center: '',
        // Course: '',
        // batchtype: '',
        // Exam: '',
        // Stream1: '',
        // batch: '',
        // Qualification: '',
        // Stream2: '',
        // NameOfCallage: '',
        // Passingyear: '',
        // MarksIn: '',
        // UplodadPhto: '',
        // Signature: '',
        // Proof: '',
        // ReadTerms: ''
    })

    const inputs = [
        {
            id:1,
            name:'CandidateName',
            type:'text',
            placeholder: 'Candidate Name',
            errorMassage: 'UserName Shold be 3-16 charactors and ',
            label: ' Name',
            pattern: '^[A-Za-z0-9]{3,16}$',
    
            required: true,
        },
        {
            id:2,
            name:'DataOfBirth',
            type:'date',
            placeholder: '',
            label: 'Data Of Birth'
        },
        // {
        //     id:3,
        //     name:'Gender',
        //     type:'radio',
        //     placeholder: '',
        //     label: 'Gender'
        // },
        // {
        //     // id:4,
        //      name:'CandidateName',
        //     // type:'text',
        //     // placeholder: 'Candidate Name',
        //     // label: 'Candidate Name'
        // },
        {
            id:5,
            name:'EmailId',
            type:'Email',
            placeholder: 'Candidate Email Id',
            errorMassage: 'UserName Shold be 3-16 charactors and ',

            label: 'Candidate Email Id',
            required: true
        },
        {
            id:6,
            name:'ConfirmEmailId',
            type:'email',
            placeholder: 'Candidate Confirm Email Id',
            errorMassage: 'UserName Shold be 3-16 charactors and ',

            label: 'Candidate Confirm Email Id',
            required: true
        },
        {
            id:7,
            name:'password',
            type:'number',
            placeholder: 'password ',
            errorMassage: 'UserName Shold be 3-16 charactors and ',

            label: 'Contact No',
            required: true
        },
        {
            id:8,
            name:'comf',
            type:'password',
            placeholder: 'Confirm password',
            errorMassage: 'UserName Shold be 3-16 charactors and ',

            label: 'Candidate Name',
            required: true
        },
        // {
        //     id:9,
        //     name:'CandidateName',
        //     type:'text',
        //     placeholder: 'Candidate Name',
        //     label: 'Candidate Name'
        // },
        // {
        //     id:10,
        //     name:'CandidateName',
        //     type:'text',
        //     placeholder: 'Candidate Name',
        //     label: 'Candidate Name'
        // },
        // {
        //     id:11,
        //     name:'CandidateName',
        //     type:'text',
        //     placeholder: 'Candidate Name',
        //     label: 'Candidate Name'
        // },
        // {
        //     id:12,
        //     name:'CandidateName',
        //     type:'text',
        //     placeholder: 'Candidate Name',
        //     label: 'Candidate Name'
        // },
        // {
        //     id:13,
        //     name:'CandidateName',
        //     type:'text',
        //     placeholder: 'Candidate Name',
        //     label: 'Candidate Name'
        // },
        // {
        //     id:14,
        //     name:'CandidateName',
        //     type:'text',
        //     placeholder: 'Candidate Name',
        //     label: 'Candidate Name'
        // },
        // {
        //     id:15,
        //     name:'CandidateName',
        //     type:'text',
        //     placeholder: 'Candidate Name',
        //     label: 'Candidate Name'
        // },
        // {
        //     id:16,
        //     name:'CandidateName',
        //     type:'text',
        //     placeholder: 'Candidate Name',
        //     label: 'Candidate Name'
        // },
        // {
        //     id:17,
        //     name:'CandidateName',
        //     type:'text',
        //     placeholder: 'Candidate Name',
        //     label: 'Candidate Name'
        // },
        // {
        //     id:18,
        //     name:'CandidateName',
        //     type:'text',
        //     placeholder: 'Candidate Name',
        //     label: 'Candidate Name'
        // },
        // {
        //     id:19,
        //     name:'CandidateName',
        //     type:'text',
        //     placeholder: 'Candidate Name',
        //     label: 'Candidate Name'
        // },
        // {
        //     id:20,
        //     name:'CandidateName',
        //     type:'text',
        //     placeholder: 'Candidate Name',
        //     label: 'Candidate Name'
        // },
        // {
        //     id:21,
        //     name:'CandidateName',
        //     type:'text',
        //     placeholder: 'Candidate Name',
        //     label: 'Candidate Name'
        // },
        // {
        //     id:22,
        //     name:'CandidateName',
        //     type:'text',
        //     placeholder: 'Candidate Name',
        //     label: 'Candidate Name'
        // },
        // {
        //     id:23,
        //     name:'CandidateName',
        //     type:'text',
        //     placeholder: 'Candidate Name',
        //     label: 'Candidate Name'
        // },
        // {
        //     id:24,
        //     name:'CandidateName',
        //     type:'text',
        //     placeholder: 'Candidate Name',
        //     label: 'Candidate Name'
        // },

    ]

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

  console.log(values);
  return (
    <div>
        <form onSubmit={handleSubmit}>
            {inputs.map((input) => ( <FormInputs key={input.id} {...input} value={values[input.name]} onChange={onChange} />
            ))}
           
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
