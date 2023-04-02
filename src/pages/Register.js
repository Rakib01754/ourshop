import { GoogleAuthProvider, updateProfile } from 'firebase/auth';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Register = () => {

    const navigate = useNavigate()
    const { signUp, googleSignIn } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider()

    const handleFormSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        signUp(email, password)
            .then(result => {
                const user = result.user
                toast.success('Registration Successfull', {
                    style: {
                        border: '1px solid #713200',
                        padding: '16px',
                        color: '#713200',
                    },
                    iconTheme: {
                        primary: '#713200',
                        secondary: '#FFFAEE',
                    },
                });
                updateProfile(user, {
                    displayName: name,
                }).then(() => {
                    toast.success('Profile Updated', {
                        style: {
                            border: '1px solid #713200',
                            padding: '16px',
                            color: '#713200',
                        },
                        iconTheme: {
                            primary: '#713200',
                            secondary: '#FFFAEE',
                        },
                    });

                    navigate('/')

                })
                    .catch((error) => {
                        const errorMessage = error.message;
                        toast.error(errorMessage)
                    });

            })
            .catch((error) => {
                const errorMessage = error.message;
                toast.error(errorMessage)
            });

        form.reset()
    }


    //google signIn

    const handlegoogleSignIn = () => {
        googleSignIn(googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user)
            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
            });

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Create Account</h1>
                    <p className="py-6">Create An Account For Access Private Content Of This Website Or You Can Sign In With Your Google Account</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleFormSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <div className="form-control mt-6">
                            <button onClick={handlegoogleSignIn} className="btn btn-secondary">Login With Google</button>
                        </div>
                        <label className="label">
                            <NavLink to="/login" className="label-text-alt link link-hover">Already have an account? Login Now</NavLink>
                        </label>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;