import React, { useState } from 'react';
import './App.css';
import Stepper from './Stepper';
import PreviewPage from './PreviewPage';

function RegistrationForm() {
  const totalSteps = 4;
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    personal: {
      fullName: '',
      email: '',
      mobile: '',
      dob: '',
      image: null 
    },
    academic: {
      degree: '',
      dinstitute: '',
      dyear: '',
      dcgpa: '',
      hscboard: '',
      hscyear: '',
      hscmarks: '',
      sscboard: '',
      sscyear: '',
      sscmarks: ''
    },
    address: {
      street: '',
      city: '',
      state: '',
      zip: ''
    }
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event, section) => {
    const { name, value, files } = event.target;
    if (name === 'image') {
      setFormData({
        ...formData,
        [section]: {
          ...formData[section],
          [name]: files[0] 
        }
      });
    } else {
      setFormData({
        ...formData,
        [section]: {
          ...formData[section],
          [name]: value
        }
      });
    }
  };
  const handleNext = () => {
    if (step === totalSteps) {
      setStep(1);
    } else {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const allUserDetails = JSON.parse(sessionStorage.getItem('allUserDetails')) || [];
    allUserDetails.push(formData);
    sessionStorage.setItem('allUserDetails', JSON.stringify(allUserDetails));
    setSubmitted(true); 
    setStep(4); 
  };

  return (
    <div>
      <Stepper currentStep={step} totalSteps={totalSteps} /><br />
      <div className='main-cont'>
      {step === 1 && (
        <div>
          <form onSubmit={handleNext} className='form1'>
          <div>
              <label htmlFor="fullName">Full Name:</label>
              <input type="text" id="fullName" className='form-control' name="fullName" value={formData.personal.fullName} onChange={(e) => handleChange(e, 'personal')} required /><br />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" className='form-control' name="email" value={formData.personal.email} onChange={(e) => handleChange(e, 'personal')} required /><br />
            </div>
            <div>
              <label htmlFor="mobile">Mobile No:</label>
              <input type="tel" id="mobile" className='form-control' name="mobile" value={formData.personal.mobile} onChange={(e) => handleChange(e, 'personal')} required /><br />
            </div>
            <div>
              <label htmlFor="dob">Date of Birth:</label>
              <input type="date" id="dob" className='form-control' name="dob" value={formData.personal.dob} onChange={(e) => handleChange(e, 'personal')} required /><br />
            </div><br />
            <div>
              <label htmlFor="image">Upload Image:</label>
              <input type="file" id="image" className='form-control' name="image" accept="image/*" onChange={(e) => handleChange(e, 'personal')} required /><br />
            </div><br />
            <button type="submit" className='btn btn-primary'>Next</button>
          </form>
        </div>
      )}
      {step === 2 && (
        <div>
          <form onSubmit={handleNext} className='form1'>
          <div className='degreeDetails'>
                <h5>Degree Details</h5>
            <div>
              <label htmlFor="degree">Degree:</label>
              <input type="text" id="degree" className='form-control' name="degree" value={formData.academic.degree} onChange={(e) => handleChange(e, 'academic')} required /><br />
            </div>
            <div>
              <label htmlFor="institute">Institute Name:</label>
              <input type="text" id="dinstitute" className='form-control' name="dinstitute" value={formData.academic.dinstitute} onChange={(e) => handleChange(e, 'academic')} required /><br />
            </div>
            <div>
              <label htmlFor="dyear">Year of Passing:</label>
              <input type="number" id="dyear" className='form-control' name="dyear" value={formData.academic.dyear} onChange={(e) => handleChange(e, 'academic')} required /><br />
            </div>
            <div>
              <label htmlFor="marks">CGPA:</label>
              <input type="number" id="dcgpa" className='form-control' name="dcgpa" value={formData.academic.dcgpa} onChange={(e) => handleChange(e, 'academic')} required /><br />
            </div>
            </div><br />

            <div className='HSCDetails'>
            <h5>HSC Details</h5>
            <div>
              <label htmlFor="hscboard">Board Name:</label>
              <input type="text" id="hscboard" className='form-control' name="hscboard" value={formData.academic.hscboard} onChange={(e) => handleChange(e, 'academic')} required /><br />
            </div>
            <div>
              <label htmlFor="hscyear">Year of Passing:</label>
              <input type="number" id="hscyear" className='form-control' name="hscyear" value={formData.academic.hscyear} onChange={(e) => handleChange(e, 'academic')} required /><br />
            </div>
            <div>
              <label htmlFor="marks">Percentage:</label>
              <input type="number" id="hscmarks" className='form-control' name="hscmarks" value={formData.academic.hscmarks} onChange={(e) => handleChange(e, 'academic')} required /><br />
            </div>
            </div><br />

            <div className='SSCDetails'>
            <h5>SSC Details</h5>
            <div>
              <label htmlFor="sscboard">Board Name:</label>
              <input type="text" id="sscboard" className='form-control' name="sscboard" value={formData.academic.sscboard} onChange={(e) => handleChange(e, 'academic')} required /><br />
            </div>
            <div>
              <label htmlFor="sscyear">Year of Passing:</label>
              <input type="number" id="sscyear" className='form-control' name="sscyear" value={formData.academic.sscyear} onChange={(e) => handleChange(e, 'academic')} required /><br />
            </div>
            <div>
              <label htmlFor="marks">Percentage:</label>
              <input type="number" id="sscmarks" className='form-control' name="sscmarks" value={formData.academic.sscmarks} onChange={(e) => handleChange(e, 'academic')} required /><br />
            </div>
            </div><br />

            <div class="btns">
                <button type="button" className='btn btn-primary' onClick={handlePrevious}>Previous</button>
                <button type="submit" className='btn btn-primary'>Next</button>
            </div>
          </form>
        </div>
      )}
      {step === 3 && (
        <div>
          <form onSubmit={handleSubmit} className='form1'>
            <h3>Address Details</h3>
          <div>
              <label htmlFor="street">Street:</label>
              <input type="text" className='form-control' id="street" name="street" value={formData.address.street} onChange={(e) => handleChange(e, 'address')} required />
            </div><br />
            <div>
              <label htmlFor="city">City:</label>
              <input type="text" className='form-control' id="city" name="city" value={formData.address.city} onChange={(e) => handleChange(e, 'address')} required />
            </div><br />
            <div>
              <label htmlFor="state">State:</label>
              <input type="text" className='form-control' id="state" name="state" value={formData.address.state} onChange={(e) => handleChange(e, 'address')} required />
            </div><br />
            <div>
              <label htmlFor="zip">ZIP Code:</label>
              <input type="text" className='form-control' id="zip" name="zip" value={formData.address.zip} onChange={(e) => handleChange(e, 'address')} required />
            </div><br />
            <div class="btns">
                <button type="button" className='btn btn-primary' onClick={handlePrevious}>Previous</button>
                <button type="submit" className='btn btn-primary'>Next</button>
            </div>
          </form>
        </div>
      )}
      {step === 4 && (
        <div>
          <PreviewPage formData={formData} onBack={() => setStep(3)} onSubmit={handleSubmit} />
        </div>
      )}
    </div>
    </div>
  );
}

function App() {
    return(
      <div className='container1'>
          <h3 className='text-white text-center pt-4'>Registration Form</h3>
          <RegistrationForm></RegistrationForm>
        </div>
    )
  };

export default App;
