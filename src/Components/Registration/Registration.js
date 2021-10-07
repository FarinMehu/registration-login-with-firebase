import React, { useState } from 'react';
import './Registration.css';
import {
    getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword,
    signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail,
    updateProfile
} from 'firebase/auth';
import initializeAuthentication from '../../Firebase/Firebase.init';


initializeAuthentication();
const googleProvider = new GoogleAuthProvider();

const Registration = () => {

    const auth = getAuth();
    const handleGoogleSignin = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
    };

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);


    //first step
    const handleRegPage = e => {
        e.preventDefault();
        console.log(name, email, address, password);
        //Forth step
        if (password.length < 6) {
            setError('Password must container at least 6 characters');
            return;
        }

        isLogin ? processLogin(email, password) : newUserRegistration(email, password)

    };


    //second step start
    const handleName = e => {
        setName(e.target.value);
    };
    const handleEmail = e => {
        setEmail(e.target.value);
    };
    const handleAddress = e => {
        setAddress(e.target.value);
    };
    const handlePassword = e => {
        setPassword(e.target.value);
    };
    //second step end

    //fifth step
    const toggleToLogin = e => {
        setIsLogin(e.target.checked);
    };

    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
            })
    }

    const newUserRegistration = (email, password) => {
        //thired step
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                verifyEmail();
                setUserName();
            });
    };

    // 6th step
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result);
            })
    };

    const resetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {

            })
    };

    //7th step
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(() => {

            })
    }

    return (
        <div>
            {/* <button onClick={handleGoogleSignin}>Google Sign in</button> */}
            <form onSubmit={handleRegPage} className='mt-5'>
                {!isLogin && <div className="row mb-3">
                    <label htmlFor="inputName" className="col-sm-4 col-form-label">Name</label>
                    <div onBlur={handleName} className="col-sm-8">
                        <input type="name" className="form-control" id="inputName" />
                    </div>
                </div>}
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-4 col-form-label">Email</label>
                    <div onBlur={handleEmail} className="col-sm-8">
                        <input type="email" className="form-control" id="inputEmail3" />
                    </div>
                </div>
                {!isLogin && <div className="row mb-3">
                    <label htmlFor="inputAddress" className="col-sm-4 col-form-label">Address</label>
                    <div onBlur={handleAddress} className="col-sm-8">
                        <input type="address" className="form-control" id="inputAddress" />
                    </div>
                </div>}
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-4 col-form-label">Password</label>
                    <div onBlur={handlePassword} className="col-sm-8">
                        <input type="password" className="form-control" id="inputPassword3" />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">
                        <div className="form-check">
                            <input onChange={toggleToLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="form-check-label" htmlFor="gridCheck1">
                                Alredy Registered!
                            </label>
                        </div>
                    </div>
                </div>
                <div className="row mb-3 text-danger ms-3">{error}</div>
                <div className='d-flex justify-content-around align-items-center ms-3'>
                    <button type="submit" className="btn btn-primary">{isLogin ? 'Sign in' : 'Sign up'}</button>
                    <button onClick={resetPassword} type="submit" className="btn btn-primary">Reset Password</button>
                </div>
            </form>
        </div >
    );
}

export default Registration;