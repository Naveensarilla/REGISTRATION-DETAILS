import React, { useState } from 'react'
import { FormInputs } from './FormInputs'
export const Form = () => {
    const [value, setValues] = useState({
        CandidateName: '',
        DataOfBirth: '',
        Gender: '',
        Category: '',
        EmailId: '',
        ConfirmEmailId: '',
        ContactNo: '',
        Handicapped: '',
        FathersName: '',
        Occupation: '',
        MobileNo: '',
        Addres: '',
        CityTown: '',
        State: '',
        Distric: '',
        PinCode: '',
        Session: '',
        Center: '',
        Course: '',
        batchtype: '',
        Exam: '',
        Stream1: '',
        batch: '',
        Qualification: '',
        Stream2: '',
        NameOfCallage: '',
        Passingyear: '',
        MarksIn: '',
        UplodadPhto: '',
        Signature: '',
        Proof: '',
        ReadTerms: ''
    })

    const inputs = [
        {
            id:1,
            name:'CandidateName',
            type:'text',
            placeholder: 'Candidate Name',
            label: 'Candidate Name'
        },
        {
            id:2,
            name:'DataOfBirth',
            type:'date',
            placeholder: '',
            label: 'Data Of Birth'
        },
        {
            id:3,
            name:'Gender',
            type:'radio',
            placeholder: '',
            label: 'Gender'
        },
        {
            // id:4,
             name:'CandidateName',
            // type:'text',
            // placeholder: 'Candidate Name',
            // label: 'Candidate Name'
        },
        {
            id:5,
            name:'EmailId',
            type:'Email',
            placeholder: 'Candidate Email Id',
            label: 'Candidate Email Id'
        },
        {
            id:6,
            name:'ConfirmEmailId',
            type:'email',
            placeholder: 'Candidate Confirm Email Id',
            label: 'Candidate Confirm Email Id'
        },
        {
            id:7,
            name:'ContactNo',
            type:'number',
            placeholder: 'Contact No ',
            label: 'Contact No'
        },
        {
            id:8,
            name:'CandidateName',
            type:'text',
            placeholder: 'Candidate Name',
            label: 'Candidate Name'
        },
        {
            id:1,
            name:'CandidateName',
            type:'text',
            placeholder: 'Candidate Name',
            label: 'Candidate Name'
        },
        {
            id:1,
            name:'CandidateName',
            type:'text',
            placeholder: 'Candidate Name',
            label: 'Candidate Name'
        },
        {
            id:1,
            name:'CandidateName',
            type:'text',
            placeholder: 'Candidate Name',
            label: 'Candidate Name'
        },
        {
            id:1,
            name:'CandidateName',
            type:'text',
            placeholder: 'Candidate Name',
            label: 'Candidate Name'
        },
        {
            id:1,
            name:'CandidateName',
            type:'text',
            placeholder: 'Candidate Name',
            label: 'Candidate Name'
        },
        {
            id:1,
            name:'CandidateName',
            type:'text',
            placeholder: 'Candidate Name',
            label: 'Candidate Name'
        },
        {
            id:1,
            name:'CandidateName',
            type:'text',
            placeholder: 'Candidate Name',
            label: 'Candidate Name'
        },
        {
            id:1,
            name:'CandidateName',
            type:'text',
            placeholder: 'Candidate Name',
            label: 'Candidate Name'
        },
        {
            id:1,
            name:'CandidateName',
            type:'text',
            placeholder: 'Candidate Name',
            label: 'Candidate Name'
        },
        {
            id:1,
            name:'CandidateName',
            type:'text',
            placeholder: 'Candidate Name',
            label: 'Candidate Name'
        },
        {
            id:1,
            name:'CandidateName',
            type:'text',
            placeholder: 'Candidate Name',
            label: 'Candidate Name'
        },
        {
            id:1,
            name:'CandidateName',
            type:'text',
            placeholder: 'Candidate Name',
            label: 'Candidate Name'
        },
        {
            id:1,
            name:'CandidateName',
            type:'text',
            placeholder: 'Candidate Name',
            label: 'Candidate Name'
        },
        {
            id:1,
            name:'CandidateName',
            type:'text',
            placeholder: 'Candidate Name',
            label: 'Candidate Name'
        },
        {
            id:1,
            name:'CandidateName',
            type:'text',
            placeholder: 'Candidate Name',
            label: 'Candidate Name'
        },
        {
            id:1,
            name:'CandidateName',
            type:'text',
            placeholder: 'Candidate Name',
            label: 'Candidate Name'
        },

    ]

    const handleSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <div>
        <form>
            <FormInputs/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
