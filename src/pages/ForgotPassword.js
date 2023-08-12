import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ResetPassword = () => {
    const [label, setLabel] = useState()
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState('')
    const [resetPassword, { isLoading }] = useState()
    const { token } = useParams()


    const confirmPasswordHandler = async (event) => {
        event.preventDefault()

    }

    return (
        <>
            <Topbar />
            <Navbar />
            <section style={{ marginTop: '120px', marginBottom: '100px' }}>
                <div className='container bg-light shadow rounded-2' id='container' style={{ minHeight: '500px' }}>
                    <div style={{ transform: 'translateX(0%)', width: '100%' }} className='form-container sign-up-container'>
                        <form style={{ width: '775px', margin: 'auto' }} onSubmit={(event) => confirmPasswordHandler(event)} className='acform'>
                            <h1 className='display-6 text-primary py-5 fw-bold' style={{ marginLeft: '100px' }}>Set New Password</h1>
                            <div className='form-outline mb-4 col-md-9'>
                                <div className='form-floating relative'>
                                    <input type={showPassword ? 'text' : 'password'} placeholder='Password' className='form-control' value={password} autoComplete='false' onChange={(event) => setPassword(event.target.value)} required />
                                    <i onClick={() => setShowPassword(!showPassword)} className={`${showPassword ? 'bi bi-eye' : 'bi bi-eye-slash'} position-absolute end-0 me-3 pb-2`} style={{ top: '40%', cursor: 'pointer' }} id='togglePassword'></i>
                                    <label htmlFor='password'>Password</label>
                                </div>
                            </div>
                            <div style={{ marginLeft: '150px' }}>
                                <button className='my-3 btn text-light py-3 rounded-md px-5 mx-auto btn-primary' type={isLoading ? 'button' : 'submit'}>
                                    {isLoading ? <>Loading <div style={{ width: '12px', height: '12px' }} className='ms-2 spinner-border' role='status'></div></> : 'Set New Password'}
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default ResetPassword