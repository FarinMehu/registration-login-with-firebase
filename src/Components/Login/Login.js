import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>

            <br />
            <br />
            <Link to='/form'><button>Go Back</button></Link>
        </div>
    );
};

export default Login;