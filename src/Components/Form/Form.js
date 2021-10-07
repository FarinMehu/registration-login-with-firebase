import React from 'react';
import { Link } from 'react-router-dom';
import Registration from '../Registration/Registration';
import './Form.css'

const Form = () => {
    return (
        <div>
            <div className='full_container d-flex'>
                <div className='login'>
                    <h2 className='py-4'>Welcome</h2>
                    <p className='pb-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque nisi minima aperiam eum possimus nihil dignissimos? Sint dolorum consectetur placeat!</p>
                    <Link to=''><button type="button" class="btn btn-primary">Have an Account</button></Link>
                </div>
                <div className='registration'>
                    <Registration></Registration>
                </div>
            </div>
            <Link to='/about'><button>Go back</button></Link>
        </div>
    );
};

export default Form;