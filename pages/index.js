
import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/router';
// import { base_url, api_url } from './config.js';
// import './login/login.css';
// import '../styles/login.css';
const Login = () => {
    const router = useRouter();
    const [success, setSuccess] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
  
    const handleLogin = async (e) => {
      e.preventDefault(); // Prevent form submission
      try {
        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);
        // const apiUrl = `${api_url}api/login`; 
        // const apiUrl = `${api_url}/login/login`;
        const apiUrl = `http://localhost/student-report-api/index.php/login/login`;
        const response = await axios.get(apiUrl, {
          params: {
            email: email,
            password: password
          },
          headers: {
            'Content-Type': 'multipart/form-data', // Set content type to form-data
          },
        });
  
        if (response.status === 200) {
          setSuccess('Login successful! Redirecting...');
          sessionStorage.setItem('token', response.data.token);
          router.push('/dashboard');
        } else {
          console.error('Error occurred:', response.status);
          setError('Invalid email or password');
        }
      } catch (error) {
        console.error('Error occurred:', error);
        setError('An error occurred while processing your request.');
      }
    };
  
  return (
    <>
    
    <style jsx>{`
    .setting-toggle card{
      display: none!important;
    }
    `}</style>
    <div className="container-fluid">
      {/* ... rest of your component code ... */}
      <div className="row min-vh-100 flex-center g-0">
          <div className="col-lg-8 col-xxl-5 py-3 position-relative">
            <img className="bg-auth-circle-shape" src="/public/assets/img/icons/spot-illustrations/bg-shape.png" alt="" width="250" />
            <img className="bg-auth-circle-shape-2" src="/public/assets/img/icons/spot-illustrations/shape-1.png" alt="" width="150" />
            <div className="card overflow-hidden z-1">
              <div className="card-body p-0">
                <div className="row g-0 h-100">
                  <div className="col-md-5 text-center bg-card-gradient">
                    <div className="position-relative p-4 pt-md-5 pb-md-7" data-bs-theme="light">
                      <div className="bg-holder bg-auth-card-shape" style={{ backgroundImage: `url(/public/assets/img/icons/spot-illustrations/half-circle.png)` }}></div>
                      <div className="z-1 position-relative">
                        <a className="link-light mb-4 font-sans-serif fs-4 d-inline-block fw-bolder" href="">SETU</a>
                        <p className="opacity-75 text-white">With the power of Falcon, you can now focus only on functionaries for your digital products, while leaving the UI design on us!</p>
                      </div>
                    </div>
                    <div className="mt-3 mb-4 mt-md-4 mb-md-5" data-bs-theme="light">
                      <p className="text-white">Don't have an account?<br /><a className="text-decoration-underline link-light" href="">Get started!</a></p>
                      <p className="mb-0 mt-4 mt-md-5 fs--1 fw-semi-bold text-white opacity-75">Read our <a className="text-decoration-underline text-white" href="#!">terms</a> and <a className="text-decoration-underline text-white" href="#!">conditions</a></p>
                    </div>
                  </div>
                  <div className="col-md-7 d-flex flex-center">
                    <div className="p-4 p-md-5 flex-grow-1">
                      <div className="row flex-between-center">
                        <div className="col-12">
                          {/* View file (for example, login.php) */}
                          {/* Checking for error message */}
                          {error && (
                            <div className="alert alert-danger border-2 d-flex align-items-center" role="alert">
                              <p className="mb-0 flex-1">{error}</p>
                              <button className="btn-close" type="button" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                          )}
                          {success && (
                            <div className="alert alert-success border-2 d-flex align-items-center" role="alert">
                              <p className="mb-0 flex-1">{success}</p>
                              <button className="btn-close" type="button" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                          )}
                          <h3>Account Login</h3>
                        </div>
                      </div>
      <form onSubmit={handleLogin}>
        {/* ... your form input fields ... */}
        <div className="mb-3">
                          <label className="form-label" htmlFor="card-email">
                            Email address
                          </label>
                          {/* <input className="form-control" id="card-email" type="email" name="email" /> */}
                          <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="mb-3">
                          <div className="d-flex justify-content-between">
                            <label className="form-label" htmlFor="card-password">
                              Password
                            </label>
                          </div>
                          {/* <input className="form-control" id="card-password" type="password" name="password" /> */}
                          <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                        <div className="row flex-between-center">
                          <div className="col-auto">
                            <div className="form-check mb-0">
                              <input className="form-check-input" type="checkbox" id="card-checkbox" defaultChecked />
                              <label className="form-check-label mb-0" htmlFor="card-checkbox">
                                Remember me
                              </label>
                            </div>
                          </div>
                          <div className="col-auto">
                            <a className="fs--1" href="">
                              Forgot Password?
                            </a>
                          </div>
                        </div>
                        <div className="mb-3">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
                </div>
              </form>
              </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
  );
};

export default Login;
