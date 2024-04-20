import React from 'react';

function Stepper({ currentStep, totalSteps }) {
  const steps = ['Personal Details', 'Education Details', 'Address Details', 'Preview'];

  const getStepClass = (index) => {
    if (index + 1 < currentStep) {
      return 'completed';
    } else if (index + 1 === currentStep) {
      return 'active';
    } else {
      return '';
    }
  };

  return (
    <div className="stepper text-white">
      {steps.map((label, index) => (
        <div key={index} className={`step ${getStepClass(index)}`}>
          <span>{index + 1}</span>
          <p>{label}</p>
        </div>
      ))}
    </div>
  );
}

export default Stepper;
