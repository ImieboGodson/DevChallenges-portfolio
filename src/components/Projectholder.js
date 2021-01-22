import React from 'react';
import './Projectholder.css';

const Projectholder = () => {
    return(
        <div className="Projectholder">
            <div className="Project-thumbnail">
                {/* Thumbnail goes here */}
            </div>
            <div className="ProjectInfo">
                <div className="Taglist">
                    <p className="Tag Html">#HTML</p>
                    <p className="Tag Css">#CSS</p>
                    <p className="Tag Responsive">#responsive</p>
                </div>
                <div className="Details">
                    <h2 className="ProjectTitle">Recipe Blog</h2>
                    <p className="ProjectSummary">In this project, 
                    I work with HTML and CSS to create a responsive 
                    page . The design is from devchallenge.io. Donec 
                    aliquam est dui, vel vestibulum diam sollicitudin 
                    id. Quisque feugiat malesuada molestie. </p>
                    <div className="BtnWrapper">
                    <a href="#" class="Btn">Demo</a>
                    <a href="#" class="Btn Btn-outline">Code</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projectholder;