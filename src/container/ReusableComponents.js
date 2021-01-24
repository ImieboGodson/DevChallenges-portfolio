import Personaldetails from '../components/Personaldetails';
import Projectholder from '../components/Projectholder';
import Blogposts from '../components/Blogposts';
import React from 'react';
import './ReusableComponents.css';
import Skills from '../components/Skills';

const ReusableComponents = () => {
    return (
        <div className="ReusableComponents">
           <Personaldetails />
           <Projectholder />
           <Skills />
           <Blogposts />
        </div>
    );
}

export default ReusableComponents;