import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className='mt-5'>
            <h3>Please Click the button to Enter our webpage</h3>
            <Link to='/form'><button className='btn btn-primary'>Click here</button></Link>
        </div>
    );
};

export default About;