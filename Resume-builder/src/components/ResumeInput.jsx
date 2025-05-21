import React, { useEffect, useState } from 'react'
import api from '../Api';
import { useNavigate } from 'react-router-dom';
import  Resume1 from "../assets/images/Resume-Format.jpg";



export default function ResumeInput() {
  const navigate = useNavigate();
  const [resumes,setResumes] = useState([]);
    const [form,setForm] = useState({
      fullname:"",
      lastname :"",
      email:"",
      phoneNo:"",
      pincode:"",
      city:"",
      state:"",
      country:"",
      address:"",
      dob:"",
      nationality:"",
      schoolName:"",
      schoolYear:"",
      schoolFoE:"",
      schoolDes:"",
      qualification1:"",
      qYear1:"",
      qType1:"",
      qDes1:"",
      qualification2:"",
      qYear2:"",
      qType2:"",
      qDes2:"",
      certification:"",
      skills:"",
      expTitle:"",
      expDes:"",
      summary:"",
      language:"",
      project:"",
      AandA:"",
      Linkedin:""

    });

    const handleChange = (e) => {
      setForm({...form,[e.target.name]:e.target.value});
    };


    // useEffect(() => {
    //   fetchResume();
    // },[]);

    // const fetchResume = async () => {
    //     try{
    //       const res = await api.get("/resumes");
    //       setResumes(res.data);
    //     }catch(err){
    //       console.error(err);
    //       alert("Unauthorized.Please Login!");
    //       window.location.href = "/";
    //     }
    // };

  const handleSubmit = async(e) =>{
    e.preventDefault();

     const requiredFields = ["fullname", "lastname", "email", "phoneNo", "pincode",];
      for (let field of requiredFields) {
      if (!form[field]) {
      alert(`Please fill out the ${field} field.`);
      return;
       }
      }


    try{
      // await api.post("/resumes",form);
      alert("Resume submited!")
      navigate("/preview", { state: { resume: form } });
      // fetchResume();
    }catch (err) {
      console.error(err);
      alert("Failed to Submit Resumes!");
    }
  }






  return (
    <div className='Resume-container'>
      
        <div className='title-bar'>
          <h2><span>Resume</span> building made easy with me.</h2>
        </div>

        <div className='instruction'>
          <h4>Follow the instructions:</h4>
          <p>Follow this layout to develop a refined and impactful resume.</p>
          <p>Profile details are mandatory; all other sections are optional and can be filled out as you prefer.</p>
        </div>

        {/* form inputs */}

      <div className="form-container ">
        

        {/*  */}
      <div className='img'>
       <img className='resume-format' src={Resume1} alt="" data-bs-toggle="tooltip" data-bs-placement="top"
        data-bs-custom-class="custom-tooltip"
        data-bs-title="This top tooltip is themed via CSS variables." /></div>

       
        {/*  */}

        <form action="" className='row-sm' onKeyDown={(e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // prevent form submit on Enter key
    }
  }}>

          <div class="accordion accordion-flush" id="accordionFlushExample">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Profile Details
                  </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body profile">
                          <div className="row">
                            <h2>How do you want recruiters to contact you?</h2>
                            <p>Include your full name and Profile details.</p>
                            <div className="col-sm-5">
                              <input type="text" placeholder='Full Name' name='fullname' value={form.fullname} onChange={handleChange} required/>
                            </div>
                            <div className="col-sm-5">
                              <input type="text" placeholder='Last Name'  name='lastname' value={form.lastname} onChange={handleChange} required />
                            </div>
                            <div className="col-sm-5">
                              <input type="email" placeholder='Email' name='email' value={form.email} onChange={handleChange} required />
                            </div>
                            <div className="col-sm-5">
                              <input type="text" placeholder='Phone Number' name='phoneNo' value={form.phoneNo} onChange={handleChange} required />
                            </div>
                            <div className="col-sm-5">
                              <input type="text" placeholder='PIN Code' name='pincode' value={form.pincode} onChange={handleChange} required />
                            </div>
                            <div className="col-sm-5">
                              <input type="text" placeholder='City' name='city' value={form.city} onChange={handleChange} required />
                            </div>
                            <div className="col-sm-5">
                              <input type="text" placeholder='State' name='state' value={form.state} onChange={handleChange} required />
                            </div>
                            <div className="col-sm-5">
                              <input type="text" placeholder='Country' name='country' value={form.country} onChange={handleChange} required />
                            </div>
                            <div className="col-sm-5">
                              <input type="text" placeholder='Date of Birth' name='dob' required value={form.dob} onChange={handleChange} />
                            </div>
                            <div className="col-sm-5">
                              <input type="text" placeholder='Nationality' name='nationality' value={form.nationality} onChange={handleChange} required />
                            </div>
                            <div className="col-sm-12">
                              <input type="text" placeholder='Linkedin' name='Linkedin' value={form.Linkedin} onChange={handleChange} required />
                            </div>
                            <div className="col-sm">
                              <textarea placeholder='Address' name="address" id="" value={form.address} onChange={handleChange} required></textarea>
                            </div>
                          </div>

                  </div>
                </div>
              </div>


              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Education
                  </button>
                </h2>
                <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body education ">
                    <div className="row">
                            <div>
                            <h2>Add your education</h2>
                            <p>Tell us about any colleges, vocational programs, or training courses you took. Even if you didn’t finish, it’s important to list them.</p>
                            </div>
                            <div className="row">
                              <h3>Education 1</h3>
                              <input type="text" placeholder='School Name' value={form.schoolName} onChange={handleChange} name='schoolName' required/>
                              <input type="text" placeholder='Year' name='schoolYear' value={form.schoolYear} onChange={handleChange} required/>
                              <input type="text" placeholder='Field of Education' name='schoolFoE' value={form.schoolFoE} onChange={handleChange} required/>
                              <textarea name="schoolDes" placeholder='Description'  value={form.schoolDes} onChange={handleChange} id=""></textarea>
                            </div>
                            <div className="row">
                              <h3>Education 2</h3>
                              <input type="text" placeholder='Qualification' name='qualification1' onChange={handleChange} value={form.qualification1} required/>
                              <input type="text" placeholder='Year' name='qYear1' onChange={handleChange} value={form.qYear1} required />
                              <select name="qType1" value={form.qType1} onChange={handleChange} id="" required>
                                <option value="">--select--</option>
                                <option value="UG">UG</option>
                                <option value="PG">PG</option>
                                <option value="Diploma">Diploma </option>
                              </select>
                              <textarea name="qDes1" placeholder='Description' onChange={handleChange} value={form.qDes1} id=""></textarea>
                            </div>
                            <div className="row">
                              <h3>Education 3</h3>
                              <input type="text" placeholder='Qualification' name='qualification2' onChange={handleChange} value={form.qualification2} required/>
                              <input type="text" placeholder='Year' name='qYear2' onChange={handleChange} value={form.qYear2} required />
                              <select name="qType2" onChange={handleChange} value={form.qType2} id="">
                                <option value="">--select--</option>
                                <option value="UG">UG</option>
                                <option value="PG">PG</option>
                                <option value="Diploma">Diploma </option>
                              </select>
                              <textarea name="qDes2" placeholder='Description' onChange={handleChange} value={form.qDes2} id=""></textarea>
                            </div>
                            <div className="row">
                              <h3>Certification </h3>
                              <textarea name="certification" onChange={handleChange} value={form.certification} placeholder='Description' id=""></textarea>
                            </div>
                          </div>

                  </div>
               </div>
              </div>
                      
                      
                      
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed"  type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Skills 
                  </button>
                </h2>
                <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body skills">
                    <h2>Add your skills</h2>
                    <textarea name="skills" placeholder='Description' onChange={handleChange} value={form.skills} id=""></textarea>
                  </div>
                </div>
              </div>



              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                            Experience  
                  </button>
                </h2>
                <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body experience">
                    <h2>Add your Experience</h2>
                    <input type="text" name='expTitle' placeholder='Job title' onChange={handleChange} value={form.expTitle} />
                    <textarea name="expDes" placeholder='Description' id="" onChange={handleChange} value={form.expDes}></textarea>
                  </div>
                </div>
              </div>


              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                            Summary
                  </button>
                </h2>
                <div id="flush-collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body summary">
                    <h2>Add your Summary</h2>
                    <textarea name="summary" placeholder='Description' onChange={handleChange} value={form.summary} id=""></textarea>
                  </div>
                </div>
              </div>


              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                            Language
                  </button>
                </h2>
                <div id="flush-collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body language">
                    <h2>What languages you Know</h2>
                    <textarea name="language" placeholder='Description' value={form.language} onChange={handleChange} id=""></textarea>
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                            Project
                  </button>
                </h2>
                <div id="flush-collapseSeven" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body projects">
                    <h2>Add your best projects</h2>
                    <textarea name="project" placeholder='Description' onChange={handleChange} value={form.project} id=""></textarea>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
                          Awards & Achievements
                  </button>
                </h2>
                <div id="flush-collapseEight" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body achevments">
                    <h2>Add your best Awards & Achievements</h2>
                    <textarea name="AandA" placeholder='Description' value={form.AandA} onChange={handleChange} id=""></textarea>
                  </div>
                </div>
              </div>

             <div id='SubmitBtn'><button type='button' onClick={handleSubmit}>Submit</button></div>          

          </div>

        </form>
      </div>

      <div className='EndSec'>
        <p>Designed by @Krishna | © All rights reserved.</p>
      </div>

    </div>
    
  )
}
