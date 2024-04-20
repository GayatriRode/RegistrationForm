import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function PreviewPage({ formData, onBack, onSubmit }) {
  const { personal, academic, address } = formData;

  const downloadPdf = () => {
    const input = document.getElementById('preview-content');
    html2canvas(input).then((canvas) => {
      const pdf = new jsPDF('p', 'mm', 'a4');
      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 210, 297);
      pdf.save('registration-details.pdf');
    });
  };

  return (
    <div className='wrapper'>
      <h3 className="text-success text-uppercase p-5 bg-white">Preview</h3><br />
      <div id="preview-content" className="pdf-content">
        {personal.image && (
          <div>
            <img src={URL.createObjectURL(personal.image)} alt="User" className="user-image" height={150} width={200}/>
          </div>
        )}<br />
        <h3 className="text-success text-uppercase">Personal Details</h3>
        <p><strong>Full Name:</strong> {personal.fullName}</p>
        <p><strong>Email:</strong> {personal.email}</p>
        <p><strong>Mobile No:</strong> {personal.mobile}</p>
        <p><strong>Date of Birth:</strong> {personal.dob}</p>
        <h3 className="text-success text-uppercase">Academic Details</h3>
        <div className="academic">
          <div className="details">
            <h5>Degree Details</h5>
            <p><strong>Degree:</strong> {academic.degree}</p>
            <p><strong>Institute Name:</strong> {academic.dinstitute}</p>
            <p><strong>Year of Passing:</strong> {academic.dyear}</p>
            <p><strong>CGPA:</strong> {academic.dcgpa}</p>
          </div>
          <div className="details">
            <h5>HSC Details</h5>
            <p><strong>HSC Board:</strong> {academic.hscboard}</p>
            <p><strong>HSC Year:</strong> {academic.hscyear}</p>
            <p><strong>HSC Marks:</strong> {academic.hscmarks}</p>
          </div>
          <div className='details'>
            <h5>SSC Details</h5>
            <p><strong>SSC Board:</strong> {academic.sscboard}</p>
            <p><strong>SSC Year:</strong> {academic.sscyear}</p>
            <p><strong>SSC Marks:</strong> {academic.sscmarks}</p>
          </div>
        </div>
        <div>
          <h3>Address Details</h3>
          <p><strong>Street:</strong> {address.street}</p>
          <p><strong>City:</strong> {address.city}</p>
          <p><strong>State:</strong> {address.state}</p>
          <p><strong>ZIP Code:</strong> {address.zip}</p>
        </div>
      </div><br />
      <div className='btns'>
        <button onClick={onBack} className='btn btn-primary'>Back</button>
        <button onClick={downloadPdf} className='btn btn-primary'>Download PDF</button>
      </div>
    </div>
  );
}

export default PreviewPage;
