import React, { useState } from 'react';
import './PatientInfoForm.css'; // Import CSS file for styling

function PatientInfoForm() {
  const [patientInfo, setPatientInfo] = useState({
    name: '',
    age: '',
    gender: '',
    address: '',
    blood_group: '',
    problem: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setPatientInfo(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Submitted Data: ', patientInfo);
    setPatientInfo({
      name: '',
      age: '',
      gender: '',
      weight: '',
      blood_group: '',
      problem: '',
    });
  };

  return (
    <div className='form-container'>
      <h2>Patient Information Form</h2>
      <form onSubmit={handleSubmit} className='form'>
        <div className='form-group'>
          <label>Name:</label>
          <input
            type='text'
            name='name'
            value={patientInfo.name}
            onChange={handleChange}
            className='form-control'
          />
        </div>
        <div className='form-group'>
          <label>Age:</label>
          <input
            type='number'
            name='age'
            value={patientInfo.age}
            onChange={handleChange}
            className='form-control'
          />
        </div>
        <div className='form-group'>
          <label>Gender:</label>
          <select
            name='gender'
            value={patientInfo.gender}
            onChange={handleChange}
            className='form-control'
          >
            <option value=''>Select</option>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
            <option value='other'>Other</option>
          </select>
        </div>
        <div className='form-group'>
          <label>Weight:</label>
          <input
            type='number'
            name='Weight'
            value={patientInfo.weight}
            onChange={handleChange}
            className='form-control'
          />
        </div>
        <div className='form-group'>
          <label>Blood Group:</label>
          <select
            name='blood_group'
            value={patientInfo.blood_group}
            onChange={handleChange}
            className='form-control'
          >
            <option value=''>Select</option>
            <option value='o_positive'>O +ve</option>
            <option value='o_negative'>O -ve</option>
            <option value='a_positive'>A +ve</option>
            <option value='a_negative'>A -ve</option>
            <option value='a_positive'>B +ve</option>
            <option value='a_negative'>B -ve</option>
            <option value='a_positive'>AB +ve</option>
            <option value='ab_negative'>AB -ve</option>
          </select>
        </div>
        <div className='form-group'>
          <label>Problem:</label>
          <select
            name='problem'
            value={patientInfo.problem}
            onChange={handleChange}
            className='form-control'
          >
            <option value=''>Select</option>
            <option value='Fever'>Fever</option>
            <option value='Headache'>Headache</option>
            <option value='Cough'>Cough</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <button type='submit' className='btn-submit'>
          Submit
        </button>
      </form>
    </div>
  );
}

export default PatientInfoForm;
