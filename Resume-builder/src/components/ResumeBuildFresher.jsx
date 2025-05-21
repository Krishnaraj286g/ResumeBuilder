import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import html2pdf from 'html2pdf.js';
import checkmark from "../assets/images/checkmark.png";


export default function ResumeBuildFresher() {
  const location = useLocation();
  const resume = location.state?.resume;
  const resumeRef = useRef();

  const handleDownloadPDF = () => {
    const element = resumeRef.current;

    const options = {
      margin:       0.5,
      filename:     'My_Resume.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    alert("Your Resume is Dowloading!")

    html2pdf().from(element).set(options).save();
  };

  if (!resume) return <p>No resume data provided.</p>;

  return (
    <div className="Resume-page">
      <nav>
        <div className='icon'>
          <h2 className=''><img src={checkmark} alt="" /> Resume <span>build.</span></h2>
        </div>
        <div className='resume-buttons'>
          <button className='Download' onClick={handleDownloadPDF}>Download</button>
          <button className='Print' onClick={() => window.print()}>Print</button>
        </div>
      </nav>

      <div id='Resume'>
      <div ref={resumeRef} className='pdf-layout' >  
        <div className="header">
          <h1 className="text-3xl font-bold">{resume.fullname} {resume.lastname}</h1>
          <div id='email-phone'>
          <div id='resume-phone'> <p ><i class="fa-solid fa-phone"></i>  {resume.phoneNo}</p></div>
          <div id='resume-email'><p ><i class="fa-solid fa-envelope"></i>  {resume.email}</p></div>
          {(resume.Linkedin)&&(
            <div id='resume-Link'><p ><i class="fa-solid fa-link"></i>  {resume.Linkedin}</p></div>

          )}
          </div>

          <div className="location">
            <div className='address'><p><i class="fa-solid fa-location-dot"></i> {resume.address}</p>|<p>{resume.city} - {resume.pincode}</p>|<p>{resume.state}</p>|<p>{resume.country}</p></div>
          </div>
          <div className="date-nation">
            <div className='dateofbirth'><p><i class="fa-solid fa-calendar-days"></i> Date of Birth: {resume.dob}</p></div>
            <div className='Nationality'><p><i class="fa-solid fa-globe"></i> Nationality: {resume.nationality}</p></div>
          </div>
        </div>

        {resume.summary && (
            <section className='summary'>
                  <h4 className="">Professional Summary</h4>
                  <p>{resume.summary}</p>
            </section>
            )}


        {(resume.schoolName || resume.qualification1) && (
          <section className='Education'>
            <h4>Education</h4>

            <div className='Education1'>
              <h5>{resume.schoolFoE}:</h5>
              <div>
                <h5>{resume.schoolName}({resume.schoolYear})</h5>
                <p>{resume.schoolDes}</p>
              </div>
            </div>
            <div className='Education2'>
              <h5>{resume.qualification1}:</h5>
              <div>
                <h5>{resume.qType1}({resume.qYear1})</h5>
                <p>{resume.qDes1}</p>
              </div>
            </div>
            {(resume.qualification2)&&(
              <div className='Education2'>
              <h5>{resume.qualification2}:</h5>
              <div>
                <h5>{resume.qType2}({resume.qYear2})</h5>
                <p>{resume.qDes2}</p>
              </div>
            </div>
            )}
          </section>
)}

{/*  */}


        {resume.skills && (
  <section className='skills'>
    <h4 className="">Skills</h4>
    <p>{resume.skills}</p>
  </section>
)}
{/*  */}

    {resume.certification && (
  <section className='certification'>
    <h4 className="">Certification</h4>
    <p>{resume.certification}</p>
  </section>
)}


{/*  */}


        {(resume.expTitle || resume.expDes) && (
  <section className='Experience'>
    <h4 className="">Experience</h4>
    {resume.expTitle && <h5>{resume.expTitle}</h5>}
    {resume.expDes && <p>{resume.expDes}</p>}
  </section>
)}


{/*  */}

       {resume.project && (
  <section className='projects'>
    <h4 className="text-xl font-semibold">Projects</h4>
    <p>{resume.project}</p>
  </section>
)}

{/*  */}

        {resume.AandA && (
  <section className='AandA'>
    <h4 className="">Awards & Achievements</h4>
    <p>{resume.AandA}</p>
  </section>
)}
        {/*  */}

            {resume.language && (
  <section className="Language">
    <h4 className="">Language</h4>
    <p>{resume.language}</p>
  </section>
)}
      </div>     
    </div>
    <div className='EndSec'>
        <p>Designed by @Krishna | © All rights reserved.</p>
      </div>
    </div>
  );
}
