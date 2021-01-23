import React from 'react';
import './Skills.css';

const Skills = () => {
    return (
        <div className="skills">
            <div className="skillsHeaderText">
                <h2>FRONT END</h2>
            </div>
            <div className="skills-div">
                <div className="left-col">
                    <div className="skill-wrapper">
                        <p>React</p>
                        <div className="container">
                            <div className="skill react"></div>
                        </div>
                    </div>
                    <div className="skill-wrapper">
                        <p>Javascript</p>
                        <div className="container">
                            <div className="skill javascript"></div>
                        </div>
                    </div>
                    <div className="skill-wrapper">
                        <p>CSS</p>
                        <div className="container">
                            <div className="skill css"></div>
                        </div>
                    </div>
                </div>
                <div className="right-col">
                    <div className="skill-wrapper">
                        <p>Vue</p>
                        <div className="container">
                            <div className="skill vue"></div>
                        </div>
                    </div>
                    <div className="skill-wrapper">
                        <p>Redux</p>
                        <div className="container">
                            <div className="skill redux"></div>
                        </div>
                    </div>
                    <div className="skill-wrapper">
                        <p>React Native</p>
                        <div className="container">
                            <div className="skill react-native"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;