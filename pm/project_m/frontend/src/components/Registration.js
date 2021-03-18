import React, { useState } from 'react'
import { Button, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import '../../static/css/reg-login.css'

const Registration = () => {
    const [username, setUsername] = useState();
    const [firsname, setfirstname] = useState();
    const [lastname, setlastname] = useState();
    const [email, setemail] = useState();
    const [password, setpassword] = useState();
    const [password2, setpassword2] = useState();
    const handleSubmit = () => {
        
    }
    return (
        <section className="register-section">
            <div className="reg-container">
                <div className="reg__right">
                    <h2 className="logo-registration">
                        PM
                    </h2>
                    <h1 className="sub-text-reg">
                        Create Account
                    </h1>
                    {/*
                    <TextField className="text-field" label="Username" variant="outlined" />
                    <TextField label="First Name" variant="outlined" />
                    <TextField label="Last Name" variant="outlined" />
                    <TextField label="Email" variant="outlined" />
                    <TextField label="Password" variant="outlined" />
                    <TextField label="Confirm Password" variant="outlined" />
                    */}

                        <form action="">
                            <table>
                                <tr>
                                    <td>
                                        <label className="label-reg" for="username">Username</label>
                                        <input onChange={e => setUsername(e.target.value)} className="input-form" type="text" placeholder="Username" id="username" name="username" />
                                    </td>
                                    <td>
                                        <label className="label-reg" for="firstName">First Name</label>
                                        <input onChange={e => setfirstname(e.target.value)} className="input-form" type="text" placeholder="First name" id="firstName" name="firstName" />
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <label className="label-reg" for="lastName">Last Name</label>
                                        <input onChange className="input-form" type="text" placeholder="Last Name" id="lastName" name="lastName" />
                                    </td>
                                    <td>
                                        <label className="label-reg" for="Email">Email</label>
                                        <input className="input-form" type="text" placeholder="Email" id="Email" name="Email" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className="label-reg" for="Password">Password</label>
                                        <input className="input-form" type="text" placeholder="Password" id="Password" name="Password" />
                                    </td>
                                    <td>
                                        <label className="label-reg" for="ConfirmPassword">Confirm Password</label>
                                        <input className="input-form" type="text" placeholder="Confirm Password" id=" ConfirmPassword" name="ConfirmPassword" />
                                    </td>
                                </tr>
                                
                            </table>
                            <input type="submit" className="send-message-cta" onSubmit={this.handleSubmit} value="Create Account" />
                        </form>

                        <p className="already-have-acc">Already have an account? <Link className="login-link">Log In</Link></p>

                        

                </div>

                <div className="reg__left">
                    <p className="subtitle-registration">The leading project management system to keep your
                     company running</p>
                    
                    <img src="../../static/images/undraw_All_the_data_re_hh4w.svg" className="reg-img" alt="illustration" />
                </div>
            </div>
        </section>
    )
}

export default Registration;
