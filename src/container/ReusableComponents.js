import Personaldetails from '../components/Personaldetails';
import Projectholder from '../components/Projectholder';
import React from 'react';
import './ReusableComponents.css';

const ReusableComponents = () => {
    return (
        <div className="ReusableComponents">
           <Personaldetails />
           <Projectholder />
        </div>
    );
}

export default ReusableComponents;