import  { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../Api';
import checkmark from "../assets/images/checkmark.png";
import  Resume1 from "../assets/images/Resume-Format.jpg";
import  Resume2 from "../assets/images/Resume-inputs.jpg";
import bgimg from "../assets/images/background1.jpg";

export default function Home() {
    let page = useNavigate()

    const [email,setEmail] =  useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const [showPassword,setShowPassword] = useState(false);


    // SIGNUP 

    const handleSignup = async(e) =>{

        e.preventDefault();

        if(confirmPassword !== password){
                alert("Password do not match!");
                return;
            }

        try{
            
            await api.post("/auth/register",{email,password});
            alert("Registration successfull, please login!");
            setConfirmPassword("");
            setEmail("");
            setPassword("");
            const modal = bootstrap.Modal.getInstance(document.getElementById('Signup'));
            modal.hide();
            const loginModal = new bootstrap.Modal(document.getElementById('Login'));
            loginModal.show();

            
        }catch(err){
            if(err.response ?.data?.msg){
                alert(err.response.data.msg);
            }else{
            alert("Error during signup!");
            }
            console.error(err);
        }
    
    }



    // LOGIN

    const handleLogin = async(e) => {
        e.preventDefault();
        try{
            const res = await api.post('/auth/login', {email,password});
            localStorage.setItem('token',res.data.token);
            alert("Login Successfully");
            setEmail("");
            setPassword("");
            
            // Close modal after success
            const modal = bootstrap.Modal.getInstance(document.getElementById('Login'));
            modal.hide();


        }catch(err){
            alert("Login failed !");
            console.error(err);
        }
    }


    const handleStartClick = () => {

            const token = localStorage.getItem("token")

            if (token){
                page("/resumeinput");
            }else{
                alert("Go Login first");
                const loginModal = new bootstrap.Modal(document.getElementById('Login'));
                loginModal.show();
            }

    }


  return (
    <div className='container-fluied' >
        <nav className='' >
            <div className="icon">
                <h2 className=''><img src={checkmark} alt="" /> Resume <span>build.</span></h2>
            </div>

            <div className="navlist">
                <a href=""  data-bs-toggle="modal" data-bs-target="#Login"><i class="fa-solid fa-circle-user"></i> Login</a>
                <a href="#contact"><i class="fa-solid fa-id-badge"></i> Contact</a>
                <a href="#Help"><i class="fa-solid fa-circle-info"></i> Help</a>
                <a href="" id='menubar' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i class="fa-solid fa-bars"></i></a>


                     {/*menubar offcanvas  */}
                            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                                <div class="offcanvas-header">
                                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div class="offcanvas-body">
                                        <a href=""  data-bs-toggle="modal" data-bs-target="#Login"><i class="fa-solid fa-circle-user"></i> Login</a>
                                        <a href="#contact"><i class="fa-solid fa-id-badge"></i> Contact</a>
                                        <a href="#Help"><i class="fa-solid fa-circle-info"></i> Help</a>
                                </div>
                            </div>

                    {/* offcanvas end */}

            </div>
        </nav>

    
                

        {/* Content */}
        <div className="content" style={{backgroundImage:`url(${bgimg})`}}>
            <div className="row">
                <div className="col-sm">
                    <h1>The CV that gets the job… done</h1>
                    <p>Build a new CV or improve your existing one with step-by-step expert guidance.</p>
                    <button onClick={handleStartClick}>Let's get start</button>
                </div>
                <div className="col-sm-4"></div>
            </div>
        </div>



 


{/* Login */}

<div class="modal fade" id="Login" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered ">
        <div class="modal-body">
            <div class="modal-content" id='login-modelcontent'>
                <div id="closeBtn"> <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                   <form id='loginform'>
                        <h2>Login</h2>
                        <div className='email'>            
                            <input type="email" placeholder='Enter Your Email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
                            <i class="fa-solid fa-envelope"></i>
                        </div>
                        <div className='password'>
                            <input type={showPassword?"text":"password"} placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required/>
                            <i class={showPassword?"fa-regular fa-eye":"fa-regular fa-eye-slash"} onClick={() => setShowPassword(!showPassword)}></i>
                        </div>
                        <div id='forget'>
                        <a className='f-p' href="">Forgot password?</a>
                        </div>
                        <button type='button' onClick={handleLogin}>Login</button>
                        <p>Not a user ? <a href=""  data-bs-toggle="modal" data-bs-target="#Signup">signup now</a></p>
                    </form>
            </div>
        </div>
    </div>
</div>

{/* Signup */}


<div class="modal fade" id="Signup" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered ">
        <div class="modal-body">
            <div class="modal-content" id='login-modelcontent'>
                <div id="closeBtn"> <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                   <form id='loginform'>
                        <h2>Signup</h2>
                        <div className='email'>            
                            <input type="email" placeholder='Enter Your Email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
                            <i class="fa-solid fa-envelope"></i>
                        </div>
                        <div className='password'>
                            <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required/>
                            
                        </div>
                        <div className='password'>
                            <input type={showPassword?"text":"password"} placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required/>
                            <i class={showPassword?"fa-regular fa-eye":"fa-regular fa-eye-slash"} onClick={() => setShowPassword(!showPassword)}></i>
                        </div>
                        <button type='button' onClick={handleSignup}>Sign Up</button>
                        <p>Already User ? <a href="" data-bs-toggle="modal" data-bs-target="#Login">Login page</a></p>
                    </form>
            </div>
        </div>
    </div>
</div>
{/* Instruction images */}

<div className="instruction-img" id='Help'>
    <div className="Title">
        <h1>How to build a resume</h1>
        <p>The resume building process is simple and intuitive: Three easy steps is all it takes to get from start to finish. Resume writing can be time-consuming. So, our resume tools and guides are designed to save as much of your time as possible.</p>
    </div>
    <div className="steps">
        <h5>Step 1</h5>
        <p>Use the provided resume format to craft a more effective resume.</p>
        <img src={Resume1} alt="" />
    </div>
    <div className="steps">
        <h5>Step 2</h5>
        <p>Complete the profile section by following the instructions, and click Submit when done.</p>
        <img src={Resume2} alt="" /></div>
    <div className="steps">
        <h5>Step 3</h5>
        <p>Submit your details to generate your resume, then download or print it as desired.</p>
        <img src={Resume1} alt="" />
    </div>
</div>

{/* Contact */}

<div className="contact-list" id='contact'>
    <div className="row">
        <div className="col-sm">
            <h6>Connect with uson social media</h6>
            <div className='icons'><i class="fa-brands fa-linkedin-in"></i><i class="fa-brands fa-facebook-f"></i><i class="fa-brands fa-instagram"></i><i class="fa-brands fa-youtube"></i><i class="fa-brands fa-google"></i></div>
        </div>
        <div className="col-sm">
            <p>Job seekers</p>
            <h6>Create a resume</h6>
            <h6>Resume examples</h6>
            <h6>Job Search</h6>
        </div>
        <div className="col-sm">
            <p>Career Resources</p>
            <h6>Resume Help</h6>
            <h6>Job interview</h6>
            <h6>Career</h6>
            <h6>Job</h6>
            <h6>Blog</h6>
        </div>
        <div className="col-sm">
            <p>Our company</p>
            <h6>About Us</h6>
            <h6>Updates</h6>
            <h6>Pricing</h6>
            <h6>Sponsorship Program</h6>
            <h6>Media Kit</h6>
        </div>
        <div className="col-sm">
            <p>Support</p>
            <h6>FAQ</h6>
            <h6>Terms of Service</h6>
            <h6>Privacy</h6>
            <h6>Do not sell, do not share</h6>
        </div>

    </div>
</div>



{/* End */}
<div className='EndSec'>
        <p>Designed by @Krishna | © All rights reserved.</p>
      </div>

    </div>
  )
}
